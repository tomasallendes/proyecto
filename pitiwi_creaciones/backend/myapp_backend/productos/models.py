from django.db import models

# Create your models here.
# productos/models.py

from django.db import models

class Producto(models.Model):

    OPCIONES_CATEGORIA = [
        ('Mueble', 'Mueble'),
        ('Decoración', 'Decoración'),
        ('Colgante', 'Colgante'),
        ('Temporada', 'Temporada'),
        ('Más', 'Más'),
    ]
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(default='Sin descripción')
    categoria = models.CharField(max_length=20, choices=OPCIONES_CATEGORIA, default='Más')
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    imagen = models.ImageField(upload_to='productos_imagenes/', blank=True, null=True)


    def __str__(self):
        return self.nombre