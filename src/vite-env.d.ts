/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEACHER_PASSWORD_HASH?: string;
  readonly VITE_DEBUG_REPORT_ENDPOINT?: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
