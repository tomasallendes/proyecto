from django.db import models

class Producto(models.Model):
    OPCIONES_CATEGORIA = [
        ('Mueble', 'Mueble'),
        ('Decoración', 'Decoración'),
        ('Colgante', 'Colgante'),
        ('Temporada', 'Temporada'),
        ('Más', 'Más'),
    ]

    TIPO_MADERA = [
        ('Roble', 'Roble'),
        ('Pino', 'Pino'),
        ('Cedro', 'Cedro'),
        ('Nogal', 'Nogal'),
        ('Bambú', 'Bambú'),
        ('Otro', 'Otro'),
    ]

    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(default='Sin descripción')
    categoria = models.CharField(max_length=20, choices=OPCIONES_CATEGORIA, default='Más')
    tipo_madera = models.CharField(max_length=20, choices=TIPO_MADERA, default='Otro')
    dimensiones = models.CharField(max_length=100, default='Sin especificar')  # Ejemplo: "120x60x80 cm"
    peso = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)  # Peso en kg
    precio = models.DecimalField(max_digits=10, decimal_places=0, help_text="Precio en pesos chilenos (CLP)")  # Precio en pesos chilenos
    stock = models.IntegerField()
    color = models.CharField(max_length=30, default='Natural')  # Color del producto
    acabado = models.CharField(max_length=50, default='Sin acabado')  # Ej: Barniz, Mate, Brillante
    imagen_portada = models.ImageField(upload_to='productos_imagenes/portada/', blank=True, null=True)
    imagen1 = models.ImageField(upload_to='productos_imagenes/imagenes/', blank=True, null=True)
    imagen2 = models.ImageField(upload_to='productos_imagenes/imagenes/', blank=True, null=True)

    def __str__(self):
        return self.nombre
