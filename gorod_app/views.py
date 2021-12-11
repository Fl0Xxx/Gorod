from django.shortcuts import render, redirect
from .models import Application
from django.contrib.auth.models import Group, User
from .forms import SignUpForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, authenticate, logout


def home_view(request):
    apps = Application.objects.all()
    # apps = dict(applications)
    return render(request, 'index.html', {'apps': apps})


def test(request):
    # apps = Application.objects.all() # using DB Application
    #  {'apps': apps} -> mapping in html
    return render(request, 'test.html')


def sign_up_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            signup_user = User.objects.get(username=username)
            user_group = Group.objects.get(name='User')
            user_group.user_set.add(signup_user)
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                return redirect('signup')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('/')


# Page with user profile info
def profile(request):
    return render(request, 'profile.html')

# Page with list of courses
# how to get list of courses from DB?
def courses(request):
    return render(request, 'courses.html')


def about(request):
    return render(request, 'about.html')


