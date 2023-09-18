#!/usr/bin/env python3
import requests
from json import dumps
from sys import argv


def post_states():
    
    data = {
        "states": [ 'Ogun', 'lAgos', 'AnAmbrA']
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/add_states', json=data, headers=header)
    print(dumps(res.json(), indent=4))

def get_states():
    print('\n List of states\n')

    header = {'Content-Type': 'application/json'}
    res = requests.get('http://localhost:4000/api/v1/admin/get_states', headers=header)
    print(dumps(res.json(), indent=4))


def post_lgas():
    
    data = {
        "LGAs": [ 'Ijebu North', 'Abeokuta'], "stateId": "60a876fb-41b0-493b-bd41-857242326e28"
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/add_local_governments', json=data, headers=header)
    print(dumps(res.json(), indent=4))


def get_lgas():
    print('\n List of LGAs\n')

    header = {'Content-Type': 'application/json'}
    res = requests.get('http://localhost:4000/api/v1/admin/60a876fb-41b0-493b-bd41-857242326e28/get_local_governments', headers=header)
    print(dumps(res.json(), indent=4))

def delete_lgas():
    print('\n Delete of LGAs\n')

    header = {'Content-Type': 'application/json'}
    res = requests.delete('http://localhost:4000/api/v1/admin/local_government/3834f40d-198c-4295-b5f4-079aadc96e73/delete', headers=header)
    print(dumps(res.json(), indent=4))

def post_contacts():
    print('\n postt of contacts of LGAs\n')
    data = {
        "emergencyType": 'Medical', "emergencyNo": '12345566', "whatsappContact": "11111"
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/add_emergency_contacts/62145996-90df-4de9-bdd6-e405fec7fdde', json=data, headers=header)
    print(dumps(res.json(), indent=4))



def get_contacts():
    print('\n List of contacts of LGAs\n')

    header = {'Content-Type': 'application/json'}
    res = requests.get('http://localhost:4000/api/v1/admin/emergency_contacts/62145996-90df-4de9-bdd6-e405fec7fdde', headers=header)
    print(dumps(res.json(), indent=4))

def delete_contact():
    print('\n Delete of contact\n')

    header = {'Content-Type': 'application/json'}
    res = requests.delete('http://localhost:4000/api/v1/admin/emergency_contact/35cc4899-f3db-4a8f-9868-c2ea42502aac/delete', headers=header)
    print(dumps(res.json(), indent=4))

def post_notable():
    print('\n postt of contacts of LGAs\n')
    data = {
        "position": 'Chief Medical Director, John Hopkins', "personName": 'Khidr Rodiyah',
        "whatsappContact": "091xxxxxxx", "phoneNo": '091111111'
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/add_notable_personality/62145996-90df-4de9-bdd6-e405fec7fdde', json=data, headers=header)
    print(dumps(res.json(), indent=4))


def get_notable():
    print('\n List of personalities of LGAs\n')

    header = {'Content-Type': 'application/json'}
    res = requests.get('http://localhost:4000/api/v1/admin/notable_people/d6eef2e1-b588-413d-8c0d-b59ebae36ee3', headers=header)
    print(dumps(res.json(), indent=4))


def delete_notable():
    print('\n Delete of personality\n')

    header = {'Content-Type': 'application/json'}
    res = requests.delete('http://localhost:4000/api/v1/admin/notable_people/5e5ebc88-885f-4878-ac91-dd6a30a34d07/delete', headers=header)
    print(dumps(res.json(), indent=4))



if __name__ == "__main__":
    post_states()
    get_states()
    post_lgas()
    get_lgas()
    delete_lgas()
    post_contacts()
    get_contacts()
    delete_contact()
    post_notable()
    get_notable()
    delete_notable()
    get_notable()
