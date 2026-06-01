/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEACHER_PASSWORD?: string;
  readonly VITE_GITHUB_ISSUES_URL?: string;
  readonly VITE_SUPPORT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
