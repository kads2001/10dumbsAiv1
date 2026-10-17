import { TalkingAvatar } from "./TalkingAvatar";

// Knowledge Base Item Type
interface KnowledgeItem {
  keywords: string[];
  answer: string;
  audioFile: string;
}

// Comprehensive Hindi Knowledge Base for 10Dumbs Inc.
const HINDI_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    keywords: ["नमस्ते", "हेलो", "हाय", "namaste", "hello", "hi", "hey", "greetings", "subah", "pranam"],
    answer: "नमस्ते! 10Dumbs Inc. में आपका स्वागत है। मैं मार्कस हूँ, आपका प्रिंसिपल सॉल्यूशंस आर्किटेक्ट। आज मैं आपकी क्या सहायता कर सकता हूँ?",
    audioFile: "/samples/hindi/namaste.mp3",
  },
  {
    keywords: ["सर्विस", "सेवाएं", "क्या काम", "क्या करते", "काम क्या", "services", "offer", "provide", "solutions", "kya karte"],
    answer: "10Dumbs Inc. सम्पूर्ण एंटरप्राइज टेक्नोलॉजी सर्विसेज प्रदान करता है: जैसे कस्टम क्लाउड आर्किटेक्चर, वेब और मोबाइल ऍप्स, एआई डिजिटल अवतार, और मजबूत साइबर सुरक्षा।",
    audioFile: "/samples/hindi/services.mp3",
  },
  {
    keywords: ["क्लाउड", "डेवऑप्स", "सर्वर", "कुबरनेट्स", "एडब्ल्यूएस", "cloud", "devops", "kubernetes", "aws", "azure", "docker"],
    answer: "हमारी डेवऑप्स और क्लाउड इंजीनियरिंग टीम एडब्ल्यूएस और एज़्योर पर कुबरनेट्स क्लस्टर, ऑटोमेटेड सीआई सीडी पाइपलाइन और 99.99% अपटाइम सुनिश्चित करती है।",
    audioFile: "/samples/hindi/cloud.mp3",
  },
  {
    keywords: ["ऐप", "सॉफ्टवेयर", "वेबसाइट", "मोबाइल ऐप", "वेब", "app", "apps", "software", "website", "mobile", "ios", "android"],
    answer: "हम कस्टम सॉफ्टवेयर, आईओएस और एंड्रॉइड मोबाइल ऍप्लिकेशन्स बनाते हैं जो लाखों एक्टिव यूज़र्स को आसानी से संभाल सकते हैं।",
    audioFile: "/samples/hindi/apps.mp3",
  },
  {
    keywords: ["एआई", "अवतार", "रोबोट", "आर्टिफिशियल", "आर्टिफ़िशियल", "ai", "avatar", "llm", "gpt", "model", "voice bot"],
    answer: "हम जनरेटिव एआई, एलएलएम फाइन ट्यूनिंग, और ऑटोनॉमस 3D डिजिटल ह्यूमन्स तैयार करते हैं जो आपके क्लाइंट्स को तुरंत जवाब देते हैं।",
    audioFile: "/samples/hindi/ai.mp3",
  },
  {
    keywords: ["प्राइस", "कीमत", "खर्चा", "रेट", "चार्ज", "पैसा", "फीस", "budget", "cost", "pricing", "rate", "fees", "kitna kharcha", "paisa"],
    answer: "10Dumbs के पास बहुत ही फ्लेक्सिबल प्राइजिंग मॉडल्स हैं: जैसे डेडिकेटेड इंजीनियरिंग टीम्स और प्रोजेक्ट माइलस्टोन्स। आप अपनी आवश्यकता के अनुसार चुन सकते हैं।",
    audioFile: "/samples/hindi/pricing.mp3",
  },
  {
    keywords: ["क्यों", "फायदा", "कंपनी अच्छी", "बेस्ट", "why choose", "advantage", "benefit", "best", "kyun chune"],
    answer: "क्लाइंट्स 10Dumbs को हमारे सीनियर इंजीनियर्स, तेज़ डिलीवरी, और अत्याधुनिक एआई टेक्नोलॉजी के लिए चुनते हैं जो बिज़नेस को तेजी से आगे बढ़ाती है।",
    audioFile: "/samples/hindi/why10dumbs.mp3",
  },
  {
    keywords: ["कांटेक्ट", "संपर्क", "कॉल", "बात करनी", "मीटिंग", "contact", "call", "schedule", "meeting", "hire", "baat kaise"],
    answer: "आप आज ही 10Dumbs की इंजीनियरिंग लीडरशिप के साथ कंसल्टेशन कॉल शेड्यूल कर सकते हैं। हम आपकी सहायता के लिए सदैव उपलब्ध हैं।",
    audioFile: "/samples/hindi/contact.mp3",
  },
  {
    keywords: ["कंपनी", "10dumbs", "संस्थापक", "फाउंडर", "टीम", "company", "about", "team", "founder", "about 10dumbs"],
    answer: "10Dumbs Inc. एक मॉडर्न टेक्नोलॉजी पार्टनर है। हम बड़ी कंपनियों और स्टार्टअप्स को डिजिटल ट्रांसफॉर्मेशन और मिशन-क्रिटिकल सॉफ्टवेयर डिलीवर करते हैं।",
    audioFile: "/samples/hindi/about.mp3",
  },
  {
    keywords: ["कैसे हो", "हाल", "सब ठीक", "kaise ho", "how are you", "kya haal"],
    answer: "मैं बहुत बढ़िया हूँ! 10Dumbs पर हम हमेशा तैयार हैं। बताइए आज आपके प्रोजेक्ट के बारे में क्या चर्चा करनी है?",
    audioFile: "/samples/hindi/kaiseho.mp3",
  },
  {
    keywords: ["शुक्रिया", "धन्यवाद", "थैंक", "मस्त", "shukriya", "dhanyavaad", "thank", "thanks", "great", "awesome"],
    answer: "आपका बहुत-बहुत धन्यवाद! अगर आपके कोई और प्रश्न हैं, तो बेझिझक पूछिए। मैं आपकी सेवा में हाज़िर हूँ।",
    audioFile: "/samples/hindi/thanks.mp3",
  },
  {
    keywords: ["सुरक्षा", "सिक्योरिटी", "प्राइवेसी", "डेटा सेफ", "security", "privacy", "soc2", "safe", "gdpr"],
    answer: "सुरक्षा और गोपनीयता हमारी पहली प्राथमिकता है। हमारे सभी सिस्टम एसओसी-2, हिपा, और जीडीपीआर मानकों का कड़ाई से पालन करते हैं।",
    audioFile: "/samples/hindi/security.mp3",
  },
];

