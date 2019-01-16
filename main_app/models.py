from django.db import models

# Create your models here.
class Dictionary_Data(models.Model):
	word = models.TextField(blank = True, null = True)
	meaning = models.TextField(blank = True, null = True)
	def __str__(self):
		return "Meaning for " +self.word  