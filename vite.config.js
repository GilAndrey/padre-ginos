import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanStackRouterVite } from "@tanstack/router/vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [tanStackRouterVite(), react()],
});
