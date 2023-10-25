# Generated by Django 4.2.6 on 2023-10-21 03:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("userAPI", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="userprofile",
            name="date_joined",
        ),
        migrations.AddField(
            model_name="userprofile",
            name="is_active",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="userprofile",
            name="is_staff",
            field=models.BooleanField(default=False),
        ),
    ]