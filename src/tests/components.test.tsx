import { render, screen } from "@testing-library/react";
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
    const { container } = render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /start new life/i }));
    await userEvent.click(screen.getByRole("button", { name: /choose goal/i }));
    await userEvent.click(screen.getByRole("button", { name: /start life/i }));
    expect(screen.getByText(/life skills/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /age up/i }));
    expect(screen.getByRole("dialog", { name: /new event/i })).toBeInTheDocument();
    expect(screen.getAllByText(/effects revealed after you choose/i).length).toBeGreaterThan(0);
    const firstAvailableChoice = container.querySelector<HTMLButtonElement>(".choice-card:not(:disabled)");
    expect(firstAvailableChoice).not.toBeNull();
    await userEvent.click(firstAvailableChoice!);
    expect(container.querySelector('[aria-label="Revealed choice effects"]')).not.toBeNull();
  });

  it("lets activity shortcut links open the correct money sections", async () => {
    localStorage.clear();
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
    expect(screen.getByRole("button", { name: /copy report/i })).toBeDisabled();
  });
});
