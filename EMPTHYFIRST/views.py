from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
def dashboard(request):
    return render(request, 'dashboard.html')
def chatbot(request):
    return render(request, 'chatbot.html')
def auth(request):
    return render(request, 'auth.html')