// Comprehensive English Knowledge Base for 10Dumbs Inc.
const ENGLISH_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    keywords: ["what", "services", "offer", "provide", "do you do", "solutions", "work"],
    answer: "Welcome to 10Dumbs Inc. We provide full-spectrum enterprise technology services: custom cloud architecture, web & mobile platforms, autonomous 3D voice avatars, and zero-trust cybersecurity.",
    audioFile: "/samples/openai-ash.mp3",
  },
  {
    keywords: ["cloud", "devops", "kubernetes", "aws", "azure", "infrastructure", "scaling", "docker"],
    answer: "Our DevOps and cloud engineering practice designs fault-tolerant multi-cloud environments, automated Kubernetes cluster orchestration, and zero-downtime CI/CD deployment pipelines backed by 99.99% enterprise SLAs.",
    audioFile: "/samples/openai-echo.mp3",
  },
  {
    keywords: ["software", "apps", "mobile", "ios", "android", "web", "frontend", "backend", "fullstack"],
    answer: "10Dumbs engineers high-performance web and mobile platforms using modern reactive frameworks, high-throughput microservices, and clean distributed architectures built to handle millions of active users.",
    audioFile: "/samples/openai-verse.mp3",
  },
  {
    keywords: ["ai", "machine learning", "llm", "agents", "voice", "model", "gpt", "fine-tuning", "avatar"],
    answer: "We specialize in Generative AI integrations, bespoke LLM fine-tuning, retrieval-augmented generation pipelines, and autonomous digital humans that deliver instant conversational value to your clients.",
    audioFile: "/samples/openai-cedar.mp3",
  },
  {
    keywords: ["security", "privacy", "soc2", "hipaa", "compliance", "safe", "gdpr", "cybersecurity"],
    answer: "Enterprise security is fundamental to 10Dumbs. All architectures adhere to strict SOC-2 Type II, HIPAA, and GDPR standards, with end-to-end data encryption and complete isolation of corporate IP.",
    audioFile: "/samples/openai-ash.mp3",
  },
  {
    keywords: ["pricing", "cost", "price", "rate", "quote", "hire", "engagement", "contract", "budget"],
    answer: "10Dumbs offers flexible engagement models: dedicated engineering pods, fixed-scope milestones, and pay-as-you-go AI avatar licensing. We can provide a comprehensive estimate tailored to your project roadmap.",
    audioFile: "/samples/openai-verse.mp3",
  },
  {
    keywords: ["why", "choose", "advantage", "benefit", "competitor", "difference"],
    answer: "Clients choose 10Dumbs for our senior engineering talent, rapid sprint velocity, enterprise architectural rigor, and our proprietary voice AI technology that drives meaningful business ROI.",
    audioFile: "/samples/openai-cedar.mp3",
  },
  {
    keywords: ["schedule", "contact", "consultation", "meeting", "call", "talk", "demo"],
    answer: "You can schedule a technical discovery consultation with the 10Dumbs engineering leadership today. Let us discuss how our tech services can accelerate your organization's goals.",
    audioFile: "/samples/openai-sage.mp3",
  },
  {
    keywords: ["hi", "hello", "hey", "marcus", "morning", "afternoon", "evening", "greetings"],
    answer: "Hello! Welcome to 10Dumbs Inc. I am Marcus, your Principal Solutions Architect. How may I assist your enterprise with our technology services today?",
    audioFile: "/samples/openai-ash.mp3",
  },
  {
    keywords: ["who", "founder", "about", "company", "10dumbs", "team"],
    answer: "10Dumbs Inc. is a modern technology and IT solutions partner. We empower enterprises, startups, and high-growth companies with mission-critical software, cloud systems, and intelligent digital avatars.",
    audioFile: "/samples/openai-echo.mp3",
  },
  {
    keywords: ["thank", "thanks", "great", "awesome", "perfect", "good"],
    answer: "You're very welcome! Feel free to ask more questions or continue our discussion. I am here whenever you're ready.",
    audioFile: "/samples/openai-verse.mp3",
  },
];

