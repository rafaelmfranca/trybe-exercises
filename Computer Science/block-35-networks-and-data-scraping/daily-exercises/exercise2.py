import requests

github_users_list = requests.get("https://api.github.com/users").json()

for user in github_users_list:
    print(f"{user['login']} {user['url']}")
