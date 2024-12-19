import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "@fortawesome/free-solid-svg-icons", 
        "react-router-dom" // Add react-router-dom here
      ],
    },
  },
});
