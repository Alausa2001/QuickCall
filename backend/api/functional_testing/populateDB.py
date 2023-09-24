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
        "category": "medical",
        "title": "Medical Emergency",
        "tips": [
            {
                "category": "Fire",
                "title": "Fire Safety Tip 1",
                "description": "3. Call the Emergency Line (Call)\n\tAs a preventive measure, you should endeavor to cram an emergency number for easy reach. The general emergency line for Nigeria is 112. Once you call the ambulance and relay some of the fact you garnered from tip 2 above, quickly return to the patient and try to care for them pending the arrival of the health professionals. When you call the emergency line, try to maintain calmness and give the responder any vital information you may have from your quick investigation such as the patient level of consciousness. You should not delay calling the ambulance as getting medical help at the right time can help you save a person’s life. If you are not sure about what the person is suffering from, you can make him lay down in a comfortable position. In case of fractures, you should not try to move the broken limb. In case the patient is bleeding, you can try to lift up the body part above the level of heart as this can help in controlling the bleeding.",
                },
            {
                "description": "1. Don’t Panic\n\tWitnessing an accident or another medical emergency can be scary and overwhelming, but you have to  stay calm to help the victim . So, take a deep breath, calm your nerves before proceeding to tip"
            },
            {
                "description": "2. Investigate the root cause (Check)\n\tBefore attempting to help a patient in an emergency, first check for anything unsafe around you then identify the different possible root cause(s) of the emergency. Different situations require different approaches. Try to find out the main cause, such as: Is the person conscious? If they are, you can ask them directly what the problem is. If the patient is unconscious, look for injury marks on the body and look out for insect bites or bleeding. You should also pay attention to the symptoms. For example, a patient suffering from heart attack may be holding their chest or complain of chest pain. Or a patient who is choking on something may look confused and gasping for breath. Ensure that your environment is safe for you and the victim, thereafter you can identify the problem before deciding what is next to take.",
            }
        ]
    }
    

   

    headers = {'Content-Type': 'application/json', 'authorization': token}

    try:
        response = requests.post('http://localhost:4000/api/v1/admin/add_emergency_tips', json=emergency_tips, headers=headers)
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
