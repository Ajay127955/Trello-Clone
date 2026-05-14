import requests
import sys

BASE_URL = "http://10.1.40.205:8000/api"

def debug_login_me():
    # 1. Login
    login_url = f"{BASE_URL}/token/"
    # We need a user. Let's assume 'testuser' exists or try to register one.
    # Actually, we can't easily register here without OTP (if it was active).
    # But wait, I simplified register to not require OTP in my rewrite!
    
    reg_url = f"{BASE_URL}/register/"
    username = "testuser_debug"
    password = "testpassword123"
    email = "test@debug.com"
    
    print(f"Attempting to register {username}...")
    r = requests.post(reg_url, json={"username": username, "password": password, "email": email})
    if r.status_code == 201:
        print("Registration success.")
    else:
        print(f"Registration failed or user exists: {r.status_code} {r.text}")
    
    print(f"Attempting login...")
    r = requests.post(login_url, json={"username": username, "password": password})
    if r.status_code != 200:
        print(f"Login failed: {r.status_code} {r.text}")
        return
    
    tokens = r.json()
    access_token = tokens['access']
    print(f"Login success. Access token acquired.")
    
    # 2. Call me/
    me_url = f"{BASE_URL}/me/"
    print(f"Calling {me_url}...")
    headers = {"Authorization": f"Bearer {access_token}"}
    r = requests.get(me_url, headers=headers)
    
    print(f"Response code: {r.status_code}")
    print(f"Response body: {r.text}")

if __name__ == "__main__":
    debug_login_me()
