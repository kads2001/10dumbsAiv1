// Test fetching Google Translate TTS in Node
const text = encodeURIComponent("नमस्ते! 10Dumbs Inc. में आपका स्वागत है।");
const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=hi&client=tw-ob&q=${text}`;

try {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
  });
  console.log("Status:", res.status, "Content-Type:", res.headers.get("content-type"));
  const buffer = await res.arrayBuffer();
  console.log("Buffer size:", buffer.byteLength);
} catch (e) {
  console.error("Fetch error:", e.message);
}
