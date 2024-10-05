from django.shortcuts import render
from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("Bienvenido a la página principal")

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer