from django.shortcuts import get_object_or_404
from rest_framework import generics, status, views
from rest_framework.response import Response
from api.serializers import PurchaseSerializer
from api.models import Purchase


class PurchaseCreateView(views.APIView):
    def post(self, request):
        serializer = PurchaseSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class PurchaseGetView(generics.ListAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer

    def get(self, request, *args, **kwargs):
        if 'id' in kwargs:
            purchase = get_object_or_404(Purchase, id=kwargs['id'])
            serializer = PurchaseSerializer(purchase)
            return Response(serializer.data, status=status.HTTP_200_OK)

        if 'userid' in kwargs:
            purchase = Purchase.objects.filter(user=kwargs['userid'])
            serializer = PurchaseSerializer(purchase, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return super().get(request, *args, **kwargs)
