import type { GameState } from "./game";

export type IssueType = "bug" | "content" | "accessibility" | "confusing" | "other";

export type IssueDraft = {
  issueType: IssueType;
  description: string;
  steps: string;
  contact: string;
  includeDiagnostics: boolean;
};

export type IssueDiagnostics = {
  appVersion: string;
  url: string;
  browser: string;
  screenSize: string;
  gameAge?: number;
  gameTurn?: number;
  gameMode?: GameState["mode"];
  gameStatus?: GameState["status"];
  activeGoalId?: string;
  pendingEventId?: string;
  achievements?: number;
};

export type IssueReport = IssueDraft & {
  id: string;
  createdAt: string;
  app: string;
  status?: "saved-local" | "sent-remote" | "remote-failed";
  remoteError?: string;
  diagnostics?: IssueDiagnostics;
};
