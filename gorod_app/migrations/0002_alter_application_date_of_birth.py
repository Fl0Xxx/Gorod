# Generated by Django 3.2.8 on 2021-10-18 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gorod_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='date_of_birth',
            field=models.DateField(),
        ),
    ]
