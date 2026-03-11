let nlpHistory = [];

/* ─────────────────────────────────────────────
   TRANSLATIONS — Multi-language support
───────────────────────────────────────────── */
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
        stat_uptime: "Tiempo de actividad",
        stat_models: "Modelos multimodales",
        stat_latency: "Latencia en tiempo real",
        stat_encryption: "Cifrado de bits (HIPAA)",
        cta_title: "¿Listo para mejorar la atención?",
        cta_desc: "Únase a la próxima generación de diagnósticos predictivos.",
        cta_btn: "Iniciar programa de prueba",
        dash_title: "IA de Emoción Multimodal",
        dash_subtitle: "Pruebe las capacidades de nuestros motores de razonamiento. Asegúrese de otorgar los permisos necesarios.",
        tool_nlp_title: "IA de Razonamiento NLP",
        tool_nlp_desc: "Detecte la intención emocional y el riesgo clínico.",
        tool_nlp_placeholder: "Escriba la narrativa del paciente...",
        btn_send: "Enviar",
        tool_vision_title: "Escaneo de Salud Visual por IA",
        tool_vision_desc: "Detección temprana de indicadores de salud via bienestar ocular y cutáneo.",
        btn_start_scan: "Iniciar Escaneo Visual",
        tool_voice_title: "Análisis de Estrés por Voz",
        tool_voice_desc: "Descomposición algorítmica de temblores vocales.",
        btn_record: "Grabar Muestra",
        sync_title: "Sincronización del Panel",
        sync_desc: "Los conocimientos se fusionan en el monitoreo del paciente.",
        insight_center_title: "Centro de Información Clínica",
        insight_center_desc: "Realice una prueba para ver cómo se completan los conocimientos aquí.",
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
        hero_desc: "Notre plateforme d'IA détecte des signaux émotionnels subtils dans la voix, les expressions faciales et les récits textuels.",
        hero_btn_demo: "Essayer la démo",
        hero_btn_chat: "Lancer le Chatbot",
        stat_uptime: "Disponibilité",
        stat_models: "Modèles multi-modaux",
        stat_latency: "Latence en temps réel",
        stat_encryption: "Cryptage (HIPAA)",
        cta_title: "Prêt à améliorer les soins?",
        cta_desc: "Rejoignez la prochaine génération de diagnostics prédictifs.",
        cta_btn: "Démarrer le programme",
        dash_title: "IA d'Émotion Multimodale",
        dash_subtitle: "Testez les capacités de nos moteurs de raisonnement. Assurez-vous que les autorisations sont accordées.",
        tool_nlp_title: "IA de Raisonnement NLP",
        tool_nlp_desc: "Détecter l'intention émotionnelle et le risque clinique.",
        tool_nlp_placeholder: "Saisir le récit du patient...",
        btn_send: "Envoyer",
        tool_vision_title: "Analyse de Santé Visuelle par IA",
        tool_vision_desc: "Détection précoce des indicateurs de santé via le bien-être oculaire.",
        btn_start_scan: "Démarrer l'analyse visuelle",
        tool_voice_title: "Analyse du Stress Vocal",
        tool_voice_desc: "Décomposition algorithmique des tremblements vocaux.",
        btn_record: "Enregistrer un échantillon",
        sync_title: "Synchronisation du tableau de bord",
        sync_desc: "Les informations fusionnent dans la surveillance des patients.",
        insight_center_title: "Centre d'Aperçu Clinique",
        insight_center_desc: "Exécutez un test pour voir les informations s'afficher ici.",
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
        hero_desc: "हमारा एआई प्लेटफॉर्म आवाज, चेहरे के भाव और टेक्स्ट में भावनात्मक संकेतों का पता लगाता है।",
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
        dash_subtitle: "नीचे हमारे तर्क इंजन का परीक्षण करें। सुनिश्चित करें कि अनुमति दी गई है।",
        tool_nlp_title: "एआई रीजनिंग एनएलपी",
        tool_nlp_desc: "रोगी के वर्णन से भावनात्मक इरादे का पता लगाएं।",
        tool_nlp_placeholder: "रोगी का विवरण लिखें...",
        btn_send: "भेजें",
        tool_vision_title: "एआई विजुअल हेल्थ स्कैन",
        tool_vision_desc: "आंखों और त्वचा के संकेतकों के माध्यम से स्वास्थ्य का पता लगाना।",
        btn_start_scan: "विजुअल स्कैन शुरू करें",
        tool_voice_title: "आवाज तनाव विश्लेषण",
        tool_voice_desc: "मुखर झटके और भाषण वेग का एल्गोरिथम अपघटन।",
        btn_record: "सैंपल रिकॉर्ड करें",
        sync_title: "डॉक्टर डैशबोर्ड सिंक",
        sync_desc: "अंतर्दृष्टि सीधे रोगी निगरानी में विलीन होती है।",
        insight_center_title: "नैदानिक अंतर्दृष्टि केंद्र",
        insight_center_desc: "रीयल-टाइम में अंतर्दृष्टि देखने के लिए परीक्षण चलाएं।",
        profile_id: "रोगी आईडी",
        profile_status: "स्थिति",
        status_active: "● सक्रिय",
        profile_checkup: "अगली जांच",
        checkup_date: "15 मार्च, 2026"
    }
};

