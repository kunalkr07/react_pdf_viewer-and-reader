import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "@fortawesome/free-solid-svg-icons", 
        // Remove react-router-dom from here
      ],
    },
  },
});
