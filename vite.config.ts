import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: { env: Record<string, string | undefined> };

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase = process.env.GITHUB_ACTIONS === "true" && repoName ? `/${repoName}/` : "/";

// Set VITE_BASE_PATH=/your-repo-name/ to override the automatic GitHub Pages base path.
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? githubPagesBase,
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/src/data/scenarioPacks/context/generated/")) {
            const fileName = id.split("/").pop()?.replace(/\.[tj]s$/, "");
            return fileName ? `context-${fileName}` : "context-scenarios";
          }
          const scenarioPack = id.match(/\/src\/data\/scenarioPacks\/([^/.]+)\.ts$/);
          if (scenarioPack) {
            return `scenario-${scenarioPack[1]}`;
          }
          const heavyData = id.match(/\/src\/data\/(contextGlossary|glossaryTerms|teacherResources|sourceIndex)\.ts$/);
          if (heavyData) {
            return `data-${heavyData[1]}`;
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  }
});
