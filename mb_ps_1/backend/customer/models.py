from django.db import models
from django.conf import settings

class CustomerModel(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    address = models.TextField()
    phone = models.CharField(max_length=12)

    def __str__(self):
        return f"{self.user.name} ({self.user.email})"