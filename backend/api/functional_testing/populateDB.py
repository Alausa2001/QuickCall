#!/usr/bin/env python3
import requests
from json import dumps
from sys import argv


def signup():
    data = {
        'username': 'Quickcall', 'password': 'Quickcall',
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://qcall.feranmi.tech/api/v1/admin/signup', headers=header, json=data)
    print(res)
    print(dumps(res.json(), indent=4))


def signin():
    data = {
        'username': 'Quickcall', 'password': 'Quickcall',
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://qcall.feranmi.tech/api/v1/admin/signin', headers=header, json=data)
    print(res.headers.get('Authorization'))
    print(res.json)
    print(dumps(res.json(), indent=4))
    return res.headers.get('Authorization')

def post_states(token):
    
    data = {
        "states": [ 'Ogun', 'lAgos', 'AnAmbrA', 'Oyo']
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://qcall.feranmi.tech/api/v1/admin/add_states', json=data, headers=header)
    print(dumps(res.json(), indent=4))

def get_states(token):
    print('\n List of states\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://qcall.feranmi.tech/api/v1/admin/get_states', headers=header)
    print(dumps(res.json(), indent=4))


def post_lgas(token):
    
    data = {
        "LGAs": [
            "Ibadan North",
            "Ibadan South-West",
            "Ibadan North-East",
            "Ibadan South-East",
            "Ibadan North-West",
            "Ido",
            "Lagelu",
            "Egbeda",
            "Ona-Ara",
            "Oluyole"
            ], "stateId": "0b445866-8f42-4e71-b26c-4b54102cb8c2"
        }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://qcall.feranmi.tech/api/v1/admin/add_local_governments', json=data, headers=header)
    print(dumps(res.json(), indent=4))


def get_lgas(token):
    print('\n List of LGAs\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://qcall.feranmi.tech/api/v1/admin/c345d2c7-34ef-430c-89c4-e5c5005fcda7/get_local_governments', headers=header)
    print(dumps(res.json(), indent=4))

def delete_lgas(token):
    print('\n Delete of LGAs\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.delete('http://qcall.feranmi.tech/api/v1/admin/local_government/3834f40d-198c-4295-b5f4-079aadc96e73/delete', headers=header)
    print(dumps(res.json(), indent=4))

def post_contacts(token):
    print('\n postt of contacts of LGAs\n')
    data = {
        "emergencyType": 'fire', "emergencyNo": '113', "whatsappContact": "09019302453"
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://qcall.feranmi.tech/api/v1/admin/add_emergency_contacts/5f1beb5a-68e2-4d5c-8911-ff0c181a2195', json=data, headers=header)
    print(dumps(res.json(), indent=4))



def get_contacts(token):
    print('\n List of contacts of LGAs\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://qcall.feranmi.tech/api/v1/admin/emergency_contacts/62145996-90df-4de9-bdd6-e405fec7fdde', headers=header)
    print(dumps(res.json(), indent=4))

def delete_contact(token):
    print('\n Delete of contact\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.delete('http://qcall.feranmi.tech/api/v1/admin/emergency_contact/35cc4899-f3db-4a8f-9868-c2ea42502aac/delete', headers=header)
    print(dumps(res.json(), indent=4))

def post_notable(token):
    print('\n postt of contacts of LGAs\n')
    data = {
        "position": 'Minister of health', "personName": 'Bolaji Pascal',
        "whatsappContact": "08060169729", "phoneNo": '08560967869'
    }
    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.post('http://qcall.feranmi.tech/api/v1/admin/add_notable_personality/state/c345d2c7-34ef-430c-89c4-e5c5005fcda7', json=data, headers=header)
    print(dumps(res.json(), indent=4))


def get_notable(token):
    print('\n List of personalities of LGAs\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://qcall.feranmi.tech/api/v1/admin/notable_people/state/c345d2c7-34ef-430c-89c4-e5c5005fcda7', headers=header)
    print(dumps(res.json(), indent=4))


def delete_notable(token):
    print('\n Delete of personality\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.delete('http://qcall.feranmi.tech/api/v1/admin/notable_people/state/2ac8d648-0c63-464d-81a8-6c74f7b1a5e1/delete', headers=header)
    print(dumps(res.json(), indent=4))

def get_feedbacks(token):
    print('\nfeedbacks\n')

    header = {'Content-Type': 'application/json', 'authorization': token}
    res = requests.get('http://qcall.feranmi.tech/api/v1/admin/feedbacks/2023-07-15/2023-09-20', headers=header)
    print(dumps(res.json(), indent=4))

import requests
import json

def post_emergency_tips(token):
    
    emergency_tips = {
    "category": "police",
    "title": "Things to do during a police emergency",
    "tips": [
        {
            "description": "Call your local emergency number to report the situation."
        },
        {
            "description": "Remain as safe as possible and out of harm's way until the police arrive."
        },
        {
            "description": "Provide the dispatcher with clear and accurate information about the emergency."
        },
        {
            "description": "If it's safe to do so, document the incident with photos or videos as evidence."
        },
        {
            "description": "Cooperate with arriving officers, follow their instructions, and stay calm."
        },
        {
            "description": "Do not take matters into your own hands; let the police handle the situation."
        },
        {
            "description": "Keep a safe distance from any potentially dangerous individuals involved."
        },
        {
            "description": "If you're a witness, be prepared to provide a statement to the police."
        },
        {
            "description": "Follow up with law enforcement or legal authorities as needed to support the case."
        },
        {
            "description": "Consider seeking support or counseling if the incident has caused emotional distress."
        }
        ]
    }

    

   

    headers = {'Content-Type': 'application/json', 'authorization': token}

    try:
        response = requests.post('http://qcall.feranmi.tech/api/v1/admin/add_emergency_tips', json=emergency_tips, headers=headers)
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
    #get_tips(token)
    #delete_tip(token)
    #get_tips(token)
    post_emergency_tips(token)