/* ─────────────────────────────────────────────
   LANGUAGE SWITCHING
───────────────────────────────────────────── */
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

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('empathy_lang') || 'en';
    setLanguage(savedLang);
});

/* ─────────────────────────────────────────────
   Helper: Push a result into the Clinical Insight
   Center sidebar on the dashboard page.
───────────────────────────────────────────── */
function updateDashboard(type, content) {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;

    const icons = { nlp: '🧠', face: '📷', voice: '🎤' };
    const labels = { nlp: 'AI Reasoning NLP', face: 'Visual Health Scan', voice: 'Voice Stress Analysis' };

    // Remove any old entry of the same type
    const old = dashboard.querySelector(`[data-insight="${type}"]`);
    if (old) old.remove();

    const entry = document.createElement('div');
    entry.setAttribute('data-insight', type);
    entry.style.cssText = 'margin-top:16px; padding:14px; background:rgba(56,189,248,0.05); border:1px solid rgba(56,189,248,0.15); border-radius:12px;';
    entry.innerHTML = `
        <div style="font-weight:700; color:var(--primary); margin-bottom:8px; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">
            ${icons[type]} ${labels[type]}
        </div>
        <div style="color:var(--text-muted); font-size:0.88rem; white-space:pre-wrap; line-height:1.6;">${content}</div>`;
    dashboard.appendChild(entry);

    // Hide the placeholder text
    const placeholder = dashboard.querySelector('p');
    if (placeholder && dashboard.querySelectorAll('[data-insight]').length > 0) {
        placeholder.style.display = 'none';
    }
}

/* ─────────────────────────────────────────────
   1. AI REASONING NLP — chatbot-style via backend
───────────────────────────────────────────── */
async function analyzeText() {
    const textarea = document.getElementById('symptoms');
    const symptoms = textarea.value.trim();
    if (!symptoms) return;

    const nlpChat = document.getElementById('nlpChat');

    // Append user message bubble
    const userDiv = document.createElement('div');
    userDiv.style.cssText = 'padding:10px 14px; background:rgba(56,189,248,0.2); border-radius:12px; font-size:0.9rem; align-self:flex-end; max-width:90%; color:#fff; margin-bottom:8px;';
    userDiv.innerText = symptoms;
    nlpChat.appendChild(userDiv);
    textarea.value = '';
    nlpChat.scrollTop = nlpChat.scrollHeight;

    // Typing indicator bubble
    const typingDiv = document.createElement('div');
    typingDiv.style.cssText = 'padding:10px 14px; background:rgba(255,255,255,0.05); border-radius:12px; font-size:0.9rem; align-self:flex-start; max-width:90%; color:var(--text-muted); margin-bottom:8px;';
    typingDiv.innerHTML = '<i>Analyzing clinical data...</i>';
    nlpChat.appendChild(typingDiv);
    nlpChat.scrollTop = nlpChat.scrollHeight;

    nlpHistory.push({ role: 'user', parts: [{ text: symptoms }] });

    try {
        const response = await fetch('/api/nlp/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: nlpHistory })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));

        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!reply) throw new Error('Could not parse clinical reasoning response.');

        nlpHistory.push({ role: 'model', parts: [{ text: reply }] });

        // Typewriter animation
        typingDiv.innerHTML = '';
        let i = 0;
        const interval = setInterval(() => {
            typingDiv.innerText += reply[i];
            i++;
            nlpChat.scrollTop = nlpChat.scrollHeight;
            if (i >= reply.length) {
                clearInterval(interval);
                updateDashboard('nlp', reply);
            }
        }, 10);

    } catch (err) {
        typingDiv.innerHTML = '';
        typingDiv.style.color = '#f87171';
        typingDiv.innerText = '❌ Error: ' + err.message;
    }
}

