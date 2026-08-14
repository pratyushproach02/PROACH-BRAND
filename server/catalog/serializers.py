from rest_framework import serializers
from .models import Category, Product, ProductSpec, ProjectCaseStudy

class ProductSpecSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpec
        fields = ['id', 'label', 'value']


class ProductSerializer(serializers.ModelSerializer):
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    category_name = serializers.CharField(source='category.name', read_only=True)
    specs = ProductSpecSerializer(many=True, read_only=True)
    
    # Map frontend camelCase / simplified keys
    id = serializers.CharField(source='slug', read_only=True)
    model = serializers.CharField(source='model_number', read_only=True)
    voltage = serializers.CharField(source='voltage_rating', read_only=True)
    capacity = serializers.CharField(source='capacity_range', read_only=True)
    cooling = serializers.CharField(source='cooling_type', read_only=True)
    standards = serializers.CharField(source='applicable_standards', read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'category', 'category_slug', 'category_name', 'name', 
            'model', 'model_number', 'tag', 'badge', 'description', 
            'voltage', 'voltage_rating', 'capacity', 'capacity_range', 
            'cooling', 'standards', 'features', 'specs'
        ]


class CategorySerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug', read_only=True)
    products_count = serializers.IntegerField(source='products.count', read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'slug', 'name', 'description', 'products_count']


class ProjectCaseStudySerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug', read_only=True)
    scope = serializers.CharField(source='scope_of_work', read_only=True)

    class Meta:
        model = ProjectCaseStudy
        fields = [
            'id', 'title', 'location', 'sector', 'scope', 
            'scope_of_work', 'summary', 'highlight'
        ]
