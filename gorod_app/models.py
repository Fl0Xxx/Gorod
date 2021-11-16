from django.db import models


class Application(models.Model):
    child_fio_de = models.CharField(max_length=200)
    child_fio_ru = models.CharField(max_length=200)
    date_of_birth = models.DateField(auto_now_add=False, auto_now=False)
    parent_fio_de = models.CharField(max_length=200)
    parent_fio_ru = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    handy = models.CharField(max_length=200)
    email = models.EmailField()
    is_relatives = models.BooleanField()
    is_first_year = models.BooleanField()
    is_3 = models.BooleanField()
    kontoinhaber = models.CharField(max_length=200)
    bank_name = models.CharField(max_length=200)
    IBAN = models.CharField(max_length=200)
    BIC_BLZ = models.CharField(max_length=200)
    ort = models.DateTimeField(auto_now_add=False, auto_now=False)
