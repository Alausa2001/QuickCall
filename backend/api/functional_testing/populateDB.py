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
        "LGAs": [ 'Ijebu North', 'Abeokuta'], "stateId": "75025376-33d6-4c36-a704-305103e9aa62"
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/add_local_governments', json=data, headers=header)
    print(dumps(res.json(), indent=4))


def get_lgas():
    print('\n List of LGAs\n')

    header = {'Content-Type': 'application/json'}
    res = requests.get('http://localhost:4000/api/v1/admin/get_local_governments/75025376-33d6-4c36-a704-305103e9aa62', headers=header)
    print(dumps(res.json(), indent=4))

def delete_lgas():
    print('\n Delete of LGAs\n')

    header = {'Content-Type': 'application/json'}
    res = requests.delete('http://localhost:4000/api/v1/admin/local_government/8055104e-f43f-4472-9655-1949f50cbc56/delete', headers=header)
    print(dumps(res.json(), indent=4))

def post_contacts():
    print('\n postt of contacts of LGAs\n')
    data = {
        "emergencyType": 'Medical', "emergencyNo": '12345566', "whatsappContact": "11111"
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/add_emergency_contacts/b329e011-f439-404a-aee0-7c3236b88239', json=data, headers=header)
    print(dumps(res.json(), indent=4))



def get_contacts():
    print('\n List of contacts of LGAs\n')

    header = {'Content-Type': 'application/json'}
    res = requests.get('http://localhost:4000/api/v1/admin/emergency_contacts/b329e011-f439-404a-aee0-7c3236b88239', headers=header)
    print(dumps(res.json(), indent=4))

def delete_contact():
    print('\n Delete of contact\n')

    header = {'Content-Type': 'application/json'}
    res = requests.delete('http://localhost:4000/api/v1/admin/emergency_contact/b9681e17-197f-470a-86fc-76b9bf026355/delete', headers=header)
    print(dumps(res.json(), indent=4))

if __name__ == "__main__":
    #post_states()
    #get_states()
    #post_lgas()
    #get_lgas()
    #delete_lgas()
    #post_contacts()
    delete_contact()
    get_contacts()
