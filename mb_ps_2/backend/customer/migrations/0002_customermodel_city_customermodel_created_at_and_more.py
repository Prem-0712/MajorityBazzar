# Generated by Django 5.2.4 on 2025-07-26 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customermodel',
            name='city',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='customermodel',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='customermodel',
            name='district',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='customermodel',
            name='name',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='customermodel',
            name='pincode',
            field=models.CharField(max_length=6, null=True),
        ),
        migrations.AddField(
            model_name='customermodel',
            name='state',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='customermodel',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
