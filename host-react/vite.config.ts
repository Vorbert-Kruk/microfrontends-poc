import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_react",
      remotes: {
        blueprintsMicrofrontend: "http://localhost:5900/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
});
