from django.db import models
from django.conf import settings
import random
# Create your models here.

User = settings.AUTH_USER_MODEL

class TweetLike(models.Model):
    user = models.ForeignKey(User,  on_delete = models.CASCADE) # many users can many tweets
    tweet = models.ForeignKey("Tweet",  on_delete = models.CASCADE) # many users can many tweets
    timestamp = models.DateTimeField(auto_now_add = True)
 
class Tweet(models.Model):
    # SQL
    # id = models.AutoField(pk = True)
    # user가 삭제될 때 user가 쓴 tweet 모두 삭제(cascade)
    parent = models.ForeignKey("self", null = True, on_delete = models.SET_NULL)
    user = models.ForeignKey(User,  on_delete = models.CASCADE) # many users can many tweets
    likes = models.ManyToManyField(User,related_name='tweet_user',blank = True ,through = TweetLike)
    content  = models.TextField(blank = True, null = True)
    image = models. FileField(upload_to = 'images/', blank = True , null = True)
    timestamp = models.DateTimeField(auto_now_add = True)
 

    # def __str__(self):
    #     return self.content

    class Meta:
        ordering = ['-id'] # latest tweet is up
        
    @property
    def is_retweet(self):
        return self.parent!=None
        
    def serialize(self):
        """
        Feel free to delete
        """
        return {
            "id":self.id,
            "content":self.content,
            "Likes": random.randint(0,200)
        }

        # wlsgh, zjvlqls1