import { writeFileSync, mkdirSync } from "node:fs";

async function download(url, dest) {
  console.log(`Downloading ${url} -> ${dest}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  console.log(`✓ Saved ${dest} (${buf.length} bytes)`);
}

async function run() {
  mkdirSync("public/avatars", { recursive: true });
  mkdirSync("public/samples", { recursive: true });
  mkdirSync("public/backgrounds", { recursive: true });

  await download("https://talking-avatar.dev/avatars/female.glb", "public/avatars/female.glb");
  await download("https://talking-avatar.dev/avatars/male.glb", "public/avatars/male.glb");
  await download("https://talking-avatar.dev/backgrounds/office-blur.webp", "public/backgrounds/office-blur.webp");

  const samples = [
    "openai-alloy.mp3",
    "openai-nova.mp3",
    "openai-echo.mp3",
    "openai-shimmer.mp3",
    "openai-onyx.mp3",
    "openai-fable.mp3"
  ];

  for (const s of samples) {
    try {
      await download(`https://talking-avatar.dev/samples/${s}`, `public/samples/${s}`);
    } catch (e) {
      console.warn(`Could not download sample ${s}:`, e.message);
    }
  }

  console.log("All assets cached locally in public/!");
}

run().catch(console.error);
