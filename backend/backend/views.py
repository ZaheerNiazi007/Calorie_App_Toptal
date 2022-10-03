from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def getRoutes(request):
    routes = [{
        'user/<int:pk>': "Returns user details",
        'user/all_users': "Returns details of all the users",
        'api/food_items_by_user/<int:id>': "Returns the list of all the items added by user",
        'api/add_food_items_by_user/': "Add new food item by user",
        'api/food_calories_by_user/<int:id>': "Returns a message for how much calories user has taken today",
        'api/food_calories_user_details/<int:id>': "Returns a list of record of calories taken each day by the user",
        'api/food_items/': "Returns all the food enteries by all users (Admin view)",
        'api/delete_food_items/<int:pk>/': "Allows user to delete food entereies",
        'api/update_food_items/<int:pk>/': "Allows user to update food enteries",
        'api/average_calories/': "Returns the list of average calories taken by each user in last 7 days",
        'api/enteries_sum/': "Returns the sum of total enteries in last 7 days and 7 days before that",
        'api/token/': "Generates a token for user",
        'api/token/refresh/': "get new token by sending the refresh token",
    }]
    return Response(routes)