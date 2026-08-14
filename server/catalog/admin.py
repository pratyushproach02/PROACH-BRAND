from django.contrib import admin
from .models import Category, Product, ProductSpec, ProjectCaseStudy

class ProductSpecInline(admin.TabularInline):
    model = ProductSpec
    extra = 2

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'order']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'model_number', 'category', 'voltage_rating', 'tag', 'is_featured']
    list_filter = ['category', 'is_featured', 'tag']
    search_fields = ['name', 'model_number', 'description']
    prepopulated_fields = {'slug': ('name', 'model_number')}
    inlines = [ProductSpecInline]

@admin.register(ProjectCaseStudy)
class ProjectCaseStudyAdmin(admin.ModelAdmin):
    list_display = ['title', 'location', 'sector', 'is_published', 'order']
    list_filter = ['sector', 'is_published']
    search_fields = ['title', 'location', 'summary']
    prepopulated_fields = {'slug': ('title',)}
