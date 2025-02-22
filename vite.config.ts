import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        background: "src/background/background.ts",
        content: "src/content/content.tsx",
        popup: "src/popup/Popup.tsx",
        options: "src/options/Options.tsx",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
