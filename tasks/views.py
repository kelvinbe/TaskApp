from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = Task.objects.all().order_by('-created_at')
        is_completed = self.request.query_params.get('is_completed')
        if is_completed is not None:
            if is_completed.lower() in ['true', '1']:
                queryset = queryset.filter(is_completed=True)
            elif is_completed.lower() in ['false', '0']:
                queryset = queryset.filter(is_completed=False)
        return queryset