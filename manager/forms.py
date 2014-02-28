__author__ = 'geoffreyboss'

# from django.forms import ModelForm
from manager.models import User
from django import forms


class LoginForm(forms.ModelForm):
    class Meta:
        model = User
        widgets = {
            'password': forms.PasswordInput()
        }