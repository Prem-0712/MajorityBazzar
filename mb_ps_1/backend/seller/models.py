from django.db import models
from django.conf import settings

class SellerModel(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    store_name = models.CharField(max_length=25)
    gstin_number = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.user.name} ({self.user.email}) ({self.store_name})"
    
class SellerCategoryModel(models.Model):
    seller = models.ForeignKey(SellerModel, on_delete=models.CASCADE, related_name='categories')
    name = models.CharField(max_length=10)
    image = models.ImageField(upload_to='category_images/')

    def __str__(self):
        return f'{self.name} ({self.seller.store_name})'