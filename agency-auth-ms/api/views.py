from rest_framework import generics, status, views
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from api.serializers import CusTokenSerializer, UserSerializer
from api.models import User


class CusTokenView(TokenObtainPairView):
    serializer_class = CusTokenSerializer


class UserCreateView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        tokenData = {
            "username": request.data["username"],
            "password": request.data["password"],
        }
        tokenSerializer = CusTokenSerializer(data=tokenData)
        tokenSerializer.is_valid(raise_exception=True)
        return Response(tokenSerializer.validated_data, status=status.HTTP_201_CREATED)


class UserGetView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):

        if ('id' in kwargs and (not request.user.is_admin and request.user.id != kwargs['id'])) or ('id' not in kwargs and not request.user.is_admin):
            return Response({'detail': 'Unauthorized Request'}, status=status.HTTP_401_UNAUTHORIZED)

        if 'id' in kwargs:
            user = User.objects.get(id=kwargs['id'])
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return super().get(request, *args, **kwargs)
