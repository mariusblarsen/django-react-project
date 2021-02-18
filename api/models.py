from django.db import models
from django.contrib.auth.models import User

class Ticker(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    symbol = models.CharField(max_length=10)
    name = models.CharField(max_length=50)
    
    class Meta:
        unique_together = ["symbol", ]

    def __str__(self):
        return "{} {}".format(self.symbol, self.name)
    

