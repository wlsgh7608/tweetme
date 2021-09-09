from django.db import models
from django.conf import settings
import random
# Create your models here.

User = settings.AUTH_USER_MODEL

class Tweet(models.Model):
    # SQL
    # id = models.AutoField(pk = True)
    # user가 삭제될 때 user가 쓴 tweet 모두 삭제(cascade)
    user = models.ForeignKey(User,  on_delete = models.CASCADE) # many users can many tweets
    content  = models.TextField(blank = True, null = True)
    image = models. FileField(upload_to = 'images/', blank = True , null = True)
    

    # def __str__(self):
    #     return self.content

    class Meta:
        ordering = ['-id'] # latest tweet is up
        
        
    def serialize(self):
        return {
            "id":self.id,
            "content":self.content,
            "Likes": random.randint(0,200)
        }

        # wlsgh, zjvlqls1