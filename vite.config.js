import { fileURLToPath } from "node:url";

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    // Replaces `tsconfigPaths: true`, which used to resolve `~/*` from
    // tsconfig.json. Vite does not read jsconfig.json, so the alias is
    // declared here; jsconfig.json only mirrors it for the editor.
    alias: [
      {
        find: /^~\//,
        replacement: fileURLToPath(new URL("./app/", import.meta.url)),
      },
    ],
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
