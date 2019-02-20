from rest_framework import serializers

from .models import Dictionary_Data


class Dictionary_DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dictionary_Data
        fields = ('word', 'meaning')
