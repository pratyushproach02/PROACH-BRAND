import uuid
from django.db import models

class QuoteRequest(models.Model):
    STATUS_CHOICES = [
        ('NEW', 'New Tender Enquiry'),
        ('IN_REVIEW', 'Under Estimation Review'),
        ('QUOTED', 'Quote Dispatched to Client'),
        ('ACCEPTED', 'Tender Awarded / Contract Won'),
        ('CLOSED', 'Closed'),
    ]

    reference_no = models.CharField(max_length=50, unique=True, editable=False)
    name = models.CharField(max_length=200, verbose_name="Contact Person / Officer")
    organization = models.CharField(max_length=255, blank=True, default='', verbose_name="Organization / Garrison")
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    location = models.CharField(max_length=200, default='Jammu / Kashmir Region')
    tender_ref = models.CharField(max_length=150, blank=True, default='', verbose_name="Tender / CA Number")
    delivery_timeline = models.CharField(max_length=150, blank=True, default='Within 30 Days')
    subject = models.CharField(max_length=255, blank=True, default='Tender Quotation Request')
    notes = models.TextField(blank=True, default='', verbose_name="Technical Notes / BOQ Details")
    status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='NEW')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Quote Request / Tender RFQ'
        verbose_name_plural = 'Quote Requests / Tender RFQs'

    def save(self, *args, **kwargs):
        if not self.reference_no:
            self.reference_no = f"PB-{uuid.uuid4().hex[:8].upper()}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.reference_no} - {self.name} ({self.organization or 'Individual'})"


class QuoteItem(models.Model):
    quote_request = models.ForeignKey(QuoteRequest, on_delete=models.CASCADE, related_name='items')
    product_name = models.CharField(max_length=255)
    model = models.CharField(max_length=150, blank=True, default='')
    quantity = models.PositiveIntegerField(default=1)
    voltage_rating = models.CharField(max_length=150, blank=True, default='')
    capacity = models.CharField(max_length=150, blank=True, default='')

    def __str__(self):
        return f"{self.quantity}x {self.product_name} ({self.model})"
