from rest_framework import serializers
from api.models import Purchase


class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = ['id', 'user', 'pack', 'total', 'buyer_id', 'buyer_card', 'buyer_card_name',
                  'buyer_card_due_date', 'buyer_card_cvv', 'created_at']

    def create(self, validated_data):
        purchaseInstance = Purchase.objects.create(**validated_data)
        return purchaseInstance