/* ─────────────────────────────────────────────
   2. AI VISUAL HEALTH SCAN — Camera + Gemini Vision
───────────────────────────────────────────── */
let videoStream = null;

async function startCamera() {
    const video = document.getElementById('video');
    const faceResult = document.getElementById('faceResult');
    const btn = document.querySelector('button[onclick="startCamera()"]');

    // Toggle: stop if already running
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
        video.style.display = 'none';
        faceResult.innerText = '';
        if (btn) btn.innerText = 'Start Visual Scan';
        return;
    }

    try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = videoStream;
        video.style.display = 'block';
        if (btn) btn.innerText = '⏹ Stop Scanning';
        faceResult.style.color = '#94a3b8';
        faceResult.innerText = '📷 Scanning face for emotional indicators...';

        // Capture and analyse after 3 seconds
        setTimeout(captureAndAnalyzeFace, 3000);

    } catch (e) {
        faceResult.style.color = '#f87171';
        faceResult.innerText = '❌ Camera access denied: ' + e.message;
    }
}

async function captureAndAnalyzeFace() {
    const video = document.getElementById('video');
    const faceResult = document.getElementById('faceResult');
    if (!videoStream) return;

    // Capture current frame to canvas
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const base64Image = canvas.toDataURL('image/jpeg').split(',')[1];

    faceResult.style.color = '#94a3b8';
    faceResult.innerText = '🔬 Analyzing facial expression...';

    try {
        const data = await fetch('/api/vision/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: 'Analyze the face in this image for mental health indicators (emotions, stress, fatigue, anxiety signs). Provide a concise, professional clinical assessment in 3-4 bullet points.' },
                        { inlineData: { mimeType: 'image/jpeg', data: base64Image } }
                    ]
                }]
            })
        }).then(res => res.json());

        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!reply) throw new Error('Empty response from vision API.');
        faceResult.style.color = '#38bdf8';
        faceResult.innerText = reply;
        updateDashboard('face', reply);

    } catch (e) {
        faceResult.style.color = '#f87171';
        faceResult.innerText = '⚠️ Visual Analysis Error: ' + e.message;
    }
}

/* ─────────────────────────────────────────────
   3. VOICE STRESS ANALYSIS — Web Speech API + backend
───────────────────────────────────────────── */
let recognition = null;
let isRecording = false;
let fullTranscript = '';

function startVoice() {
    const voiceResult = document.getElementById('voiceResult');
    const btn = document.querySelector('button[onclick="startVoice()"]');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        voiceResult.style.color = '#f87171';
        voiceResult.innerText = '❌ Speech recognition is not supported in this browser. Try Chrome or Edge.';
        return;
    }

    // Toggle: stop if already recording
    if (isRecording) {
        if (recognition) recognition.stop();
        return;
    }

    isRecording = true;
    fullTranscript = '';
    if (btn) btn.innerText = '⏹ Stop Recording';
    voiceResult.style.color = '#94a3b8';
    voiceResult.innerText = '🎤 Listening... Speak now.';

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
        let interim = '';
        let final = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) final += event.results[i][0].transcript + ' ';
            else interim += event.results[i][0].transcript;
        }
        fullTranscript += final;
        voiceResult.innerText = `🎤 Recording...\n"${fullTranscript}${interim}"`;
    };

    recognition.onerror = (event) => {
        isRecording = false;
        if (btn) btn.innerText = 'Record Sample';
        voiceResult.style.color = '#f87171';
        voiceResult.innerText = '❌ Microphone error: ' + event.error;
    };

    recognition.onend = () => {
        isRecording = false;
        if (btn) btn.innerText = 'Record Sample';
        if (fullTranscript.trim()) {
            analyzeVoiceTranscript(fullTranscript.trim(), voiceResult);
        } else {
            voiceResult.style.color = '#f87171';
            voiceResult.innerText = '⚠️ No speech detected. Please try again.';
        }
    };

    recognition.start();
}

