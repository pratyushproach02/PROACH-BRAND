from django.urls import path
from .views import CategoryListView, ProductListView, ProductDetailView, ProjectCaseStudyListView

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('projects/', ProjectCaseStudyListView.as_view(), name='project-list'),
]
