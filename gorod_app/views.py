from django.shortcuts import render
from .models import Application


def home_view(request):
    apps = Application.objects.all()
    # apps = dict(applications)
    return render(request, 'index.html', {'apps': apps})

def test(request):
    # apps = Application.objects.all() # using DB Application
    #  {'apps': apps} -> mapping in html
    return render(request, 'test.html')
