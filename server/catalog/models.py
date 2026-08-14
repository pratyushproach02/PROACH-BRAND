from django.db import models

class Category(models.Model):
    slug = models.SlugField(max_length=100, unique=True)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, default='')
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class Product(models.Model):
    slug = models.SlugField(max_length=120, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=255)
    model_number = models.CharField(max_length=100)
    tag = models.CharField(max_length=100, default='MES Approved')
    badge = models.CharField(max_length=100, default='Industrial Grade')
    description = models.TextField()
    voltage_rating = models.CharField(max_length=150)
    capacity_range = models.CharField(max_length=150)
    cooling_type = models.CharField(max_length=150, blank=True, default='')
    applicable_standards = models.CharField(max_length=255, default='IS / IEC / BIS')
    features = models.JSONField(default=list, blank=True, help_text="List of engineering features")
    is_featured = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-is_featured', 'name']

    def __str__(self):
        return f"{self.name} ({self.model_number})"


class ProductSpec(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='specs')
    label = models.CharField(max_length=150)
    value = models.CharField(max_length=255)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.label}: {self.value}"


class ProjectCaseStudy(models.Model):
    slug = models.SlugField(max_length=120, unique=True)
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=200)
    sector = models.CharField(max_length=150, default='Defense Infrastructure')
    scope_of_work = models.TextField()
    summary = models.TextField()
    highlight = models.CharField(max_length=255)
    is_published = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Project Case Studies'
        ordering = ['order', '-id']

    def __str__(self):
        return f"{self.title} - {self.location}"
