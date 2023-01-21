
from rest_framework import routers
from .api import ProjectViewSetUser, ProjectViewSetAuditoria

router = routers.DefaultRouter()

router.register("user", ProjectViewSetUser, "user")
router.register("auditoria", ProjectViewSetAuditoria, "comentarios")

urlpatterns = router.urls