#!/usr/bin/env python3
import requests
from json import dumps
from sys import argv

def signup():
    data = {
        'username': 'bdul', 'password': 'abdul',
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/auth/signup', headers=header, json=data)
    print(res)
    print(dumps(res.json(), indent=4))

def signin():
    data = {
        'username': 'bdul', 'password': 'abdul',
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/auth/signin', headers=header, json=data)
    print(res.headers.get('Authorization'))
    print(res.json)
    print(dumps(res.json(), indent=4))
    return res.headers.get('Authorization')

def profile(token):
    data = {
        'firstName': 'Wale', 'lastName': 'Adenuga', 'phoneNo1': '08160969769', 'age': '22',
        'gender': 'male', "nameOfEmerContact": 'badaru basirah',
        "relationship": 'wifey',
        "emergencyPhoneNo": "0909xxxxxxx",
        'email': 'oluwaferanmialausa2001@gmail.com', 'phoneNo2': '07019302484'
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://localhost:4000/api/v1/profile/create', headers=header, json=data)
    print(res.json)
    print(dumps(res.json(), indent=4))
    return res.headers.get('Authorization')

def medical(token):
    data = {
        'bloodType': 'A+', 'genotype': 'AS', 'famDocContact': '020200000', 'medEmerContact': ['0200000'],
        'allergies': ['dust'], 'chronicConditions': ['asthma']
    }
    header = {'Content-Type': 'application/json', 'authorization': token}

    
    res = requests.post('http://localhost:4000/api/v1/profile/medical_information/submit', headers=header, json=data)
    print(res)
    print(dumps(res.json(), indent=4))
  

    print('\nGet user Medical information\n')
    res = requests.get('http://localhost:4000/api/v1/profile/medical_information', headers=header)
    print(res)
    print(dumps(res.json(), indent=4))

    print('\n Update user Medical information\n')
    data = {
            'allergies': ['dust', 'pollen'], "chronicConditions": ["diabetes", "hypertension"], 'medEmerContact': ['0200']
            }
    res = requests.patch('http://localhost:4000/api/v1/profile/medical_information/update', headers=header, json=data)
    print(res)
    print(dumps(res.json(), indent=4))

def update_profile(token):
    print('\n Update user profile\n')
    data = {
        'firstName': 'Walex', 'age': '44', "emergencyPhoneNo": "0909xxxxxxx"
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.patch('http://localhost:4000/api/v1/profile/basic_information/update', headers=header, json=data)
    print(dumps(res.json(), indent=4))

    res = requests.get('http://localhost:4000/api/v1/profile/basic_information', headers=header)
    print(dumps(res.json(), indent=4))


if __name__ == "__main__":
    signup()
    token = signin()
    profile(token)
    medical(token)
    update_profile(token)
