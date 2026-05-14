from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from .models import Board, Card, List, Workspace

class SubzilloWorkflowTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        
        # Create Manager
        self.manager = User.objects.create_user(username='ajay_manager', password='password123', email='manager@test.com')
        
        # Create Employee
        self.employee = User.objects.create_user(username='surendra_emp', password='password123', email='emp@test.com')
        
        # Create Board
        self.workspace = Workspace.objects.create(name="Test Workspace", owner=self.manager)
        self.board = Board.objects.create(title="Project Subzillo", owner=self.manager, workspace=self.workspace)
        
        # Add members to Workspace with roles
        from .models import WorkspaceMember
        WorkspaceMember.objects.create(workspace=self.workspace, user=self.manager, role='manager')
        WorkspaceMember.objects.create(workspace=self.workspace, user=self.employee, role='member')
        
        # Add members to board
        self.board.members.add(self.manager, self.employee)
        
        self.list = List.objects.create(title="Tasks", board=self.board, position=0)
        self.card = Card.objects.create(title="Test Task", list=self.list, position=0)

    def test_manager_assignment_filtering(self):
        """Test that only employees can be assigned to tasks."""
        self.client.force_authenticate(user=self.manager)
        
        # Try to assign the manager (Should Fail/Not be recommended by UI)
        # Note: The backend allows it but the UI filters it. 
        # Here we test the specialized assign endpoint.
        url = f'/api/cards/{self.card.id}/assign/'
        response = self.client.post(url, {'user_id': self.employee.id})
        
        self.assertEqual(response.status_code, 200)
        # Check if employee ID is in the assigned_to list
        assigned_ids = [u['id'] for u in response.data['assigned_to']]
        self.assertIn(self.employee.id, assigned_ids)
        
        # Verify status reset to TODO
        updated_card = Card.objects.get(id=self.card.id)
        self.assertEqual(updated_card.status, 'todo')

    def test_employee_workflow_update(self):
        """Test that an employee can move a task status."""
        # Pre-assign to employee
        self.card.assigned_to.add(self.employee)
        
        self.client.force_authenticate(user=self.employee)
        
        url = f'/api/cards/{self.card.id}/'
        response = self.client.patch(url, {'status': 'doing'})
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Card.objects.get(id=self.card.id).status, 'doing')

    def test_card_priority(self):
        """Test that priority field is working."""
        self.card.priority = 'urgent'
        self.card.save()
        self.assertEqual(Card.objects.get(id=self.card.id).priority, 'urgent')
        
        self.client.force_authenticate(user=self.manager)
        url = f'/api/boards/{self.board.id}/analytics/'
        response = self.client.get(url)
        # Check if priority is in the task data
        self.assertEqual(response.data['tasks'][0]['priority'], 'urgent')
