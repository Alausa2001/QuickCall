#!/usr/bin/env python3
import requests
from json import dumps
from sys import argv

def signup():
    data = {
        'firstName': 'abdul', 'lastName': 'abdul', 'username': 'abdul', 'phoneNo1': '08160969769',
        'email': 'oluwaferanmialausa2001@gmail.com', 'password': 'abdul', 'phoneNo2': '07019302484'
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/auth/signup', headers=header, json=data)
    print(res)
    print(dumps(res.json(), indent=4))

def signin():
    data = {'username': 'abdul1', 'password': 'abdul1'}
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/auth/signin', headers=header, json=data)
    print(res.headers.get('Authorization'))
    print(res.json)
    print(dumps(res.json(), indent=4))
    return res.headers.get('Authorization')

def contact(token):
    
    header = {'Content-Type': 'application/json', "authorization": token}
    res = requests.get('http://localhost:4000/api/v1/emergency/6.9234/3.8364/Medical', headers=header)
    print(dumps(res.json(), indent=4))


if __name__ == "__main__":
    signup()
    token = signin()
    contact(token)
