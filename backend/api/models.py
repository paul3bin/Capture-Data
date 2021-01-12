from django.db import models

# Create your models here.

class CaptureData(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.first_name