async function analyzeVoiceTranscript(transcript, voiceResult) {
    voiceResult.style.color = '#94a3b8';
    voiceResult.innerText = '🔬 Analyzing speech patterns for stress markers...';

    try {
        const response = await fetch('/api/nlp/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    role: 'user',
                    parts: [{ text: `Analyze this patient speech for vocal stress indicators, anxiety, emotional state, and mental health risk. Transcription: "${transcript}"` }]
                }]
            })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));

        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!reply) throw new Error('No analysis returned.');

        voiceResult.style.color = '#38bdf8';
        voiceResult.innerText = reply;
        updateDashboard('voice', reply);

    } catch (err) {
        voiceResult.style.color = '#f87171';
        voiceResult.innerText = '❌ Error: ' + err.message;
    }
}

/* ─────────────────────────────────────────────
   4. FACIAL LANDMARK DETECTOR (face-api.js)
───────────────────────────────────────────── */
let landmarkStream = null;
let landmarkDetectionInterval = null;
let modelsLoaded = false;

const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/';

async function loadLandmarkModels() {
    if (modelsLoaded) return true;
    const statusText = document.getElementById('landmarkStatusText');
    const dot = document.getElementById('landmarkDot');

    statusText.innerText = '⏳ Loading AI models (TinyFace + Landmarks)...';
    dot.className = 'loading';

    try {
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
        ]);
        modelsLoaded = true;
        statusText.innerText = '✅ Models loaded. Starting camera...';
        return true;
    } catch (err) {
        statusText.innerText = '❌ Model Load Error: ' + err.message;
        dot.className = '';
        return false;
    }
}