// Diverse rotating fallbacks so the avatar never speaks the same script repetitively
const HINDI_FALLBACKS = [
  {
    text: "10Dumbs Inc. पर हम आपके बिज़नेस के लिए कस्टम सॉफ्टवेयर, क्लाउड आर्किटेक्चर और एआई सॉल्यूशंस बनाते हैं। आप इसके बारे में विस्तार से पूछ सकते हैं।",
    audio: "/samples/hindi/services.mp3"
  },
  {
    text: "हम आपके तकनीकी प्रोजेक्ट को गति देने के लिए समर्पित हैं। आप हमारे क्लाउड, ऍप डेवलपमेंट या एआई अवतार के बारे में पूछ सकते हैं।",
    audio: "/samples/hindi/why10dumbs.mp3"
  },
  {
    text: "निश्चित रूप से! 10Dumbs की विशेषज्ञ टीम आपके साथ काम करने के लिए तैयार है। आप हमारी प्राइजिंग या कंसल्टेशन के बारे में भी जान सकते हैं।",
    audio: "/samples/hindi/contact.mp3"
  }
];

const ENGLISH_FALLBACKS = [
  {
    text: "At 10Dumbs Inc., our engineering team specializes in custom software, AI voice agents, and cloud modernization to address your exact requirements.",
    audio: "/samples/openai-ash.mp3"
  },
  {
    text: "We can design and build tailored digital solutions for your team. Would you like to explore our cloud services, mobile apps, or AI voice tech?",
    audio: "/samples/openai-verse.mp3"
  },
  {
    text: "Our enterprise pods are ready to support your technical roadmap. Feel free to ask about our pricing models or schedule a leadership consultation.",
    audio: "/samples/openai-echo.mp3"
  }
];

