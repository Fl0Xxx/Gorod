from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('test', views.test, name='test'),
    path('account/create/', views.signUpView, name='signup'),
    path('account/login/', views.login_view, name='login'),
    path('account/logout/', views.logout_view, name='logout'),
]

