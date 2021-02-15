"""api URL Configuration"""
from django.conf.urls import url
from django.urls import path, include
from . import views

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    url(r'hello/', views.hello),
]
