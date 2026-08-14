from django.urls import path
from .views import QuoteRequestCreateListView

urlpatterns = [
    path('inquiries/', QuoteRequestCreateListView.as_view(), name='inquiries-create-list'),
]
