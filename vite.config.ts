import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: { env: Record<string, string | undefined> };

// Set VITE_BASE_PATH=/your-repo-name/ in GitHub Pages builds if the site is not served at the domain root.
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [react()]
});
