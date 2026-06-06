import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { App } from "../app/App";

describe("app components", () => {
  it("disables continue without a save and keeps teacher tools locked when no hash is configured", async () => {
    localStorage.clear();
    sessionStorage.clear();
    render(<App />);
    expect(screen.getByRole("button", { name: /continue saved life/i })).toBeDisabled();
    await userEvent.click(screen.getByRole("button", { name: /teacher tools/i }));
    expect(screen.getByRole("heading", { name: /teacher tools locked/i })).toBeInTheDocument();
    expect(screen.getByText(/teacher password hash is not configured/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /unlock teacher tools/i })).toBeDisabled();
  });

  it("starts a new life and reveals choice effects after selection", async () => {
    localStorage.clear();
    localStorage.setItem("moneylife.skipTutorial", "true");
    const { container } = render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /start new life/i }));
    await userEvent.click(screen.getByRole("button", { name: /choose goal/i }));
    await userEvent.click(screen.getByRole("button", { name: /start life/i }));
    expect(screen.getByText(/life skills/i)).toBeInTheDocument();
    expect(screen.getByText(/score guide and support circle/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /age up/i }));
    expect(screen.getByRole("dialog", { name: /new event/i })).toBeInTheDocument();
    expect(screen.getAllByText(/effects revealed after you choose/i).length).toBeGreaterThan(0);
    const firstAvailableChoice = container.querySelector<HTMLButtonElement>(".choice-card:not(:disabled)");
    expect(firstAvailableChoice).not.toBeNull();
    await userEvent.click(firstAvailableChoice!);
    expect(container.querySelector('[aria-label="Revealed choice effects"]')).not.toBeNull();
  });

  it("allows a student to start Open Life free play with no preset checklist", async () => {
    localStorage.clear();
    localStorage.setItem("moneylife.skipTutorial", "true");
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /start new life/i }));
    await userEvent.click(screen.getByRole("button", { name: /choose goal/i }));
    await userEvent.click(screen.getByRole("button", { name: /open life/i }));
    await userEvent.click(screen.getByRole("button", { name: /start open life/i }));
    expect(screen.getByText(/play style/i)).toBeInTheDocument();
    expect(screen.getByText(/open-ended/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /badges/i }));
    expect(screen.getByRole("heading", { name: /open life \/ achievements/i })).toBeInTheDocument();
    expect(screen.getAllByText((_, element) => element?.textContent?.match(/set your own private win condition/i) !== null).length).toBeGreaterThan(0);
  });

  it("lets activity shortcut links open the correct money sections", async () => {
    localStorage.clear();
    localStorage.setItem("moneylife.skipTutorial", "true");
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /start new life/i }));
    await userEvent.click(screen.getByRole("button", { name: /choose goal/i }));
    await userEvent.click(screen.getByRole("button", { name: /start life/i }));
    await userEvent.click(screen.getByRole("button", { name: /activities/i }));
    await userEvent.click(screen.getByRole("button", { name: /bank \/ save/i }));
    expect(screen.getByRole("heading", { name: /bank \/ save/i })).toBeInTheDocument();
  });

  it("opens the static-safe issue reporter", async () => {
    localStorage.clear();
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /report a bug or issue/i }));
    expect(screen.getByRole("dialog", { name: /bug or issue reporter/i })).toBeInTheDocument();
    expect(screen.getByText(/not include student names/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/optional contact/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send & save/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /^copy$/i })).toBeDisabled();
    await userEvent.type(screen.getByLabelText(/what happened/i), "The activity button did not open.");
    await userEvent.click(screen.getByRole("button", { name: /send & save/i }));
    expect(screen.getByText(/saved locally on this browser/i)).toBeInTheDocument();
    const reports = JSON.parse(localStorage.getItem("moneylife.debugReports.v1") ?? "[]");
    expect(reports).toHaveLength(1);
    expect(reports[0].description).toContain("activity button");
  });

  it("shows walkthrough modal on start and respects skip action", async () => {
    localStorage.clear();
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /start new life/i }));
    await userEvent.click(screen.getByRole("button", { name: /choose goal/i }));
    await userEvent.click(screen.getByRole("button", { name: /start life/i }));
    
    // Walkthrough Modal should display welcome slide
    expect(screen.getByText(/How to Play Guide/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Welcome to MoneyLife Quest/i })).toBeInTheDocument();

    // Click Next
    await userEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByRole("heading", { name: /Your Life Skills & Stats/i })).toBeInTheDocument();

    // Click Skip
    await userEvent.click(screen.getByRole("button", { name: /^skip$/i }));
    expect(screen.queryByText(/How to Play Guide/i)).not.toBeInTheDocument();
    expect(screen.getByText(/life skills/i)).toBeInTheDocument();
  });
});

import { highlightGlossaryTerms } from "../features/glossary/GlossaryTooltip";

describe("GlossaryTooltip and highlighting", () => {
  it("renders text with glossary term highlighted as a trigger button", () => {
    const text = "You need a checking account to write checks.";
    render(<div>{highlightGlossaryTerms(text)}</div>);
    const trigger = screen.getByRole("button", { name: /checking account/i });
    expect(trigger).toBeInTheDocument();
  });

  it("opens the tooltip bubble on click and closes it with Escape", async () => {
    const text = "Let's learn about budgeting.";
    render(<div>{highlightGlossaryTerms(text)}</div>);
    const trigger = screen.getByRole("button", { name: /budgeting/i });
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    
    fireEvent.click(trigger);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    expect(screen.getByText(/how income will be used/i)).toBeInTheDocument();

    fireEvent.keyDown(trigger, { key: "Escape" });
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
