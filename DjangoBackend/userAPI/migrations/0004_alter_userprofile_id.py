# Generated by Django 4.2.6 on 2023-10-22 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("userAPI", "0003_userprofile_date_joined"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userprofile",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
    ]