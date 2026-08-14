from rest_framework import generics, filters
from .models import Category, Product, ProjectCaseStudy
from .serializers import CategorySerializer, ProductSerializer, ProjectCaseStudySerializer

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all().prefetch_related('specs', 'category')
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'model_number', 'description', 'voltage_rating', 'category__name']

    def get_queryset(self):
        qs = super().get_queryset()
        category_slug = self.request.query_params.get('category')
        if category_slug and category_slug != 'all':
            qs = qs.filter(category__slug=category_slug)
        return qs


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all().prefetch_related('specs', 'category')
    serializer_class = ProductSerializer
    lookup_field = 'slug'


class ProjectCaseStudyListView(generics.ListAPIView):
    queryset = ProjectCaseStudy.objects.filter(is_published=True)
    serializer_class = ProjectCaseStudySerializer
