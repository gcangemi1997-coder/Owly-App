import { defineConfig } from "vite";
export default defineConfig({
  test: {
    environment: "node", // Here i test Js only, not HTML
    globals: true,
  },
});
