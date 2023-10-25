from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from django.contrib.auth.models import User


# Create your tests here.
class UserRegistrationTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.register_url = reverse('user-registration')

    def test_user_registration(self):
        data = {
            'username': 'testuser',
            'password': 'testpassword'
        }
        response = self.client.post(self.register_url, data, format='json')

        self.assertEqual(response.status_code, 201)  # Check for a successful registration
        self.assertTrue(User.objects.filter(username='testuser').exists())  # Check if the user exists
        self.assertTrue(User.objects.get(username='testuser').userprofile)  # Check if UserProfile is created


