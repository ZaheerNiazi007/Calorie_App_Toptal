from django.urls import path
from .views import *

urlpatterns = [
    path('food_items_by_user/<int:id>', getItemsByUser.as_view()),
    path('add_food_items_by_user/', addItemsByUser.as_view()),
    path('food_calories_by_user/<int:id>', getUserCalories.as_view()),
    path('food_calories_user_details/<int:id>', getDailyCaloriesForUser.as_view()),
    path('food_items/', getItems.as_view()),
    path('delete_food_items/<int:pk>/', deleteItem.as_view()),
    path('update_food_items/<int:pk>/', updateItem.as_view()),
    path('average_calories/', getAverageCalories.as_view()),
    path('enteries_sum/', getNumOfEnteries.as_view()),
]