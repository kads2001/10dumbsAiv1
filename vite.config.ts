import { readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";

const { version } = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));

// TTS middleware plugin for dynamic real-time speech generation
function ttsPlugin(): Plugin {
  return {
    name: "dynamic-tts-plugin",
    configureServer(server) {
      server.middlewares.use("/api/tts", async (req, res) => {
        try {
          const url = new URL(req.url || "", "http://localhost");
          const text = url.searchParams.get("text") || url.searchParams.get("q") || "";
          const lang = url.searchParams.get("lang") || "hi";
          if (!text) {
            res.statusCode = 400;
            res.end("Missing text parameter");
            return;
          }
          const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(text)}`;
          const response = await fetch(googleUrl, {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
          });
          if (!response.ok) {
            res.statusCode = response.status;
            res.end(`TTS service error: ${response.status}`);
            return;
          }
          res.setHeader("Content-Type", "audio/mpeg");
          res.setHeader("Cache-Control", "public, max-age=86400");
          const buffer = Buffer.from(await response.arrayBuffer());
          res.end(buffer);
        } catch (e: any) {
          res.statusCode = 500;
          res.end(e.message || "Internal server error");
        }
      });
    }
  };
}

const isLib = Boolean(process.env.BUILD_LIB);

// Web App build (default for Vercel/production) or Library build (if BUILD_LIB=1)
export default defineConfig({
  define: { __VERSION__: JSON.stringify(version) },
  plugins: [ttsPlugin()],
  build: isLib
    ? {
        lib: {
          entry: { index: "src/index.ts", react: "src/react.tsx", server: "src/server.ts", live: "src/live.ts" },
          formats: ["es"],
        },
        rollupOptions: {
          external: [/^three($|\/)/, "react", "react/jsx-runtime", "react-dom"],
        },
        sourcemap: true,
        target: "es2022",
      }
    : {
        outDir: "dist",
        sourcemap: true,
        target: "es2022",
      },
  server: {
    cors: true,
  },
});

