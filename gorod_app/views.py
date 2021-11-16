from django.shortcuts import render
from .models import Application


def home_view(request):
    apps = Application.objects.all()
    # apps = dict(applications)
    return render(request, 'index.html', {'apps': apps})
