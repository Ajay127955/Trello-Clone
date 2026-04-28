from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    BoardViewSet, ListViewSet, CardViewSet, AuthViewSet, 
    WorkspaceViewSet, ChecklistViewSet, ChecklistItemViewSet,
    InvitationViewSet, NotificationViewSet, LabelViewSet, AIViewSet, AttachmentViewSet, SearchViewSet
)

router = DefaultRouter()
router.register(r'boards', BoardViewSet, basename='board')
router.register(r'lists', ListViewSet, basename='list')
router.register(r'cards', CardViewSet, basename='card')
router.register(r'workspaces', WorkspaceViewSet, basename='workspace')
router.register(r'checklists', ChecklistViewSet, basename='checklist')
router.register(r'checklist-items', ChecklistItemViewSet, basename='checklist-item')
router.register(r'invitations', InvitationViewSet, basename='invitation')
router.register(r'notifications', NotificationViewSet, basename='notification')
router.register(r'labels', LabelViewSet, basename='label')
router.register(r'attachments', AttachmentViewSet, basename='attachment')
router.register(r'ai', AIViewSet, basename='ai')
router.register(r'search', SearchViewSet, basename='search')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', AuthViewSet.as_view({'post': 'register'}), name='register'),
    path('verify-otp/', AuthViewSet.as_view({'post': 'verify_otp'}), name='verify_otp'),
    path('google-login/', AuthViewSet.as_view({'post': 'google_login'}), name='google_login'),
    path('me/', AuthViewSet.as_view({'get': 'me'}), name='me'),
]
