from django.db import models
from django.contrib.auth.models import AbstractUser


class Customererer(AbstractUser):
    fio = models.CharField(max_length=50)
    address = models.TextField(blank=True, null=True)
    mobile = models.CharField(max_length=50)
    home = models.CharField(max_length=50)

    """
    def __unicode__(self):
        return self.user
    """


class Lol(models.Model):
    first_name = models.CharField("First name", max_length=255)
    last_name = models.CharField("Last name", max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    def __str__(self):
        return self.first_name


class Application(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    child_fio_de = models.CharField(max_length=100)
    child_fio_ru = models.CharField(max_length=100)
    date_of_birth = models.DateField(auto_now_add=False, auto_now=False)
    parent_fio_de = models.CharField(max_length=100)
    parent_fio_ru = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    handy = models.CharField(max_length=200)
    email = models.EmailField()
    is_relatives = models.BooleanField()
    is_first_year = models.BooleanField()
    is_3 = models.BooleanField()
    # kontoinhaber = models.CharField(max_length=200)
    # bank_name = models.CharField(max_length=200)
    # IBAN = models.CharField(max_length=200)
    # BIC_BLZ = models.CharField(max_length=200)
    # ort = models.DateTimeField(auto_now_add=False, auto_now=False)


class Courses(models.Model):
    course_title = models.CharField(max_length=200)
    course_description = models.CharField(max_length=500)
    course_url = models.CharField(max_length=500)
    price = models.FloatField()
    duration = models.IntegerField()
    age_from = models.IntegerField()
    age_to = models.IntegerField()