let fallbackCounter = 0;

// Language mode: 'hi' (Hindi) or 'en' (English)
let currentLanguage: "hi" | "en" = "hi";

function isHindiQuery(query: string): boolean {
  if (currentLanguage === "hi") return true;
  // Check for Devanagari characters
  if (/[\u0900-\u097F]/.test(query)) return true;
  // Check for common Hinglish words
  const hinglishTokens = ["kya", "kaise", "karna", "namaste", "batao", "kitna", "chahiye", "hai", "hain", "kyun", "aap", "tum", "dhanyavaad", "shukriya", "paisa", "kharcha", "seva", "kaun", "kaha"];
  const lower = query.toLowerCase();
  return hinglishTokens.some((t) => lower.includes(t));
}

function findResponse(query: string): { text: string; audioFile: string } {
  const isHindi = isHindiQuery(query);
  const q = query.toLowerCase().trim();
  const base = isHindi ? HINDI_KNOWLEDGE_BASE : ENGLISH_KNOWLEDGE_BASE;

  for (const item of base) {
    if (item.keywords.some((kw) => q.includes(kw.toLowerCase()))) {
      return { text: item.answer, audioFile: item.audioFile };
    }
  }

  // Cross-check in the other language base if no match found
  const otherBase = isHindi ? ENGLISH_KNOWLEDGE_BASE : HINDI_KNOWLEDGE_BASE;
  for (const item of otherBase) {
    if (item.keywords.some((kw) => q.includes(kw.toLowerCase()))) {
      return { text: item.answer, audioFile: item.audioFile };
    }
  }

  // Rotating fallback so he never repeats the exact same sentence
  const fallbacks = isHindi ? HINDI_FALLBACKS : ENGLISH_FALLBACKS;
  const picked = fallbacks[fallbackCounter % fallbacks.length];
  fallbackCounter++;
  return { text: picked.text, audioFile: picked.audio };
}

// Global Avatar State
let avatar: TalkingAvatar | null = null;
let isSpeaking = false;
let isListening = false;
let isContinuousMode = false;
let speechRecognizer: any = null;

// DOM Elements
const canvasContainer = document.getElementById("avatar-canvas") as HTMLElement;
const loadingShield = document.getElementById("loading-shield") as HTMLElement;
const captionSpeaker = document.getElementById("caption-speaker") as HTMLElement;
const captionText = document.getElementById("caption-text") as HTMLElement;
const micBtn = document.getElementById("mic-btn") as HTMLButtonElement;
const chatInput = document.getElementById("chat-input") as HTMLInputElement;
const sendBtn = document.getElementById("send-btn") as HTMLButtonElement;
const stopBtn = document.getElementById("stop-btn") as HTMLButtonElement;
const langBtn = document.getElementById("lang-btn") as HTMLButtonElement;
const langBadge = document.getElementById("lang-badge") as HTMLElement;
const voiceIndicator = document.getElementById("voice-indicator") as HTMLElement;
const handsfreeBadge = document.getElementById("handsfree-badge") as HTMLElement;

function updateCaptions(speaker: string, text: string) {
  if (captionSpeaker) captionSpeaker.textContent = speaker;
  if (captionText) captionText.textContent = `"${text}"`;
}

