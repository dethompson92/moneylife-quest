import { afterEach, describe, expect, it, vi } from "vitest";
import type { IssueReport } from "../types/reporting";
import { sendReportToEndpoint } from "../features/reporting/reportingUtils";

const report: IssueReport = {
  id: "DBG999",
  createdAt: "2026-06-06T00:00:00.000Z",
  app: "MoneyLife Quest",
  issueType: "bug",
  description: "The report should send to the inbox.",
  steps: "Tap Send & Save.",
  contact: "",
  includeDiagnostics: false,
  status: "saved-local"
};

describe("debug report sender", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("skips remote sending when no endpoint is configured", async () => {
    const result = await sendReportToEndpoint(report, "report text", "");
    expect(result).toEqual({ ok: false, skipped: true, error: "No debug report endpoint is configured." });
  });

  it("posts JSON to the configured endpoint", async () => {
    const fetchMock = vi.fn(async (_url: string, _init?: RequestInit) => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const result = await sendReportToEndpoint(report, "report text", "https://example.com/debug");

    expect(result).toEqual({ ok: true, mode: "cors" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe("https://example.com/debug");
    expect(fetchMock.mock.calls[0][1]).toMatchObject({
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
  });

  it("falls back to a no-cors text request for simple form endpoints", async () => {
    const fetchMock = vi
      .fn(async (_url: string, _init?: RequestInit) => new Response(null, { status: 200 }))
      .mockRejectedValueOnce(new Error("cors"))
      .mockResolvedValueOnce(new Response(null, { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const result = await sendReportToEndpoint(report, "report text", "https://example.com/debug");

    expect(result).toEqual({ ok: true, mode: "no-cors" });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[1][1]).toMatchObject({
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" }
    });
  });
});
