import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ Make sure this base path exactly matches your GitHub repo name:
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/tasty-kitchen-website/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
