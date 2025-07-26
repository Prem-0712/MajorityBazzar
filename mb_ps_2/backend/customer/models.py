from django.db import models
from django.conf import settings

class CustomerModel(models.Model):

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    name = models.CharField(max_length=255, null=True)
    phone = models.CharField(max_length=12)

    address = models.TextField()
    pincode = models.CharField(max_length=6, null=True)
    city = models.CharField(max_length=20, null=True)
    district = models.CharField(max_length=20, null=True)
    state = models.CharField(max_length=20, null=True)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return f"{self.user.name} ({self.user.email})"