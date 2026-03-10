let nlpHistory = [];

const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_dashboard: "Doctor's Dashboard",
        nav_triage: "Chat Triage",
        nav_login: "Patient Login",
        hero_title: "The Future of Mental Health Diagnosis",
        hero_desc: "Our intelligent AI platform detects subtle emotional signals in voice, facial expressions, and text narratives to assist doctors in early risk identification.",
        hero_btn_demo: "Try Interactive Demo",
        hero_btn_chat: "Launch Chatbot",
        stat_uptime: "Uptime & Reliability",
        stat_models: "Multi-modal Models",
        stat_latency: "Real-time Latency",
        stat_encryption: "Bit Encryption (HIPAA)",
        cta_title: "Ready to Enhance Patient Care?",
        cta_desc: "Join the next generation of predictive emotional health diagnostics.",
        cta_btn: "Start Trial Program",
        dash_title: "Multi-Modal Emotion AI",
        dash_subtitle: "Test the capabilities of our reasoning engines below. Ensure permissions are granted where necessary.",
        tool_nlp_title: "AI Reasoning NLP",
        tool_nlp_desc: "Detect emotional intent and clinical risk from patient narratives.",
        tool_nlp_placeholder: "Type patient narrative...",
        btn_send: "Send",
        tool_vision_title: "AI Visual Health Scan",
        tool_vision_desc: "Early Health Indicator Detection via eye and skin wellness indicators.",
        btn_start_scan: "Start Visual Scan",
        tool_voice_title: "Voice Stress Analysis",
        tool_voice_desc: "Algorithmic decomposition of vocal tremors and speech velocity.",
        btn_record: "Record Sample",
        sync_title: "Doctor's Dashboard Sync",
        sync_desc: "Insights merge directly into a central patient monitoring timeline.",
        insight_center_title: "Clinical Insight Center",
        insight_center_desc: "Run a test in the nodes above to see insights populate here in real-time.",
        profile_id: "Patient ID",
        profile_status: "Status",
        status_active: "● Active",
        profile_checkup: "Next Checkup",
        checkup_date: "March 15, 2026"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Acerca de",
        nav_dashboard: "Panel del Doctor",
        nav_triage: "Triage de Chat",
        nav_login: "Inicio de Paciente",
        hero_title: "El Futuro del Diagnóstico de Salud Mental",
        hero_desc: "Nuestra plataforma de IA inteligente detecta señales emocionales sutiles en la voz, expresiones faciales y narrativas de texto para ayudar a los médicos en la identificación temprana de riesgos.",
        hero_btn_demo: "Probar Demo Interactiva",
        hero_btn_chat: "Iniciar Chatbot",
        stat_uptime: "Tiempo de actividad y confiabilidad",
        stat_models: "Modelos multimodales",
        stat_latency: "Latencia en tiempo real",
        stat_encryption: "Cifrado de bits (HIPAA)",
        cta_title: "¿Listo para mejorar la atención al paciente?",
        cta_desc: "Únase a la próxima generación de diagnósticos predictivos de salud emocional.",
        cta_btn: "Iniciar programa de prueba",
        dash_title: "IA de Emoción Multimodal",
        dash_subtitle: "Pruebe las capacidades de nuestros motores de razonamiento a continuación. Asegúrese de otorgar los permisos necesarios.",
        tool_nlp_title: "IA de Razonamiento NLP",
        tool_nlp_desc: "Detecte la intención emocional y el riesgo clínico de las narrativas de los pacientes.",
        tool_nlp_placeholder: "Escriba la narrativa del paciente...",
        btn_send: "Enviar",
        tool_vision_title: "Escaneo de Salud Visual por IA",
        tool_vision_desc: "Detección temprana de indicadores de salud a través de indicadores de bienestar ocular y cutáneo.",
        btn_start_scan: "Iniciar Escaneo Visual",
        tool_voice_title: "Análisis de Estrés por Voz",
        tool_voice_desc: "Descomposición algorítmica de los temblores vocales y la velocidad del habla.",
        btn_record: "Grabar Muestra",
        sync_title: "Sincronización del Panel del Doctor",
        sync_desc: "Los conocimientos se fusionan directamente en una línea de tiempo central de monitoreo del paciente.",
        insight_center_title: "Centro de Información Clínica",
        insight_center_desc: "Realice una prueba en los nodos anteriores para ver cómo se completan los conocimientos aquí en tiempo real.",
        profile_id: "ID del Paciente",
        profile_status: "Estado",
        status_active: "● Activo",
        profile_checkup: "Próxima Cita",
        checkup_date: "15 de marzo de 2026"
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_dashboard: "Tableau de Bord",
        nav_triage: "Triage par Chat",
        nav_login: "Connexion Patient",
        hero_title: "L'Avenir du Diagnostic de Santé Mentale",
        hero_desc: "Notre plateforme d'IA intelligente détecte des signaux émotionnels subtils dans la voix, les expressions faciales et les récits textuels pour aider les médecins à identifier précocement les risques.",
        hero_btn_demo: "Essayer la démo",
        hero_btn_chat: "Lancer le Chatbot",
        stat_uptime: "Disponibilité et fiabilité",
        stat_models: "Modèles multi-modaux",
        stat_latency: "Latence en temps réel",
        stat_encryption: "Cryptage (HIPAA)",
        cta_title: "Prêt à améliorer les soins aux patients ?",
        cta_desc: "Rejoignez la prochaine génération de diagnostics prédictifs de santé émotionnelle.",
        cta_btn: "Démarrer le programme",
        dash_title: "IA d'Émotion Multimodale",
        dash_subtitle: "Testez les capacités de nos moteurs de raisonnement ci-dessous. Assurez-vous que les autorisations sont accordées si nécessaire.",
        tool_nlp_title: "IA de Raisonnement NLP",
        tool_nlp_desc: "Détecter l'intention émotionnelle et le risque clinique à partir des récits des patients.",
        tool_nlp_placeholder: "Saisir le récit du patient...",
        btn_send: "Envoyer",
        tool_vision_title: "Analyse de Santé Visuelle par IA",
        tool_vision_desc: "Détection précoce des indicateurs de santé via le bien-être oculaire et cutané.",
        btn_start_scan: "Démarrer l'analyse visuelle",
        tool_voice_title: "Analyse du Stress Vocal",
        tool_voice_desc: "Décomposition algorithmique des tremblements vocaux et de la vitesse de parole.",
        btn_record: "Enregistrer un échantillon",
        sync_title: "Synchronisation du tableau de bord",
        sync_desc: "Les informations fusionnent directement dans une chronologie centrale de surveillance des patients.",
        insight_center_title: "Centre d'Aperçu Clinique",
        insight_center_desc: "Exécutez un test dans les nœuds ci-dessus pour voir les informations s'afficher ici en temps réel.",
        profile_id: "ID du Patient",
        profile_status: "Statut",
        status_active: "● Actif",
        profile_checkup: "Prochain RDV",
        checkup_date: "15 mars 2026"
    },
    hi: {
        nav_home: "होम",
        nav_about: "हमारे बारे में",
        nav_dashboard: "डॉक्टर डैशबोर्ड",
        nav_triage: "चैट ट्राइएज",
        nav_login: "पेशेंट लॉगिन",
        hero_title: "मानसिक स्वास्थ्य निदान का भविष्य",
        hero_desc: "हमारा इंटेलिजेंट एआई प्लेटफॉर्म आवाज, चेहरे के भाव और टेक्स्ट में सूक्ष्म भावनात्मक संकेतों का पता लगाता है ताकि डॉक्टरों को शुरुआती जोखिम की पहचान करने में मदद मिल सके।",
        hero_btn_demo: "डेमो आजमाएं",
        hero_btn_chat: "चैटबोट शुरू करें",
        stat_uptime: "अपटाइम और विश्वसनीयता",
        stat_models: "मल्टी-मॉडल",
        stat_latency: "रियल-टाइम लेटेंसी",
        stat_encryption: "एन्क्रिप्शन (HIPAA)",
        cta_title: "क्या आप देखभाल सुधारने के लिए तैयार हैं?",
        cta_desc: "भावनात्मक स्वास्थ्य निदान की अगली पीढ़ी में शामिल हों।",
        cta_btn: "ट्रायल शुरू करें",
        dash_title: "मल्टी-मोडल इमोशन एआई",
        dash_subtitle: "नीचे हमारे तर्क इंजन की क्षमताओं का परीक्षण करें। सुनिश्चित करें कि अनुमति दी गई है।",
        tool_nlp_title: "एआई रीजनिंग एनएलपी",
        tool_nlp_desc: "रोगी के वर्णन से भावनात्मक इरादे और नैदानिक जोखिम का पता लगाएं।",
        tool_nlp_placeholder: "रोगी का विवरण लिखें...",
        btn_send: "भेजें",
        tool_vision_title: "एआई विजुअल हेल्थ स्कैन",
        tool_vision_desc: "आंखों और त्वचा के स्वास्थ्य संकेतकों के माध्यम से प्रारंभिक स्वास्थ्य संकेतक का पता लगाना।",
        btn_start_scan: "विजुअल स्कैन शुरू करें",
        tool_voice_title: "आवाज तनाव विश्लेषण",
        tool_voice_desc: "मुखर झटके और भाषण वेग का एल्गोरिथम अपघटन।",
        btn_record: "सैंपल रिकॉर्ड करें",
        sync_title: "डॉक्टर डैशबोर्ड सिंक",
        sync_desc: "अंतर्दृष्टि सीधे एक केंद्रीय रोगी निगरानी समयरेखा में विलीन हो जाती है।",
        insight_center_title: "नैदानिक अंतर्दृष्टि केंद्र",
        insight_center_desc: "रीयल-टाइम में अंतर्दृष्टि देखने के लिए ऊपर दिए गए नोड्स में एक परीक्षण चलाएं।",
        profile_id: "रोगी आईडी",
        profile_status: "स्थिति",
        status_active: "● सक्रिय",
        profile_checkup: "अगली जांच",
        checkup_date: "15 मार्च, 2026"
    }
};

