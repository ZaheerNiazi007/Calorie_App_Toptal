from tkinter import CASCADE
from django.db import models
from users.models import User

# Create your models here.

class food_item(models.Model):
    name = models.CharField(max_length=255)
    calories = models.FloatField(max_length=255)
    date_taken_on = models.DateField()
    time_taken_at = models.TimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# class user_food_record(models.Model):
#     time_taken_at = models.DateTimeField()
#     calories = models.FloatField(max_length=255)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     food = models.ForeignKey(food_item, on_delete=models.CASCADE)
