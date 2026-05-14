from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    BoardViewSet, ProjectCategoryViewSet, TaskViewSet, TaskAssignmentViewSet,
    AuthViewSet, WorkspaceViewSet, ActivityViewSet, MeView,
    InvitationViewSet, NotificationViewSet
)

router = DefaultRouter()
router.register(r'boards', BoardViewSet, basename='board')
router.register(r'categories', ProjectCategoryViewSet, basename='category')
router.register(r'tasks', TaskViewSet, basename='task')
router.register(r'assignments', TaskAssignmentViewSet, basename='assignment')
router.register(r'workspaces', WorkspaceViewSet, basename='workspace')
router.register(r'activities', ActivityViewSet, basename='activity')
router.register(r'auth', AuthViewSet, basename='auth')
router.register(r'invitations', InvitationViewSet, basename='invitation')
router.register(r'notifications', NotificationViewSet, basename='notification')

urlpatterns = [
    path('', include(router.urls)),
    # Auth endpoints — all handled by our custom AuthViewSet
    path('register/', AuthViewSet.as_view({'post': 'register'}), name='register'),
    path('verify-otp/', AuthViewSet.as_view({'post': 'verify_otp'}), name='verify-otp'),
    path('login/', AuthViewSet.as_view({'post': 'login'}), name='custom-login'),
    path('google-login/', AuthViewSet.as_view({'post': 'google_login'}), name='google-login'),
    path('logout/', AuthViewSet.as_view({'post': 'logout'}), name='logout'),
    path('me/', MeView.as_view(), name='me'),
]
