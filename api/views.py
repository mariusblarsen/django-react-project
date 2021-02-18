from django.http import JsonResponse
from rest_framework import generics

from .models import Ticker
from .schemas import TickerSchema

def hello(request):
    return JsonResponse({'message': 'Hello world!'})

class getTickers(generics.ListAPIView):
    queryset = Ticker.objects.all()
    serializer_class = TickerSchema