// Answer user and manage conversation loop
async function answerUser(userQuery: string) {
  if (!avatar) return;

  // Temporarily pause recognition while avatar speaks to prevent microphone echo loop
  pauseRecognition();

  // Thinking phase
  avatar.setStatus("thinking");
  const isHindi = isHindiQuery(userQuery);
  updateCaptions(
    isHindi ? "मार्कस • 10Dumbs आर्किटेक्ट" : "Marcus • 10Dumbs AI",
    isHindi ? "आपके सवाल को प्रोसेस कर रहा हूँ..." : "Processing your question..."
  );

  // Match answer
  const matched = findResponse(userQuery);

  // Brief thinking cadence
  await new Promise((r) => setTimeout(r, 450));

  try {
    isSpeaking = true;
    stopBtn.classList.add("visible");
    voiceIndicator.classList.add("active");
    updateCaptions(
      isHindi ? "मार्कस • 10Dumbs आर्किटेक्ट" : "Marcus • 10Dumbs AI",
      matched.text
    );

    // Speak audio with lip sync
    await avatar.speak(matched.audioFile);
  } catch (err) {
    console.warn("Avatar speech interrupted:", err);
  } finally {
    isSpeaking = false;
    stopBtn.classList.remove("visible");
    voiceIndicator.classList.remove("active");

    if (avatar) avatar.setStatus("listening");

    // Continuous Hands-Free Mode: automatically resume listening immediately!
    if (isContinuousMode) {
      updateCaptions(
        isHindi ? "मार्कस • 10Dumbs आर्किटेक्ट" : "Marcus • 10Dumbs AI",
        isHindi
          ? "मैं सुन रहा हूँ। अपना अगला सवाल बोलिए..."
          : "I am listening. Ask your next question whenever you are ready..."
      );
      setTimeout(() => {
        if (isContinuousMode && !isSpeaking) {
          startListening();
        }
      }, 400);
    }
  }
}

// Speech Recognition (Speech-to-Text)
function setupSpeechRecognition() {
  const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognitionClass) {
    console.warn("Speech Recognition not supported in this browser.");
    return;
  }

  try {
    if (speechRecognizer) {
      try { speechRecognizer.abort(); } catch {}
    }

    const recognition = new SpeechRecognitionClass();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = currentLanguage === "hi" ? "hi-IN" : "en-US";

    recognition.onstart = () => {
      isListening = true;
      micBtn.classList.add("listening");
      voiceIndicator.classList.add("active");
      if (avatar) avatar.setStatus("listening");
    };

    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      if (transcript.trim()) {
        updateCaptions(currentLanguage === "hi" ? "आप" : "You", transcript);
        chatInput.value = transcript;
      }
    };

    recognition.onerror = (event: any) => {
      console.warn("Speech recognition error:", event.error);
      isListening = false;
      micBtn.classList.remove("listening");
      voiceIndicator.classList.remove("active");

      // In continuous mode, automatically recover from harmless network/no-speech errors
      if (isContinuousMode && !isSpeaking) {
        setTimeout(() => {
          if (isContinuousMode && !isSpeaking) startListening();
        }, 600);
      }
    };

    recognition.onend = () => {
      isListening = false;
      micBtn.classList.remove("listening");
      voiceIndicator.classList.remove("active");

      const query = chatInput.value.trim();
      if (query) {
        chatInput.value = "";
        answerUser(query);
      } else if (isContinuousMode && !isSpeaking) {
        setTimeout(() => {
          if (isContinuousMode && !isSpeaking) startListening();
        }, 400);
      }
    };

    speechRecognizer = recognition;
  } catch (err) {
    console.warn("SpeechRecognition init error:", err);
  }
}

function startListening() {
  if (isSpeaking && avatar) {
    avatar.stopSpeaking();
  }

  if (speechRecognizer) {
    try {
      speechRecognizer.start();
    } catch {
      try {
        speechRecognizer.stop();
        setTimeout(() => speechRecognizer.start(), 200);
      } catch {}
    }
  } else {
    const input = prompt(
      currentLanguage === "hi"
        ? "कृपया अपना संदेश यहाँ टाइप करें:"
        : "Please type your message:"
    );
    if (input) {
      updateCaptions(currentLanguage === "hi" ? "आप" : "You", input);
      answerUser(input);
    }
  }
}

function pauseRecognition() {
  if (speechRecognizer) {
    try {
      speechRecognizer.stop();
    } catch {}
  }
  isListening = false;
  micBtn.classList.remove("listening");
  voiceIndicator.classList.remove("active");
}

