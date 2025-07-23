from django.db.models.signals import post_save
from .models import CustomUserModel
from django.dispatch import receiver
from customer.models import CustomerModel
from seller.models import SellerModel

@receiver(post_save, sender = CustomUserModel)
def create_user_profile(sender, instance, created, **kwargs):

    if created:

        if (instance.user_type == 'customer'):
            CustomerModel.objects.create(user = instance)
        
        elif (instance.user_type == 'seller'):
            SellerModel.objects.create(user = instance)