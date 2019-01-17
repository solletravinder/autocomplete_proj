from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
from .models import *
from rest_framework.decorators import api_view
from django.views.generic.base import TemplateView

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
class HomePageView(TemplateView):

  template_name = "home.html"

  def get_context_data(self, **kwargs):
      context = super(HomePageView, self).get_context_data(**kwargs)
      context['title'] = 'Home Page'
      return context

def autocomplete(request):
  if request.method == 'GET':
    words=[]
    if request.is_ajax():
      word = request.GET.get('term', '')
      if word:
        word = word.upper()
      words = Dictionary_Data.objects.filter(word__startswith = word).order_by('word')
      print(words)
    context = {
      'words' : words,
      'title' : 'Autocomplete Example',
    }
      # context = {'title' : 'Autocomplete Example'}
    return render(request, 'main_app/autocomplete.html', context) 
  # if request.method == 'POST':
  #   word = request.POST.get('word')
  #   if word:
  #     word = word.upper()
  #   words = Dictionary_Data.objects.filter(word__startswith = word).order_by('word')
  #   print(words)
  #   context = {
  #     'words' : words,
  #     'title' : 'Autocomplete Example',
  #   }
  #   return render(request, 'main_app/autocomplete.html', context)  