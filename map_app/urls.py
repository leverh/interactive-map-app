from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MapStateViewSet
from .views import home
from . import views
from django.contrib.auth.views import LoginView
from .views import dashboard


router = DefaultRouter()
router.register(r'mapstates', MapStateViewSet, basename='mapstate')

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.map_view, name='home'),
    path('register/', views.register, name='register'),
    path('login/', LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('dashboard/', dashboard, name='dashboard'),
    path('accounts/profile/', views.profile, name='profile'),
]

