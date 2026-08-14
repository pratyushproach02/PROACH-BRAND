from django.contrib import admin
from .models import QuoteRequest, QuoteItem

class QuoteItemInline(admin.TabularInline):
    model = QuoteItem
    extra = 0
    readonly_fields = ['product_name', 'model', 'quantity', 'voltage_rating', 'capacity']

@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ['reference_no', 'name', 'organization', 'phone', 'location', 'status', 'created_at']
    list_filter = ['status', 'location', 'created_at']
    search_fields = ['reference_no', 'name', 'organization', 'email', 'phone', 'tender_ref']
    readonly_fields = ['reference_no', 'created_at', 'updated_at']
    inlines = [QuoteItemInline]
