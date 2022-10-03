from datetime import datetime, timedelta
from sys import api_version
from urllib import response
from rest_framework.response import Response
from xxlimited import foo
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import *
from .models import food_item
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.db.models import Avg, Sum, Count
from users.models import User

# Create your views here.

class getItems(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = food_item.objects.all()
    serializer_class = FoodSerializer

class deleteItem(generics.DestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = food_item.objects.all()
    serializer_class = FoodSerializer

class updateItem(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAdminUser]
    queryset = food_item.objects.all()
    serializer_class = FoodSerializer

class getItemsByUser(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, id):
        food = food_item.objects.filter(user_id=id)
        serializer = FoodSerializer(food, many=True)
        return Response(serializer.data)

class getUserCalories(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, id):
        food = food_item.objects.filter(user_id=id, date_taken_on=(datetime.now().date())).values('user').annotate(calorie = Sum('calories')).values('calorie')
        user_treshold = User.objects.filter(id=id).values('calories_threshold')
        if food:
            print(food[0]['calorie'])
            print(user_treshold[0]['calories_threshold'])
            if food[0]['calorie'] > user_treshold[0]['calories_threshold']:
                response = {
                    "message": "you have eaten "+str(food[0]['calorie'])+" calories today which is more than the limit"
                }
            else:
                response = {
                    "message": "you have eaten "+str(food[0]['calorie'])+" calories today"
                }
        return Response(response)

class addItemsByUser(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = FoodSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class getAverageCalories(APIView):
    permission_classes = [IsAdminUser]
    def get(self, request):
        food = food_item.objects.filter(date_taken_on__gt=(datetime.now().date()-timedelta(days=7))).values('user').annotate(avg_score = Avg('calories')).values('user_id', 'avg_score')
        serializer = UserCaloriesSerializer(food, many=True)
        return Response(serializer.data)

class getDailyCaloriesForUser(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, id):
        food = food_item.objects.filter(user_id=id).values('date_taken_on').order_by('date_taken_on').annotate(calorie = Sum('calories')).values('date_taken_on','calorie')
        serializer = UserCalorieRecordSerializer(food, many=True)
        return Response(serializer.data)


class getNumOfEnteries(APIView):
    permission_classes = [IsAdminUser]
    def get(self, request):
        last_7 = food_item.objects.filter(date_taken_on__gt=(datetime.now().date()-timedelta(days=7))).count()
        before_7 = food_item.objects.filter(date_taken_on__gt=(datetime.now().date()-timedelta(days=14)), date_taken_on__lte=(datetime.now().date()-timedelta(days=7))).count()
        response = {
            "Number_of_enteries_in_last_7_days": last_7,
            "Number_of_enteries_week_before_last_one": before_7,
        }
        
        return Response(response)