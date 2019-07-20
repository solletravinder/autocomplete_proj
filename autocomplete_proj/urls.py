"""autocomplete_proj URL Configuration"""
from django.conf.urls import url, include
from django.contrib import admin
import rest_framework
from main_app.views import *
from .swagger_schema import SwaggerSchemaView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.routers import SimpleRouter
router = SimpleRouter()
router.register('', AutoCompleteAPIView)


schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
   url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]+ [
    url(r'^admin/', admin.site.urls),
	url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/search_by_prefix/', search_by_prefix, name='search_by_prefix'),
    # url(r'^swagger/', SwaggerSchemaView.as_view()),
    url(r'^$', HomePageView.as_view(),name='home'),
    url(r'^ajax_autocomplete/$', autocomplete, name='ajax_autocomplete'),
    url(r'^api/', include(router.urls)),
]


# if settings.DEBUG:
urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

