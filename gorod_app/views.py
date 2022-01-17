from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import CustomerGorod
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .serializers import *
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import LoginSerializer
from .serializers import RegistrationSerializer


class RegistrationAPIView(APIView):
    """
    Registers a new user.
    """
    permission_classes = [AllowAny]
    serializer_class = RegistrationSerializer

    def post(self, request):
        """
        Creates a new User object.
        Username, email, and password are required.
        Returns a JSON web token.
        """
        print('1')
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        print('2')
        serializer.is_valid(raise_exception=True)
        print(serializer.errors)
        print('3')
        serializer.save()
        print('4')
        return Response(
            {
                'token': serializer.data.get('token', None),
            },
            status=status.HTTP_201_CREATED,
        )


class LoginAPIView(APIView):
    """
    Logs in an existing user.
    """
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request):
        """
        Checks is user exists.
        Email and password are required.
        Returns a JSON web token.
        """
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)











"""
# @api_view(['GET', 'POST'])
def registration(request):
    if request.method == 'POST':
        print(request.data)
        user = Customererer.objects.create_user(username=request.data['login'],
                                                password=request.data['password'],
                                                email=request.data['email'],
                                                address=request.data['address'],
                                                fio=request.data['fio'],
                                                mobile=request.data['phnumber'],
                                                home=request.data['hphnumber']
                                                )
        print(request.data)
    return Response()


# @api_view(['GET', 'POST'])
@csrf_exempt
def login(request):
    print("#####")
    print(request.POST)
    print("#####")
    if request.method == 'POST':
        user = authenticate(username=request.data['login'], password=request.data['password'])
        if user is not None:
            login(request, user)
            return Response(data={'success': False}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(data={'success': True})


# @api_view(['GET', 'POST'])
@csrf_exempt
def logout(request):
    logout(request)
    return Response()

"""


"""
@api_view(['GET', 'POST'])
def customers_list(request):
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        customers = Customer.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(customers, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = CustomerSerializer(data, context={'request': request}, many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data, 'count': paginator.count, 'numpages': paginator.num_pages,
                         'nextlink': '/api/customers/?page=' + str(nextPage),
                         'prevlink': '/api/customers/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def customers_detail(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CustomerSerializer(customer,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CustomerSerializer(customer, data=request.data,    context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


"""

"""

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

"""
