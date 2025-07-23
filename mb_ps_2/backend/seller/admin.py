from django.contrib import admin
from .models import SellerModel, SellerCategoryModel


class SellerCategoryInline(admin.TabularInline):
    model = SellerCategoryModel
    extra = 1 


@admin.register(SellerModel)
class SellerAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'store_name', 'gstin_number']
    inlines = [SellerCategoryInline]