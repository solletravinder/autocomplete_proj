from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
from .models import *
from rest_framework.decorators import api_view

@api_view(['post'])
def search_by_prefix(request):
    """
    parameters:
        - name: word
          description: Transporter access token
          required: true
          type: string
          paramType: form
    """
    word = request.POST.get('word')
    if word:
    	word = word.upper()
    words = Dictionary_Data.objects.filter(word__startswith = word).order_by('word')
    print(words)
    return Response(words.values(), status=status.HTTP_200_OK)
    # print("ffnj")