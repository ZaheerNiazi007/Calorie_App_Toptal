from rest_framework import serializers
from .models import food_item

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = food_item
        fields = '__all__'
        # fields = ['name', 'calories', 'user']

class UserCaloriesSerializer(serializers.ModelSerializer):
    
    avg_score = serializers.FloatField()
    class Meta:
        model = food_item
        fields = ('user_id', 'avg_score')


class UserCalorieRecordSerializer(serializers.ModelSerializer):
    calorie = serializers.FloatField()
    class Meta:
        model = food_item
        fields = ['date_taken_on','calorie']
