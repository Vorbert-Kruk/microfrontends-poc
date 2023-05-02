import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    react(),
    federation({
      name: "blueprints_microfrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./Microfrontend": "./src/exposedFunctionalities/Microfrontend",
        "./renderMicrofrontend":
          "./src/exposedFunctionalities/renderMicrofrontend",
      },
      shared: ["react", "react-dom", "styled-components", "@chakra-ui/react"],
    }),
  ],
});
