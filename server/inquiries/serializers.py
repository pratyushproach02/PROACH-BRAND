from rest_framework import serializers
from .models import QuoteRequest, QuoteItem

class QuoteItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteItem
        fields = ['id', 'product_name', 'model', 'quantity', 'voltage_rating', 'capacity']


class QuoteRequestSerializer(serializers.ModelSerializer):
    items = QuoteItemSerializer(many=True, required=False)

    class Meta:
        model = QuoteRequest
        fields = [
            'id', 'reference_no', 'name', 'organization', 'email', 
            'phone', 'location', 'tender_ref', 'delivery_timeline', 
            'subject', 'notes', 'status', 'created_at', 'items'
        ]
        read_only_fields = ['id', 'reference_no', 'status', 'created_at']

    def create(self, validated_data):
        items_data = validated_data.pop('items', [])
        quote_request = QuoteRequest.objects.create(**validated_data)
        for item_data in items_data:
            QuoteItem.objects.create(quote_request=quote_request, **item_data)
        return quote_request
