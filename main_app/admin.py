from django.contrib import admin
from .models import *
# Register your models here.
class Dictionary_DataAdmin(admin.ModelAdmin):
	model = Dictionary_Data
	list_display = ['word', 'meaning']

admin.site.register(Dictionary_Data, Dictionary_DataAdmin)