import { rmSync, copyFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

if (existsSync("dist")) {
  rmSync("dist", { recursive: true, force: true });
}

execSync("npx vite build", { stdio: "inherit" });
execSync("npx tsc -p tsconfig.build.json", { stdio: "inherit" });

copyFileSync("model/viseme-model.bin", "dist/viseme-model.bin");
console.log("✓ Build complete with viseme model copied.");
