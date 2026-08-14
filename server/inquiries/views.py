from rest_framework import generics, status
from rest_framework.response import Response
from .models import QuoteRequest
from .serializers import QuoteRequestSerializer

class QuoteRequestCreateListView(generics.ListCreateAPIView):
    queryset = QuoteRequest.objects.all().prefetch_related('items')
    serializer_class = QuoteRequestSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        
        return Response({
            'success': True,
            'reference_no': instance.reference_no,
            'message': 'Your tender RFQ has been recorded successfully. Our engineering estimation desk will contact you within 24 hours.',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
