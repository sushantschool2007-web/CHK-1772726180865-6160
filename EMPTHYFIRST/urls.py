"""
URL configuration for EMPTHYFIRST project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from EMPTHYFIRST.views import (
    index, dashboard, chatbot, auth, nlp_api, vision_api, about,
    save_analysis_log, get_analysis_logs, mongo_health,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('dashboard/', dashboard, name='dashboard'),
    path('chatbot/', chatbot, name='chatbot'),
    path('auth/', auth, name='auth'),
    path('api/nlp/', nlp_api, name='nlp_api'),
    path('api/vision/',        vision_api,        name='vision_api'),
    # MongoDB-backed endpoints
    path('api/save-log/',      save_analysis_log, name='save_analysis_log'),
    path('api/get-logs/',      get_analysis_logs, name='get_analysis_logs'),
    path('api/mongo-health/',  mongo_health,      name='mongo_health'),
]