function setLanguage(lang) {
    localStorage.setItem('empathy_lang', lang);

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll(`#lang-${lang}`).forEach(btn => btn.classList.add('active'));

    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('empathy_lang') || 'en';
    setLanguage(savedLang);
});

/* ─────────────────────────────────────────────
   fetchWithRetry: auto-retries on 429 quota errors
   up to maxRetries times with exponential back-off.
───────────────────────────────────────────── */
async function fetchWithRetry(url, options, maxRetries = 3) {
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        const response = await fetch(url, options);
        let data;
        try { data = await response.json(); } catch (e) { data = {}; }

        if (response.status === 429) {
            const msg = data?.error?.message || "";
            const match = msg.match(/retry in ([\d.]+)s/i);
            const waitMs = match ? Math.ceil(parseFloat(match[1]) * 1000) + 200
                : Math.pow(2, attempt) * 2000;

            if (attempt < maxRetries) {
                console.warn(`[EmpathyFirst] Rate limited. Retrying in ${waitMs}ms...`);
                await new Promise(r => setTimeout(r, waitMs));
                continue;
            }
            throw new Error(`Quota exceeded. Try again in a few minutes.`);
        }

        if (!response.ok) {
            throw new Error(data?.error?.message || `HTTP ${response.status}`);
        }

        return data;
    }
    throw lastError;
}

