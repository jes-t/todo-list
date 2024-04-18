import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});

export default defineConfig({
  plugins: [react()],
  server: { port: 3000, fs: { cachedChecks: false } },
  resolve: {
    alias: [{ find: "src", replacement: path.join(__dirname, "src") }],
  },
  define: {
    "process.env": process.env,
  },
});