function toggleContinuousMode() {
  if (isListening && isContinuousMode) {
    isContinuousMode = false;
    handsfreeBadge.classList.remove("active");
    pauseRecognition();
    updateCaptions(
      currentLanguage === "hi" ? "मार्कस • 10Dumbs आर्किटेक्ट" : "Marcus • 10Dumbs AI",
      currentLanguage === "hi"
        ? "हैंड्स-फ्री वॉइस मोड रुका हुआ है। बात करने के लिए माइक बटन दबाएँ।"
        : "Hands-free voice mode paused. Click the mic button to talk again."
    );
    return;
  }

  isContinuousMode = true;
  handsfreeBadge.classList.add("active");
  startListening();
  updateCaptions(
    currentLanguage === "hi" ? "मार्कस • 10Dumbs आर्किटेक्ट" : "Marcus • 10Dumbs AI",
    currentLanguage === "hi"
      ? "हैंड्स-फ्री वॉइस मोड सक्रिय है। बोलिए, मैं सुन रहा हूँ..."
      : "Hands-free voice mode active. Speak naturally, I am listening..."
  );
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "hi" ? "en" : "hi";
  if (langBadge) {
    langBadge.textContent = currentLanguage === "hi" ? "🇮🇳 हिन्दी" : "🇬🇧 English";
  }
  chatInput.placeholder =
    currentLanguage === "hi"
      ? "हिंदी या English में बोलें या टाइप करें..."
      : "Type or click the mic for continuous conversation...";

  updateCaptions(
    currentLanguage === "hi" ? "मार्कस • 10Dumbs आर्किटेक्ट" : "Marcus • 10Dumbs AI",
    currentLanguage === "hi"
      ? "भाषा हिन्दी सेट की गई है। आप बोल सकते हैं।"
      : "Language set to English. Speak or type your question."
  );

  setupSpeechRecognition();
  if (isContinuousMode) {
    startListening();
  }
}

// Initialize Male Avatar (Rocketbox Male)
async function initAvatar() {
  try {
    avatar = new TalkingAvatar({
      container: canvasContainer,
      avatarUrl: "/avatars/male.glb",
      modelUrl: "/viseme-model.bin",
      streamDelayMs: 150,
      onError: (err) => console.error("TalkingAvatar error:", err),
    });

    await avatar.ready;
    loadingShield.classList.add("hidden");
  } catch (err) {
    console.error("Failed to load male avatar:", err);
  }
}

// Event Listeners
function setupEvents() {
  // Mic Button: Toggle Continuous Hands-Free Conversation
  micBtn.addEventListener("click", () => {
    toggleContinuousMode();
  });

  // Language Toggle Button (Hindi / English)
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      toggleLanguage();
    });
  }

  // Stop Button: Interrupt speech & pause hands-free
  stopBtn.addEventListener("click", () => {
    if (avatar) avatar.stopSpeaking();
    pauseRecognition();
    isSpeaking = false;
    stopBtn.classList.remove("visible");
    voiceIndicator.classList.remove("active");
    updateCaptions(
      currentLanguage === "hi" ? "मार्कस • 10Dumbs आर्किटेक्ट" : "Marcus • 10Dumbs AI",
      currentLanguage === "hi"
        ? "मैं सुन रहा हूँ। आप क्या जानना चाहते हैं?"
        : "I am listening. What would you like to know next?"
    );
  });

  // Send Text Button
  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (!text) return;
    chatInput.value = "";
    updateCaptions(currentLanguage === "hi" ? "आप" : "You", text);
    answerUser(text);
  });

  // Chat Input Enter Key
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const text = chatInput.value.trim();
      if (!text) return;
      chatInput.value = "";
      updateCaptions(currentLanguage === "hi" ? "आप" : "You", text);
      answerUser(text);
    }
  });
}

// Startup
window.addEventListener("DOMContentLoaded", () => {
  setupSpeechRecognition();
  setupEvents();
  initAvatar();
});
