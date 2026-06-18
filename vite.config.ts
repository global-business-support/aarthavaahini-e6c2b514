import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Deploy target: Vercel (Nitro preset). In the Lovable sandbox the preset
  // is forced to cloudflare-module internally, so this only affects external
  // builds (e.g. Vercel CI).
  nitro: {
    preset: "vercel",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    server: {
      host: "0.0.0.0",
      allowedHosts: [
        ".lovable.app",
        ".lovableproject.com",
        ".vercel.app",
        ".netlify.app",
        "localhost",
        "127.0.0.1",
      ],
    },
    preview: {
      host: "0.0.0.0",
      allowedHosts: [
        ".lovable.app",
        ".lovableproject.com",
        ".vercel.app",
        ".netlify.app",
        "localhost",
        "127.0.0.1",
      ],
    },
  },
});
