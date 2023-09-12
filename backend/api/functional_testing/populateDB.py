#!/usr/bin/env python3
import requests
from json import dumps
from sys import argv


def post_states():
    
    data = {
        "stateName": [ 'Ogun', 'lAgos', 'AnAmbrA']
    }
    header = {'Content-Type': 'application/json'}
    res = requests.post('http://localhost:4000/api/v1/admin/add_states', json=data, headers=header)
    print(dumps(res.json(), indent=4))

def get_states():
    print('\n List of states\n')

    header = {'Content-Type': 'application/json'}
    res = requests.get('http://localhost:4000/api/v1/admin/get_states', headers=header)
    print(dumps(res.json(), indent=4))

if __name__ == "__main__":
    get_states()