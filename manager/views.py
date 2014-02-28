# Create your views here.
from django.shortcuts import render, redirect
from manager.forms import LoginForm

def home(request):
    return render(request, "home.html")

def login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid:
            if form.save():
                return redirect("/profile")

    else:
        form = LoginForm()
    data = {'form':form}
    return render(request, "login.html", data)

def profile(request):
    return render(request, "profile.html")

