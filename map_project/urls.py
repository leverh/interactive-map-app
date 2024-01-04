from django.contrib import admin
from django.urls import path, include  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('map_app.urls')),
    path('', include('map_app.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
]
