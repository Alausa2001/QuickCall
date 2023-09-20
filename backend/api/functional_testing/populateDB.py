#!/usr/bin/env python3
import requests
from json import dumps
from sys import argv


def signup():
    data = {
        'username': 'Quickcall', 'password': 'Quickcall',
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/signup', headers=header, json=data)
    print(res)
    print(dumps(res.json(), indent=4))

def signin():
    data = {
        'username': 'Quickcall', 'password': 'Quickcall',
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/signin', headers=header, json=data)
    print(res.headers.get('Authorization'))
    print(res.json)
    print(dumps(res.json(), indent=4))
    return res.headers.get('Authorization')

def post_states(token):
    
    data = {
        "states": [ 'Ogun', 'lAgos', 'AnAmbrA']
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://localhost:4000/api/v1/admin/add_states', json=data, headers=header)
    print(dumps(res.json(), indent=4))

def get_states(token):
    print('\n List of states\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://localhost:4000/api/v1/admin/get_states', headers=header)
    print(dumps(res.json(), indent=4))


def post_lgas(token):
    
    data = {
        "LGAs": [ 'Ijebu North', 'Abeokuta'], "stateId": "60a876fb-41b0-493b-bd41-857242326e28"
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://localhost:4000/api/v1/admin/add_local_governments', json=data, headers=header)
    print(dumps(res.json(), indent=4))


def get_lgas(token):
    print('\n List of LGAs\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://localhost:4000/api/v1/admin/60a876fb-41b0-493b-bd41-857242326e28/get_local_governments', headers=header)
    print(dumps(res.json(), indent=4))

def delete_lgas(token):
    print('\n Delete of LGAs\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.delete('http://localhost:4000/api/v1/admin/local_government/3834f40d-198c-4295-b5f4-079aadc96e73/delete', headers=header)
    print(dumps(res.json(), indent=4))

def post_contacts(token):
    print('\n postt of contacts of LGAs\n')
    data = {
        "emergencyType": 'Medical', "emergencyNo": '12345566', "whatsappContact": "11111"
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://localhost:4000/api/v1/admin/add_emergency_contacts/62145996-90df-4de9-bdd6-e405fec7fdde', json=data, headers=header)
    print(dumps(res.json(), indent=4))



def get_contacts(token):
    print('\n List of contacts of LGAs\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://localhost:4000/api/v1/admin/emergency_contacts/62145996-90df-4de9-bdd6-e405fec7fdde', headers=header)
    print(dumps(res.json(), indent=4))

def delete_contact(token):
    print('\n Delete of contact\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.delete('http://localhost:4000/api/v1/admin/emergency_contact/35cc4899-f3db-4a8f-9868-c2ea42502aac/delete', headers=header)
    print(dumps(res.json(), indent=4))

def post_notable(token):
    print('\n postt of contacts of LGAs\n')
    data = {
        "position": 'Chief Medical Director, John Hopkins', "personName": 'Khidr Rodiyah',
        "whatsappContact": "091xxxxxxx", "phoneNo": '091111111'
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://localhost:4000/api/v1/admin/add_notable_personality/62145996-90df-4de9-bdd6-e405fec7fdde', json=data, headers=header)
    print(dumps(res.json(), indent=4))


def get_notable(token):
    print('\n List of personalities of LGAs\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://localhost:4000/api/v1/admin/notable_people/62145996-90df-4de9-bdd6-e405fec7fdde', headers=header)
    print(dumps(res.json(), indent=4))


def delete_notable(token):
    print('\n Delete of personality\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.delete('http://localhost:4000/api/v1/admin/notable_people/5e5ebc88-885f-4878-ac91-dd6a30a34d07/delete', headers=header)
    print(dumps(res.json(), indent=4))

def get_feedbacks(token):
    print('\nfeedbacks\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://localhost:4000/api/v1/admin/feedbacks/2023-07-15/2023-09-20', headers=header)
    print(dumps(res.json(), indent=4))

import requests
import json

def post_emergency_tips(token):
    
    emergency_tips = [
        {
            "category": "Fire",
            "title": "Fire Safety Tip 1",
            "description": "Description of fire safety tip 1.",
        },
        {
            "category": "Medical",
            "title": "Medical Tip 1",
            "description": "Description of medical tip 1.",
        },
        {
            "category": "Police",
            "title": "Police Tip 1",
            "description": "Description of police tip 1.",
            "Author": "Law Enforcement"
        }
    ]

    data = {
        "tips": emergency_tips
    }

    headers = {'Content-Type': 'application/json', 'authorization': token}

    try:
        response = requests.post('http://localhost:4000/api/v1/admin/add_emergency_tips', json=data, headers=headers)
        response_json = response.json()
        
        if response.status_code == 201:
            print("Emergency tips added successfully:")
            print(json.dumps(response_json, indent=4))
        else:
            print(f"Failed to add emergency tips. Status Code: {response.status_code}")
            print(json.dumps(response_json, indent=4))
    
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")


def get_tips(token):
    print('\nall tips\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://localhost:4000/api/v1/admin/emergency_tips', headers=header)
    print(dumps(res.json(), indent=4))


def delete_tip(token):
    print('\n Delete of tip\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.delete('http://localhost:4000/api/v1/admin/emergency_tip/2b41eed9-771d-41d0-96c0-bb1f6d20f1b1/delete', headers=header)
    print(dumps(res.json(), indent=4))


if __name__ == "__main__":
    signup()
    token = signin()
    #post_states(token)
    #get_states(token)
    #post_lgas(token)
    #get_lgas(token)
    #delete_lgas(token)
    #post_contacts(token)
    #get_contacts(token)
    #delete_contact(token)
    #post_notable(token)
    #get_notable(token)
    #delete_notable(token)
    #get_notable(token)
    #get_feedbacks(token)
    get_tips(token)
    delete_tip(token)
    get_tips(token)
    post_emergency_tips(token)
