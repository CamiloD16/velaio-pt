from django.db import models

# Create your models here.


class Auditoria(models.Model):
    usuario = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    status = models.CharField(max_length=200)