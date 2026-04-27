from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from kanban.serializers import EmailOrUsernameTokenView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('kanban.urls')),
    # Custom token view: accepts email OR username as login identifier
    path('api/token/', EmailOrUsernameTokenView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