/* ─────────────────────────────────────────────
   Helper: Push a result into the Clinical Insight
   Center sidebar on the dashboard page.
───────────────────────────────────────────── */
function updateDashboard(type, content) {
    const dashboard = document.getElementById("dashboard");
    if (!dashboard) return;

    const icons = { nlp: "🧠", face: "📷", voice: "🎤" };
    const labels = { nlp: "AI Reasoning NLP", face: "Visual Health Scan", voice: "Voice Stress Analysis" };

    const old = dashboard.querySelector(`[data-insight="${type}"]`);
    if (old) old.remove();

    const entry = document.createElement("div");
    entry.setAttribute("data-insight", type);
    entry.style.cssText = "margin-top:16px; padding:14px; background:rgba(56,189,248,0.05); border:1px solid rgba(56,189,248,0.15); border-radius:12px;";
    entry.innerHTML = `
        <div style="font-weight:700; color:var(--primary); margin-bottom:8px; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">
            ${icons[type]} ${labels[type]}
        </div>
        <div style="color:var(--text-muted); font-size:0.88rem; white-space:pre-wrap; line-height:1.6;">${content}</div>`;
    dashboard.appendChild(entry);

    const placeholder = dashboard.querySelector("p");
    if (placeholder && dashboard.querySelectorAll("[data-insight]").length > 0) {
        placeholder.style.display = "none";
    }
}