async function toggleLandmarks() {
    const video = document.getElementById('landmarkVideo');
    const container = document.getElementById('landmarkContainer');
    const stats = document.getElementById('landmarkStats');
    const startBtn = document.getElementById('landmarkStartBtn');
    const snapBtn = document.getElementById('landmarkSnapBtn');
    const dot = document.getElementById('landmarkDot');
    const statusText = document.getElementById('landmarkStatusText');

    if (landmarkStream) {
        // Stop
        clearInterval(landmarkDetectionInterval);
        landmarkStream.getTracks().forEach(t => t.stop());
        landmarkStream = null;
        container.style.display = 'none';
        stats.style.display = 'none';
        startBtn.innerText = '🧬 Start Detector';
        snapBtn.style.display = 'none';
        dot.className = '';
        statusText.innerText = '⏹ Detector stopped.';
        return;
    }

    const loaded = await loadLandmarkModels();
    if (!loaded) return;

    try {
        landmarkStream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
        video.srcObject = landmarkStream;
        container.style.display = 'block';
        stats.style.display = 'flex';
        startBtn.innerText = '⏹ Stop Detector';
        snapBtn.style.display = 'block';
        dot.className = 'active';
        statusText.innerText = '🟢 Detector Active: 68-point landmarks tracking.';

        video.onloadedmetadata = () => {
            const canvas = document.getElementById('landmarkCanvas');
            const displaySize = { width: video.videoWidth, height: video.videoHeight };
            faceapi.matchDimensions(canvas, displaySize);

            let lastTime = Date.now();
            landmarkDetectionInterval = setInterval(async () => {
                const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                    .withFaceLandmarks()
                    .withFaceExpressions();

                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

                // Reset symptom checks each frame
                document.querySelectorAll('.chk-dot').forEach(d => d.parentElement.classList.remove('chk-active'));

                // Draw custom landmarks
                if (resizedDetections.length > 0) {
                    const detection = resizedDetections[0];
                    const landmarks = detection.landmarks;
                    const ctx = canvas.getContext('2d');
                    const video = document.getElementById('landmarkVideo');

                    // Show Results Panel
                    document.getElementById('landmarkResultsPanel').style.display = 'block';

                    // Draw regions (Keep existing point drawing)
                    const regions = [
                        { start: 0, end: 16, color: '#38bdf8' }, // Jaw
                        { start: 17, end: 21, color: '#818cf8' }, // L Eyebrow
                        { start: 22, end: 26, color: '#818cf8' }, // R Eyebrow
                        { start: 27, end: 35, color: '#f472b6' }, // Nose
                        { start: 36, end: 41, color: '#4ade80' }, // L Eye
                        { start: 42, end: 47, color: '#4ade80' }, // R Eye
                        { start: 48, end: 67, color: '#fb923c' }  // Mouth
                    ];

                    regions.forEach(r => {
                        ctx.fillStyle = r.color;
                        for (let i = r.start; i <= r.end; i++) {
                            const pt = landmarks.positions[i];
                            ctx.beginPath();
                            ctx.arc(pt.x, pt.y, 2.5, 0, 2 * Math.PI);
                            ctx.fill();
                        }
                    });

                    // Update stats
                    const now = Date.now();
                    const fps = Math.round(1000 / (now - lastTime));
                    lastTime = now;
                    document.getElementById('statFPS').innerText = fps + ' FPS';
                    document.getElementById('statScore').innerText = 'Score: ' + Math.round(detection.detection.score * 100) + '%';

                    // Clinical Logic Helper: Get region stats
                    const analyzeRegion = (indices) => {
                        let sumX = 0, sumY = 0;
                        indices.forEach(i => { sumX += landmarks.positions[i].x; sumY += landmarks.positions[i].y; });
                        return { x: sumX / indices.length, y: sumY / indices.length };
                    };

                    // 1. Mouth Movement (MAR)
                    const upperLip = landmarks.positions[51], lowerLip = landmarks.positions[57];
                    const mar = Math.abs(lowerLip.y - upperLip.y);
                    const mouthEl = document.getElementById('sympMouthMove');
                    if (mar > 20) {
                        mouthEl.innerText = 'Mouth: Speaking/Active';
                        mouthEl.style.color = 'var(--primary)';
                        document.getElementById('chkFatigue').classList.add('chk-active');
                    } else {
                        mouthEl.innerText = 'Mouth: Static';
                        mouthEl.style.color = '#fff';
                    }

                    // 2. Eye Analysis (EAR for blink/fatigue)
                    const lEyeTop = landmarks.positions[37], lEyeBot = landmarks.positions[41];
                    const ear = Math.abs(lEyeBot.y - lEyeTop.y);
                    const eyeEl = document.getElementById('sympTiredEyes');
                    if (ear < 4) {
                        eyeEl.innerText = 'Tired Eyes: Detected';
                        document.getElementById('chkBlink').classList.add('chk-active');
                    } else {
                        eyeEl.innerText = 'Tired Eyes: Normal';
                    }

                    // 3. Expressions / Emotion
                    const expressions = detection.expressions;
                    const topExpr = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
                    const exprEl = document.getElementById('sympExpression');
                    exprEl.innerText = 'Expression: ' + topExpr.charAt(0).toUpperCase() + topExpr.slice(1);
                    document.getElementById('chkEmotion').classList.add('chk-active');
                    if (expressions.sad > 0.3 || expressions.angry > 0.3) {
                        document.getElementById('chkStress').classList.add('chk-active');
                    }

                    // 4. Color Analysis (Eye Redness & Forehead 'Thermal')
                    // This is an advanced pixel analysis of eye & forehead regions
                    const tempCanvas = document.createElement('canvas');
                    tempCanvas.width = video.videoWidth; tempCanvas.height = video.videoHeight;
                    const tCtx = tempCanvas.getContext('2d');
                    tCtx.drawImage(video, 0, 0);

                    try {
                        // Eye region (Index 36-39)
                        const eyeRect = {
                            x: landmarks.positions[36].x, y: landmarks.positions[37].y - 5,
                            w: landmarks.positions[39].x - landmarks.positions[36].x, h: 10
                        };
                        const eyeData = tCtx.getImageData(eyeRect.x, eyeRect.y, eyeRect.w, eyeRect.h).data;
                        let redCount = 0;
                        for (let j = 0; j < eyeData.length; j += 4) {
                            if (eyeData[j] > 180 && eyeData[j + 1] < 150) redCount++;
                        }
                        const redRatio = (redCount / (eyeData.length / 4)) * 100;
                        document.getElementById('sympEyeRedness').innerText = 'Eye Redness: ' + Math.round(redRatio) + '%';
                        if (redRatio > 5) document.getElementById('sympEyeRedness').style.color = '#f87171';

                        // Forehead 'Thermal' (Above eyebrows)
                        const foreheadRect = {
                            x: landmarks.positions[19].x, y: landmarks.positions[19].y - 30,
                            w: landmarks.positions[24].x - landmarks.positions[19].x, h: 20
                        };
                        const headData = tCtx.getImageData(foreheadRect.x, foreheadRect.y, foreheadRect.w, foreheadRect.h).data;
                        let intensity = 0;
                        for (let j = 0; j < headData.length; j += 4) intensity += headData[j]; // Red channel avg
                        const avgIntensity = intensity / (headData.length / 4);
                        if (avgIntensity > 200) {
                            document.getElementById('chkFever').classList.add('chk-active');
                            document.getElementById('chkFever').style.color = '#f87171';
                        }
                    } catch (e) { }

                    // Mask detection (Simplified heuristic)
                    if (detection.detection.score > 0.8 && mar < 1) {
                        document.getElementById('chkMask').classList.add('chk-active');
                    }

                    // Head orientation (existing)
                    const nose = landmarks.positions[30];
                    const span = landmarks.positions[16].x - landmarks.positions[0].x;
                    const mid = landmarks.positions[0].x + span / 2;
                    const offset = (nose.x - mid) / span;
                    let head = 'Center';
                    if (offset > 0.1) head = 'Right';
                    if (offset < -0.1) head = 'Left';
                    document.getElementById('statHead').innerText = 'Head: ' + head;
                }
            }, 50);
        };
    } catch (err) {
        statusText.innerText = '❌ Camera Error: ' + err.message;
        dot.className = '';
    }
}

