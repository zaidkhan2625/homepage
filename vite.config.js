import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/yum_r/",
  plugins: [react()],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