/* ─────────────────────────────────────────────
   1. AI REASONING NLP — Backend API chatbot
───────────────────────────────────────────── */
async function analyzeText() {
    const textarea = document.getElementById("symptoms");
    const symptoms = textarea.value.trim();
    if (!symptoms) return;

    const nlpChat = document.getElementById("nlpChat");

    // Append User Message
    const userDiv = document.createElement("div");
    userDiv.style = "padding:10px; background:rgba(56,189,248,0.2); border-radius:12px; font-size:0.9rem; align-self:flex-end; max-width:90%; color:#fff; margin-bottom:8px;";
    userDiv.innerText = symptoms;
    nlpChat.appendChild(userDiv);

    textarea.value = "";
    nlpChat.scrollTop = nlpChat.scrollHeight;

    // Typing indicator
    const typingDiv = document.createElement("div");
    typingDiv.style = "padding:10px; background:rgba(255,255,255,0.05); border-radius:12px; font-size:0.9rem; align-self:flex-start; max-width:90%; color:var(--text-muted); margin-bottom:8px;";
    typingDiv.innerHTML = "<i>Analyzing clinical data...</i>";
    nlpChat.appendChild(typingDiv);
    nlpChat.scrollTop = nlpChat.scrollHeight;

    nlpHistory.push({ role: "user", parts: [{ text: symptoms }] });

    try {
        const response = await fetch('/api/nlp/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: nlpHistory })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message || data.error);

        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!reply) throw new Error("Could not parse clinical reasoning.");

        nlpHistory.push({ role: "model", parts: [{ text: reply }] });
        typingDiv.innerHTML = "";

        let i = 0;
        const interval = setInterval(() => {
            typingDiv.innerText += reply[i];
            i++;
            nlpChat.scrollTop = nlpChat.scrollHeight;
            if (i >= reply.length) {
                clearInterval(interval);
                updateDashboard("nlp", reply);
            }
        }, 10);

    } catch (err) {
        typingDiv.innerHTML = "";
        typingDiv.style.color = "#f87171";
        typingDiv.innerText = "❌ Error: " + err.message;
    }
}

/* ─────────────────────────────────────────────
   2. AI VISUAL HEALTH SCAN — Requires API Config
───────────────────────────────────────────── */

let videoStream = null;

async function startCamera() {
    const video = document.getElementById("video");
    const faceResult = document.getElementById("faceResult");
    const btn = document.querySelector('button[onclick="startCamera()"]');

    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
        video.style.display = "none";
        faceResult.innerText = "";
        btn.innerText = "Start Visual Scan";
        return;
    }

    try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = videoStream;
        video.style.display = "block";
        btn.innerText = "Stop Scanning";
        faceResult.style.color = "#94a3b8";
        faceResult.innerText = "📷 Scanning face for emotional indicators...";
        setTimeout(captureAndAnalyzeFace, 3000);
    } catch (e) {
        faceResult.style.color = "#f87171";
        faceResult.innerText = "❌ Camera access denied: " + e.message;
    }
}

async function captureAndAnalyzeFace() {
    const video = document.getElementById("video");
    const faceResult = document.getElementById("faceResult");
    if (!videoStream) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const base64Image = canvas.toDataURL("image/jpeg").split(',')[1];

    faceResult.style.color = "#94a3b8";
    faceResult.innerText = "🔬 Analyzing facial expression...";

    try {
        const data = await fetch('/api/vision/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: "Analyze the face in this image for mental health indicators (emotions, stress, fatigue). Be concise." },
                        { inlineData: { mimeType: "image/jpeg", data: base64Image } }
                    ]
                }]
            })
        }).then(res => res.json());

        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!reply) throw new Error("Empty response.");
        faceResult.style.color = "#38bdf8";
        faceResult.innerText = reply;
        updateDashboard("face", reply);
    } catch (e) {
        faceResult.style.color = "#f87171";
        faceResult.innerText = "⚠️ Visual Analysis Error: " + e.message;
    }
}

/* ─────────────────────────────────────────────
   3. VOICE STRESS ANALYSIS
───────────────────────────────────────────── */
let recognition = null;
let isRecording = false;
let fullTranscript = "";

function startVoice() {
    const voiceResult = document.getElementById("voiceResult");
    const btn = document.querySelector('button[onclick="startVoice()"]');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        voiceResult.innerText = "❌ Speech recognition not supported.";
        return;
    }

    if (isRecording) {
        if (recognition) recognition.stop();
        return;
    }

    isRecording = true;
    fullTranscript = "";
    btn.innerText = "⏹ Stop Recording";
    voiceResult.innerText = "🎤 Listening...";

    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
        let interim = "";
        let final = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) final += event.results[i][0].transcript + " ";
            else interim += event.results[i][0].transcript;
        }
        fullTranscript += final;
        voiceResult.innerText = `🎤 Recording...\n"${fullTranscript}${interim}"`;
    };

    recognition.onend = () => {
        isRecording = false;
        btn.innerText = "Record Sample";
        if (fullTranscript.trim()) analyzeVoiceTranscript(fullTranscript.trim(), voiceResult);
    };

    recognition.start();
}

async function analyzeVoiceTranscript(transcript, voiceResult) {
    voiceResult.innerText = "🔬 Analyzing speech patterns...";
    try {
        const data = await fetch('/api/nlp/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Analyze patient speech for stress and mental health markers: "${transcript}"` }] }]
            }),
        }).then(res => res.json());
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        voiceResult.style.color = "#38bdf8";
        voiceResult.innerText = reply || "No results.";
        if (reply) updateDashboard("voice", reply);
    } catch (err) {
        voiceResult.innerText = "❌ Error: " + err.message;
    }
}
