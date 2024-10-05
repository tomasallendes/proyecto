from django.db import models

# Create your models here.
# productos/models.py

from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(default='Sin descripción')
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    imagen = models.ImageField(upload_to='productos_imagenes/', blank=True, null=True)

    def __str__(self):
        return self.nombre