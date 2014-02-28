from django.db import models

# Create your models here.

class User(models.Model):
    user_name = models.CharField(max_length=100)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=25)

    def __unicode__(self):
        return self.name