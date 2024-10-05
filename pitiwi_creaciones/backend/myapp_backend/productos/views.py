from django.shortcuts import render
from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("Bienvenido a la página principal")

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()  # Consulta inicial de todos los productos
    serializer_class = ProductoSerializer

    # Sobrescribir el método get_queryset para aplicar filtros
    def get_queryset(self):
        queryset = Producto.objects.all()  # Obtener todos los productos
        categoria = self.request.query_params.get('categoria', None)  # Obtener parámetro 'categoria'
        if categoria is not None:
            queryset = queryset.filter(categoria=categoria)  # Filtrar productos por categoría
        return queryset