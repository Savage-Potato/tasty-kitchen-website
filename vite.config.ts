import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ Vite Configuration for React + GitHub Pages
export default defineConfig(({ mode }) => ({
  // IMPORTANT: This must match your repository name exactly
  // For example: https://savage-potato.github.io/tasty-kitchen-website/
  base: mode === "production" ? "/tasty-kitchen-website/" : "/",

  // Local development server settings
  server: {
    host: "::",
    port: 8080,
  },

  // Plugins — React + SWC for fast builds
  plugins: [react()],

  // Path alias for cleaner imports (e.g., "@/components/...")
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Build settings (optional, but helpful)
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}));
