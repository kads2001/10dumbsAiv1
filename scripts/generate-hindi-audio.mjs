import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HINDI_DIR = join(process.cwd(), "public", "samples", "hindi");
mkdirSync(HINDI_DIR, { recursive: true });

const SAMPLES = [
  {
    name: "namaste.mp3",
    text: "नमस्ते! 10Dumbs Inc. में आपका स्वागत है। मैं मार्कस हूँ, आपका प्रिंसिपल सॉल्यूशंस आर्किटेक्ट। आज मैं आपकी क्या सहायता कर सकता हूँ?"
  },
  {
    name: "services.mp3",
    text: "10Dumbs Inc. सम्पूर्ण एंटरप्राइज टेक्नोलॉजी सर्विसेज प्रदान करता है: जैसे कस्टम क्लाउड आर्किटेक्चर, वेब और मोबाइल ऍप्स, एआई डिजिटल अवतार, और मजबूत साइबर सुरक्षा।"
  },
  {
    name: "cloud.mp3",
    text: "हमारी डेवऑप्स और क्लाउड इंजीनियरिंग टीम एडब्ल्यूएस और एज़्योर पर कुबरनेट्स क्लस्टर, ऑटोमेटेड सीआई सीडी पाइपलाइन और 99.99% अपटाइम सुनिश्चित करती है।"
  },
  {
    name: "apps.mp3",
    text: "हम कस्टम सॉफ्टवेयर, आईओएस और एंड्रॉइड मोबाइल ऍप्लिकेशन्स बनाते हैं जो लाखों एक्टिव यूज़र्स को आसानी से संभाल सकते हैं।"
  },
  {
    name: "ai.mp3",
    text: "हम जनरेटिव एआई, एलएलएम फाइन ट्यूनिंग, और ऑटोनॉमस 3D डिजिटल ह्यूमन्स तैयार करते हैं जो आपके क्लाइंट्स को तुरंत जवाब देते हैं।"
  },
  {
    name: "pricing.mp3",
    text: "10Dumbs के पास बहुत ही फ्लेक्सिबल प्राइजिंग मॉडल्स हैं: जैसे डेडिकेटेड इंजीनियरिंग टीम्स और प्रोजेक्ट माइलस्टोन्स। आप अपनी आवश्यकता के अनुसार चुन सकते हैं।"
  },
  {
    name: "why10dumbs.mp3",
    text: "क्लाइंट्स 10Dumbs को हमारे सीनियर इंजीनियर्स, तेज़ डिलीवरी, और अत्याधुनिक एआई टेक्नोलॉजी के लिए चुनते हैं जो बिज़नेस को तेजी से आगे बढ़ाती है।"
  },
  {
    name: "contact.mp3",
    text: "आप आज ही 10Dumbs की इंजीनियरिंग लीडरशिप के साथ कंसल्टेशन कॉल शेड्यूल कर सकते हैं। हम आपकी सहायता के लिए सदैव उपलब्ध हैं।"
  },
  {
    name: "about.mp3",
    text: "10Dumbs Inc. एक मॉडर्न टेक्नोलॉजी पार्टनर है। हम बड़ी कंपनियों और स्टार्टअप्स को डिजिटल ट्रांसफॉर्मेशन और मिशन-क्रिटिकल सॉफ्टवेयर डिलीवर करते हैं।"
  },
  {
    name: "kaiseho.mp3",
    text: "मैं बहुत बढ़िया हूँ! 10Dumbs पर हम हमेशा तैयार हैं। बताइए आज आपके प्रोजेक्ट के बारे में क्या चर्चा करनी है?"
  },
  {
    name: "thanks.mp3",
    text: "आपका बहुत-बहुत धन्यवाद! अगर आपके कोई और प्रश्न हैं, तो बेझिझक पूछिए। मैं आपकी सेवा में हाज़िर हूँ।"
  },
  {
    name: "security.mp3",
    text: "सुरक्षा और गोपनीयता हमारी पहली प्राथमिकता है। हमारे सभी सिस्टम एसओसी-2, हिपा, और जीडीपीआर मानकों का कड़ाई से पालन करते हैं।"
  }
];

async function generate() {
  console.log("Generating Hindi voice samples for 10Dumbs...");
  for (const item of SAMPLES) {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=hi&client=tw-ob&q=${encodeURIComponent(item.text)}`;
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
      });
      if (!res.ok) {
        console.error(`Failed ${item.name}: ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const dest = join(HINDI_DIR, item.name);
      writeFileSync(dest, buffer);
      console.log(`✓ Generated ${item.name} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Error generating ${item.name}:`, e.message);
    }
  }
  console.log("Done generating all Hindi voice samples!");
}

generate();
