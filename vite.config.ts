import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Public Supabase config (anon/publishable — safe to hardcode as fallback for
// external deployments like Vercel where env vars might not be set).
const SUPABASE_URL = "https://bplzxhfzlhazouysfxey.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwbHp4aGZ6bGhhem91eXNmeGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNjc1NDgsImV4cCI6MjA5NDg0MzU0OH0.5CG3Yxd2yRwXM3ScP65VKuxkpMVsnkBi6E0JQxjm1rA";
const SUPABASE_PROJECT_ID = "bplzxhfzlhazouysfxey";

// Prime process.env so SSR bundle picks these up even if the host (Vercel)
// hasn't configured env vars.
process.env.SUPABASE_URL ||= SUPABASE_URL;
process.env.SUPABASE_PUBLISHABLE_KEY ||= SUPABASE_PUBLISHABLE_KEY;
process.env.SUPABASE_PROJECT_ID ||= SUPABASE_PROJECT_ID;
process.env.VITE_SUPABASE_URL ||= SUPABASE_URL;
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= SUPABASE_PUBLISHABLE_KEY;
process.env.VITE_SUPABASE_PROJECT_ID ||= SUPABASE_PROJECT_ID;

export default defineConfig({
  // Deploy target: Vercel (Nitro preset). In the Lovable sandbox the preset
  // is forced to cloudflare-module internally, so this only affects external
  // builds (e.g. Vercel CI).
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: ".vercel/output/static",
    },
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    define: {
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(
        process.env.VITE_SUPABASE_URL,
      ),
      "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(
        process.env.VITE_SUPABASE_PUBLISHABLE_KEY,
      ),
      "import.meta.env.VITE_SUPABASE_PROJECT_ID": JSON.stringify(
        process.env.VITE_SUPABASE_PROJECT_ID,
      ),
    },
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
