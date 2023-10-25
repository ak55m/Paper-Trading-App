from django.contrib.auth.models import AbstractUser

from django.db import models

# create models here
class UserProfile(AbstractUser):
    # id = models.AutoField(primary_key=True, unique=True)
    # username = models.CharField(max_length=255, unique=True, default='default-username', null=False)    
    # password = models.CharField(max_length=128, default='default-password', null=False)
    funds = models.DecimalField(max_digits=10, decimal_places=2, default=100000.0)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    # date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username


