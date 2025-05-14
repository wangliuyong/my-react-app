import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@models": path.resolve(__dirname, "./public/models"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://your-backend.com",
        changeOrigin: true,
      },
    },
  },
});
