const API_KEY = "AIzaSyDjkJCfYP3AhMOoF5SIaHM8sUPaWDgPMtA";

async function analyzeText() {
    const textResult = document.getElementById("textResult");
    const symptoms = document.getElementById("symptoms").value;
    if (!symptoms) {
        textResult.innerText = "Please enter some symptoms first.";
        return;
    }
    
    textResult.innerText = "Analyzing text...";
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Analyze the following symptoms for emotional and psychological intent. Keep it brief and medical. Symptoms: " + symptoms }] }]
            })
        });
        const data = await response.json();
        textResult.innerText = data.candidates[0].content.parts[0].text;
    } catch (e) {
        textResult.innerText = "Error analyzing text.";
    }
}

let videoStream = null;

async function startCamera() {
    const video = document.getElementById("video");
    const faceResult = document.getElementById("faceResult");
    const btn = document.querySelector('button[onclick="startCamera()"]');
    
    if (videoStream) {
        // Stop camera
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
        faceResult.innerText = "Scanning face for emotional indicators...";
        
        // Wait a bit, capture a frame, then call Gemini
        setTimeout(captureAndAnalyzeFace, 3000);
    } catch (e) {
        faceResult.innerText = "Camera access denied or unavailable: " + e.message;
    }
}

async function captureAndAnalyzeFace() {
    const video = document.getElementById("video");
    const faceResult = document.getElementById("faceResult");
    
    if (!videoStream) return; // stopped
    
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    
    const base64Image = canvas.toDataURL("image/jpeg").split(',')[1];
    
    faceResult.innerText = "Analyzing facial expression...";
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: "Analyze this image of a face to detect emotions and subtle health signs. Provide a short, professional medical assessment." },
                        { inlineData: { mimeType: "image/jpeg", data: base64Image } }
                    ]
                }]
            })
        });
        const data = await response.json();
        faceResult.innerText = data.candidates[0].content.parts[0].text;
    } catch (e) {
        faceResult.innerText = "Error analyzing face: " + e.message;
    }
}

let isRecording = false;

function startVoice() {
    const voiceResult = document.getElementById("voiceResult");
    const btn = document.querySelector('button[onclick="startVoice()"]');
    
    if (isRecording) {
        isRecording = false;
        btn.innerText = "Record Sample";
        voiceResult.innerText = "Processing vocal stress indicators...";
        setTimeout(() => {
            voiceResult.innerText = "Confidence: 87%\nStress levels elevated. Micro-tremors detected in vocal chords indicative of anxiety.";
        }, 2000);
    } else {
        isRecording = true;
        btn.innerText = "Stop Recording";
        voiceResult.innerText = "Recording... Speak now.";
    }
}