async function snapAndAnalyze() {
    const video = document.getElementById('landmarkVideo');
    const analysisBox = document.getElementById('landmarkAnalysis');

    analysisBox.style.display = 'block';
    analysisBox.style.color = 'var(--text-muted)';
    analysisBox.innerText = '🧪 Triggering Gemini 2.5 Flash Vision Analysis...';

    // Capture current frame
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const b64 = canvas.toDataURL('image/jpeg').split(',')[1];

    try {
        const res = await fetch('/api/vision/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: 'Perform a detailed clinical assessment of this patient facial expression. Focus on: 1) Micro-expressions related to anxiety/depression, 2) Signs of sleep deprivation or fatigue, 3) Muscle tension in forehead/jaw, 4) Overall emotional affect. Be precise and medical in your tone.' },
                        { inlineData: { mimeType: 'image/jpeg', data: b64 } }
                    ]
                }]
            })
        });

        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) throw new Error('Gemini failed to generate analysis.');

        analysisBox.style.color = 'var(--primary)';
        analysisBox.innerText = text;
        updateDashboard('face', text);

    } catch (err) {
        analysisBox.style.color = '#f87171';
        analysisBox.innerText = '❌ Gemini Error: ' + err.message;
    }
}

async function gemini25Analyze() {
    const prompt = document.getElementById('gemini25Prompt').value;
    const output = document.getElementById('gemini25Output');
    const btn = document.getElementById('gemini25Btn');

    if (!prompt) return;

    output.style.display = 'block';
    output.innerText = '🧠 Gemini 2.5 is thinking deep...';
    btn.disabled = true;

    try {
        const res = await fetch('/api/gemini-2-5/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt })
        });
        const data = await res.json();

        // Extract from candidates for Gemini format
        let text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text && data.error) text = "Error: " + data.error;

        output.innerText = text || "No response generated.";
    } catch (err) {
        output.innerText = "Connection Error: " + err.message;
    } finally {
        btn.disabled = false;
    }
}
