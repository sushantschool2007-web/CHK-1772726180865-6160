
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import json
import urllib.request
import urllib.error
import datetime

# MongoDB connection
try:
    from EMPTHYFIRST.mongo import db as mongo_db
    MONGO_AVAILABLE = True
except Exception:
    mongo_db = None
    MONGO_AVAILABLE = False

def index(request):
    return render(request, 'index.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def chatbot(request):
    return render(request, 'chatbot.html')

def auth(request):
    return render(request, 'auth.html')

def about(request):
    return render(request, 'about.html')

@csrf_exempt
def nlp_api(request):
    if request.method != "POST":
        return JsonResponse({"error": "Only POST allowed"}, status=405)
    
    try:
        data = json.loads(request.body)
        contents = data.get("contents", [])
        
        # System Instruction
        system_instruction_text = data.get("system_instruction", "You are EmpathyFirst's Clinical AI specializing in mental health triage. Analyze patient narratives for emotional state, risk indicators, urgency, and recommended actions.")

        api_url = f"https://generativelanguage.googleapis.com/v1beta/models/{settings.GEMINI_MODEL}:generateContent?key={settings.GEMINI_API_KEY}"
        
        payload = {
            "system_instruction": {
                "parts": [{"text": system_instruction_text}]
            },
            "contents": contents,
            "generationConfig": {
                "temperature": 0.4,
                "maxOutputTokens": 800
            }
        }
        
        req = urllib.request.Request(
            api_url, 
            data=json.dumps(payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'},
            method="POST"
        )
        
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            return JsonResponse(res_data)
            
    except urllib.error.HTTPError as e:
        try:
            err_body = json.loads(e.read().decode('utf-8'))
            return JsonResponse(err_body, status=e.code)
        except:
            return JsonResponse({"error": str(e)}, status=e.code)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@csrf_exempt
def vision_api(request):
    if request.method != "POST":
        return JsonResponse({"error": "Only POST allowed"}, status=405)
    
    try:
        data = json.loads(request.body)
        contents = data.get("contents", [])

        api_url = f"https://generativelanguage.googleapis.com/v1beta/models/{settings.GEMINI_MODEL}:generateContent?key={settings.GEMINI_API_KEY}"
        
        payload = {
            "contents": contents,
            "generationConfig": {
                "temperature": 0.4,
                "maxOutputTokens": 800
            }
        }
        
        req = urllib.request.Request(
            api_url, 
            data=json.dumps(payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'},
            method="POST"
        )
        
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            return JsonResponse(res_data)
            
    except urllib.error.HTTPError as e:
        try:
            err_body = json.loads(e.read().decode('utf-8'))
            return JsonResponse(err_body, status=e.code)
        except:
            return JsonResponse({"error": str(e)}, status=e.code)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


# ──────────────────────────────────────────────────────────────
# MongoDB-backed views
# ──────────────────────────────────────────────────────────────

@csrf_exempt
def save_analysis_log(request):
    """
    POST /api/save-log/
    Saves an NLP / emotion analysis result to MongoDB.
    Expected JSON body:
        {
            "session_id": "abc123",
            "analysis_type": "nlp" | "vision",
            "input_text": "...",
            "result": { ... }
        }
    """
    if request.method != "POST":
        return JsonResponse({"error": "Only POST allowed"}, status=405)

    if not MONGO_AVAILABLE:
        return JsonResponse({"error": "MongoDB is not available"}, status=503)

    try:
        data = json.loads(request.body)
        log_entry = {
            "session_id":    data.get("session_id", "anonymous"),
            "analysis_type": data.get("analysis_type", "unknown"),
            "input_text":    data.get("input_text", ""),
            "result":        data.get("result", {}),
            "timestamp":     datetime.datetime.utcnow(),
        }
        inserted = mongo_db.analysis_logs.insert_one(log_entry)
        return JsonResponse({"status": "saved", "id": str(inserted.inserted_id)})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
def get_analysis_logs(request):
    """
    GET /api/get-logs/?session_id=abc123&limit=20
    Retrieves analysis logs from MongoDB for a given session.
    """
    if request.method != "GET":
        return JsonResponse({"error": "Only GET allowed"}, status=405)

    if not MONGO_AVAILABLE:
        return JsonResponse({"error": "MongoDB is not available"}, status=503)

    try:
        session_id = request.GET.get("session_id", None)
        limit      = int(request.GET.get("limit", 20))

        query = {}
        if session_id:
            query["session_id"] = session_id

        cursor = mongo_db.analysis_logs.find(query).sort("timestamp", -1).limit(limit)
        logs = []
        for doc in cursor:
            doc["_id"] = str(doc["_id"])  # ObjectId → string
            if "timestamp" in doc:
                doc["timestamp"] = doc["timestamp"].isoformat()
            logs.append(doc)

        return JsonResponse({"logs": logs, "count": len(logs)})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def mongo_health(request):
    """
    GET /api/mongo-health/
    Quick connection check — returns MongoDB server info.
    """
    if not MONGO_AVAILABLE:
        return JsonResponse({"status": "unavailable", "error": "pymongo not loaded"}, status=503)

    try:
        from EMPTHYFIRST.mongo import get_mongo_client
        client = get_mongo_client()
        info   = client.server_info()
        return JsonResponse({
            "status":  "connected",
            "version": info.get("version", "unknown"),
            "db":      settings.MONGODB_NAME,
        })
    except Exception as e:
        return JsonResponse({"status": "error", "error": str(e)}, status=500)

from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
def dashboard(request):
    return render(request, 'dashboard.html')
def chatbot(request):
    return render(request, 'chatbot.html')
def auth(request):
    return render(request, 'auth.html')

