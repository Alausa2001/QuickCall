# QuickCall
This app can be a valuable tool for people who are looking for quick and easy access to emergency assistance. It can also help people to stay safe in an emergency situation. We are building this app for an hackathon

# API DOCUMENTATION
Documetation of the API endpoints for CargoLink

#### Base URL 
``` http://qcall.feranmi.tech/api/v1 ```

#### NOTE
1. Client-Server data transfer (parameters as used in this documentation) should be via the standard JSON format
2. For routes that require the Authorization header, if the token is incorrect or has expired, a 401 unauthorized error response is received.

## API ENDPOINTS

---
#### POST method:  /signup
---

##### Parameters: 
| fields | Required | No of characters| DataType|
| ---- | --- | --- | ---|
| firstName  | yes |  max 35| string |
| lastName  | yes | max 35 | string |
| password  | yes | between 8 - 15 characters| string |
| email | yes | max 100 characters | string |
| username| yes | max 35 characters | string |
| phoneNo1 | yes | max 14 characters | string |
| phoneNo2 | optional | max 14 characters | string |

##### Request
```
Method: POST
Path:   /api/v1/auth/signup
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  firstName: 'abdul',
  lastName: 'abdul',
  username: 'abdul',
  phoneNo1: '08160969769',
  email: 'oluwaferanmialausa2001@gmail.com',
  password: 'abdul1234',
  phoneNo2: '07019302484'
}
```


##### Response

```
{
    "status": "success",
    "newUser": {
        "userId": "4b156fd4-7b18-4e61-a189-84608801bf1f",
        "firstName": "abdul",
        "lastName": "abdul",
        "email": "oluwaferanmialausa2001@gmail.com",
        "username": "abdul",
        "phoneNo1": "08160969769",
        "phoneNo2": "07019302484",
        "updatedAt": "2023-09-11T14:55:57.618Z",
        "createdAt": "2023-09-11T14:55:57.618Z"
    }
}
```


---
#### POST method:  /signin
---

##### Parameters: 
| fields | Required | No of characters| DataType|
| ---- | --- | --- | ---|
| username  | yes |  max 35| string |
| password  | yes | 8 - 16 characters | string |


##### Request
```
Method: POST
Path:   /api/v1/auth/signin
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   { username: 'abdul', password: 'abdul1234' }
```

##### Response

```
{
    "status": "success",
    "user": {
        "userId": "4b156fd4-7b18-4e61-a189-84608801bf1f",
        "firstName": "abdul",
        "lastName": "abdul",
        "email": "oluwaferanmialausa2001@gmail.com",
        "username": "abdul",
        "phoneNo1": "08160969769",
        "phoneNo2": "07019302484",
        "createdAt": "2023-09-11T14:55:57.000Z",
        "updatedAt": "2023-09-11T14:55:57.000Z"
    }
}
```


---
#### POST method:  /profile/medical_information/submit
---

##### Parameters: 
| fields | Required | No of characters| DataType|
| ---- | --- | --- | ---|
| bloodType  | yes |  max 4 | string |
| genotype  | yes | max 4 | string |
| famDocContact  | optional | max 14 characters| string |
| medEmerContact | optional | - | array |
| allergies| optional | - | array |
| chronicConditions | optional | - | array |

Note: 

famDocContact = users' family doctor's contact

medEmerContact = contact of persons that can make medical decisions on users' behalf


##### Request

```
Method: POST
Path:   /api/v1/profile/medical_information/submit
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sdXdhZmVyYW5taWFsYXVzYTIwMDFAZ21haWwuY29tIiwiaWF0IjoxNjk0NDQ4MjA1LCJleHAiOjE2OTQ1MDIyMDV9.e_WcnjCKnEyfBg4OqlGw4t1tAlrFplYDQJpKIYJDx54',
  'Content-Type': 'application/json'
}
Body:   {
  bloodType: 'A+',
  genotype: 'AS',
  famDocContact: '020200000',
  "medEmerContact": [ "0200000" ],
  allergies: [ 'dust' ],
  chronicConditions: [ 'asthma' ]
}
```

##### Response

```
{
    "status": "success",
    "message": "medical profile created",
    "medInfo": {
        "medicalId": "bef83841-615b-4a12-86f0-d35eb4e992e0",
        "userId": "4b156fd4-7b18-4e61-a189-84608801bf1f",
        "bloodType": "A+",
        "genotype": "AS",
        "allergies": [
            "dust"
        ],
        "chronicConditions": [
            "asthma"
        ],
        "medEmerContact": [ "0200000" ],
        "famDocContact": "020200000",
        "updatedAt": "2023-09-11T16:03:25.553Z",
        "createdAt": "2023-09-11T16:03:25.553Z"
    }
}
```

---
#### GET method:  /profile/medical_information/
---

##### Request 

```
Method: GET
Path:   /api/v1/profile/medical_information
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sdXdhZmVyYW5taWFsYXVzYTIwMDFAZ21haWwuY29tIiwiaWF0IjoxNjk0NDQ4MjA1LCJleHAiOjE2OTQ1MDIyMDV9.e_WcnjCKnEyfBg4OqlGw4t1tAlrFplYDQJpKIYJDx54',
  'Content-Type': 'application/json'
}
Body:   {}
```

##### Response

```
{
    "status": "success",
    "medicalInformaton": {
        "medicalId": "4fc3d380-57a5-4106-a793-c7fce22b5109",
        "bloodType": "A+",
        "genotype": "AS",
        "allergies": [
            "dust"
        ],
        "chronicConditions": [
            "asthma"
        ],
         "medEmerContact": [ "0200000" ],
        "famDocContact": "020200000",
        "createdAt": "2023-09-11T15:59:42.000Z",
        "updatedAt": "2023-09-11T15:59:42.000Z",
        "userId": "4b156fd4-7b18-4e61-a189-84608801bf1f"
    }
}
```


---
#### PATCH method:  /profile/medical_information/update
---

##### Request

```
Method: PATCH
Path:   /api/v1/profile/medical_information/update
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sdXdhZmVyYW5taWFsYXVzYTIwMDFAZ21haWwuY29tIiwiaWF0IjoxNjk0NDQ4MjA1LCJleHAiOjE2OTQ1MDIyMDV9.e_WcnjCKnEyfBg4OqlGw4t1tAlrFplYDQJpKIYJDx54',
  'Content-Type': 'application/json'
}
Body:   {
  allergies: [ 'dust', 'pollen' ],
  chronicConditions: [ 'diabetes', 'hypertension' ]
}
```

##### Response

```
{
    "status": "success",
    "message": "medical information updated successfully"
}
```


---
#### PATCH method:  /profile/basic_information/update
---

##### Request

```
Method: PATCH
Path:   /api/v1/profile/basic_information/update
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sdXdhZmVyYW5taWFsYXVzYTIwMDFAZ21haWwuY29tIiwiaWF0IjoxNjk0NDQ4ODg2LCJleHAiOjE2OTQ1MDI4ODZ9.dK0wh5HDHNLPzTxcVlmWCrNvSzb3tdpy9MI60L4a4fk',
  'Content-Type': 'application/json'
}
Body:   { password: 'abdul1', username: 'abdul1' }
```


##### Response 

```
{
    "status": "success",
    "message": "profile updated successfully"
}
```

---
#### GET method:  /profile/basic_information
---


##### Request

```
Method: GET
Path:   /api/v1/profile/basic_information
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sdXdhZmVyYW5taWFsYXVzYTIwMDFAZ21haWwuY29tIiwiaWF0IjoxNjk0NDQ4ODg2LCJleHAiOjE2OTQ1MDI4ODZ9.dK0wh5HDHNLPzTxcVlmWCrNvSzb3tdpy9MI60L4a4fk',
  'Content-Type': 'application/json'
}
Body:   {}
```

##### Response

```
{
    "status": "success",
    "userInformation": {
        "userId": "4b156fd4-7b18-4e61-a189-84608801bf1f",
        "firstName": "abdul",
        "lastName": "abdul",
        "email": "oluwaferanmialausa2001@gmail.com",
        "username": "abdul1",
        "phoneNo1": "08160969769",
        "phoneNo2": "07019302484",
        "createdAt": "2023-09-11T14:55:57.000Z",
        "updatedAt": "2023-09-11T16:14:46.000Z"
    }
}
```

---
#### GET method:  /emergency/lat/lng/Medical = lat is the latitude, lng is the longitude, Medical here means that the type of emergency details needed (this can be replaced with fire or police)
---

##### Request

```
Method: GET
Path:   /api/v1/emergency/6.9234/3.8364/Medical
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sdXdhZmVyYW5taWFsYXVzYTIwMDFAZ21haWwuY29tIiwiaWF0IjoxNjk0OTY3Nzk3LCJleHAiOjE2OTUwMjE3OTd9.6MjRFAiJ6MmtHo-ZvJgjviSF8eBVkpO4KK1Hhk7mcIk',
  'Content-Type': 'application/json'
}
Body:   {}
```

##### Response
```
{
    "status": "success",
    "emergencyContacts": [
        {
            "contactId": "41d4856b-d0c1-4775-81fd-a0a3bc142429",
            "emergencyType": "medical",
            "emergencyNo": "12345566",
            "whatsappContact": "11111",
            "createdAt": "2023-09-17T16:19:56.000Z",
            "updatedAt": "2023-09-17T16:19:56.000Z",
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3"
        },
        {
            "contactId": "438e5bdf-f441-4ac4-a55d-ccce7ab5d501",
            "emergencyType": "Medical",
            "emergencyNo": "12345566",
            "whatsappContact": "11111",
            "createdAt": "2023-09-14T14:38:03.000Z",
            "updatedAt": "2023-09-14T14:38:03.000Z",
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3"
        },
        {
            "contactId": "be052f15-0a83-4182-b47f-1928236ee615",
            "emergencyType": "medical",
            "emergencyNo": "12345566",
            "whatsappContact": "11111",
            "createdAt": "2023-09-17T16:03:29.000Z",
            "updatedAt": "2023-09-17T16:03:29.000Z",
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3"
        },
        {
            "contactId": "f6e3e3e0-e87c-4ef4-a54e-4d2bc3bf4110",
            "emergencyType": "Medical",
            "emergencyNo": "12345566",
            "whatsappContact": "11111",
            "createdAt": "2023-09-14T14:38:24.000Z",
            "updatedAt": "2023-09-14T14:38:24.000Z",
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3"
        }
    ],
    "notablePeople": [
        {
            "notableId": "8b51d626-889a-4dc3-a373-e3cc62f2bb2d",
            "position": "Chief Medical Director, John Hopkins",
            "personName": "Khidr Rodiyah",
            "phoneNo": "091111111",
            "whatsappContact": "091xxxxxxx",
            "createdAt": "2023-09-17T16:19:56.000Z",
            "updatedAt": "2023-09-17T16:19:56.000Z",
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3"
        }
    ]
}
```


## Routes to populate database

---
POST method: /admin/add_states = To add new states into the database
---

##### Request curl

```
Method: POST
Path:   /api/v1/admin/add_states
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   { states: [ 'Ogun', 'lAgos', 'AnAmbrA' ] }
---
```

##### Response

```
{
    "status": "success",
    "message": "States added successfully",
    "statesDetails": [
        {
            "stateId": "ae6b4ac5-e75f-4b7b-814a-8fa7523fe7ab",
            "stateName": "ogun"
        },
        {
            "stateId": "7da09677-325b-4299-a8f3-2f0f0373e8b3",
            "stateName": "lagos"
        },
        {
            "stateId": "0d66fd4d-43e0-4d7f-8d5e-7a149a60e550",
            "stateName": "anambra"
        }
    ]
}
```


---
GET method: /admin/get_states: Returns a list of all states and their IDs
---

##### Request


```
Method: GET
Path:   /api/v1/admin/get_states
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
```

##### Response

```
{
    "status": "success",
    "states": [
        {
            "stateId": "0d66fd4d-43e0-4d7f-8d5e-7a149a60e550",
            "stateName": "anambra",
            "createdAt": "2023-09-14T13:21:39.000Z",
            "updatedAt": "2023-09-14T13:21:39.000Z"
        },
        {
            "stateId": "7da09677-325b-4299-a8f3-2f0f0373e8b3",
            "stateName": "lagos",
            "createdAt": "2023-09-14T13:21:39.000Z",
            "updatedAt": "2023-09-14T13:21:39.000Z"
        },
        {
            "stateId": "ae6b4ac5-e75f-4b7b-814a-8fa7523fe7ab",
            "stateName": "ogun",
            "createdAt": "2023-09-14T13:21:39.000Z",
            "updatedAt": "2023-09-14T13:21:39.000Z"
        }
    ]
}

```


---
POST method: /admin/add_local_governments = Adds local governments to a state
---

##### Request 

```
Method: POST
Path:   /api/v1/admin/add_local_governments
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  LGAs: [ 'Ijebu North', 'Abeokuta' ],
  stateId: 'ae6b4ac5-e75f-4b7b-814a-8fa7523fe7ab'
}
```

##### Response

```
{
    "status": "success",
    "message": "local government areas added successfully",
    "LGAsDetails": [
        {
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3",
            "LGAName": "ijebu north",
            "stateId": "ae6b4ac5-e75f-4b7b-814a-8fa7523fe7ab"
        },
        {
            "LGAId": "3834f40d-198c-4295-b5f4-079aadc96e73",
            "LGAName": "abeokuta",
            "stateId": "ae6b4ac5-e75f-4b7b-814a-8fa7523fe7ab"
        }
    ]
}
```

---
GET method: /:stateId/get_local_governments
---


##### Request


```
Method: GET
Path:   /api/v1/admin/ae6b4ac5-e75f-4b7b-814a-8fa7523fe7ab/get_local_governments
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
```

##### Response

```
{
    "status": "success",
    "LGAs": [
        {
            "LGAId": "3834f40d-198c-4295-b5f4-079aadc96e73",
            "LGAName": "abeokuta",
            "createdAt": "2023-09-14T13:49:48.000Z",
            "updatedAt": "2023-09-14T13:49:48.000Z",
            "stateId": "ae6b4ac5-e75f-4b7b-814a-8fa7523fe7ab"
        },
        {
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3",
            "LGAName": "ijebu north",
            "createdAt": "2023-09-14T13:49:48.000Z",
            "updatedAt": "2023-09-14T13:49:48.000Z",
            "stateId": "ae6b4ac5-e75f-4b7b-814a-8fa7523fe7ab"
        }
    ]
}
```

---
DELETE method: /admin/local_government/LGAId
---

##### Request

```
Method: DELETE
Path:   /api/v1/admin/local_government/3834f40d-198c-4295-b5f4-079aadc96e73/delete
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
```

##### Response

```
{
    "status": "success",
    "message": "Deleted abeokuta local government in ogun"
}
```

---
POST method: /admin/add_emergency_contacts/LGAId = adds an emergency contact details under a local government
---

##### Request

```
Method: POST
Path:   /api/v1/admin/add_emergency_contacts/d6eef2e1-b588-413d-8c0d-b59ebae36ee3
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  emergencyType: 'Medical',
  emergencyNo: '12345566',
  whatsappContact: '11111'
}
```

##### Response

```
{
    "status": "success",
    "message": "emergency contact details added successfully",
    "contact": {
        "contactId": "35cc4899-f3db-4a8f-9868-c2ea42502aac",
        "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3",
        "emergencyNo": "12345566",
        "emergencyType": "Medical",
        "whatsappContact": "11111",
        "updatedAt": "2023-09-14T14:23:40.743Z",
        "createdAt": "2023-09-14T14:23:40.743Z"
    }
}
```

---
GET method: /admin/emergency_contacts/LGAId - list all emergency contacts under a local governments
---

##### Request

```
Method: GET
Path:   /api/v1/admin/emergency_contacts/d6eef2e1-b588-413d-8c0d-b59ebae36ee3
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
```

##### Response

```
{
    "status": "success",
    "contacts": [
        {
            "contactId": "35cc4899-f3db-4a8f-9868-c2ea42502aac",
            "emergencyType": "Medical",
            "emergencyNo": "12345566",
            "whatsappContact": "11111",
            "createdAt": "2023-09-14T14:23:40.000Z",
            "updatedAt": "2023-09-14T14:23:40.000Z",
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3"
        }
    ]
}
```

---
DELETE method: /admin/emergency_contact/contactId
---


##### Request

```
Method: DELETE
Path:   /api/v1/admin/emergency_contact/35cc4899-f3db-4a8f-9868-c2ea42502aac/delete
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
```


##### Response

```
{
    "status": "success",
    "message": "contact deleted!"
}
```


---
POST method: /admin/add_notable_personality/LGAId - adds a notable personality under a local governmnet
---

##### Request

```
Method: POST
Path:   /api/v1/admin/add_notable_personality/d6eef2e1-b588-413d-8c0d-b59ebae36ee3
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {
  position: 'Chief Medical Director, John Hopkins',
  personName: 'Khidr Rodiyah',
  whatsappContact: '091xxxxxxx',
  phoneNo: '091111111'
}
```

##### Response

```
{
    "status": "success",
    "message": "Khidr Rodiyah's details added successfully"
}
```


---
GET method: /admin/notable_people/LGAId
---

##### Request

```
Method: GET
Path:   /api/v1/admin/notable_people/d6eef2e1-b588-413d-8c0d-b59ebae36ee3
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
```


##### Response

```
{
    "status": "success",
    "notablePeople": [
        {
            "notableId": "5e5ebc88-885f-4878-ac91-dd6a30a34d07",
            "position": "Chief Medical Director, John Hopkins",
            "personName": "Khidr Rodiyah",
            "phoneNo": "091111111",
            "whatsappContact": "091xxxxxxx",
            "createdAt": "2023-09-14T14:49:01.000Z",
            "updatedAt": "2023-09-14T14:49:01.000Z",
            "LGAId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3"
        }
    ]
}
```


---
DELETE method: /admin/notable_people/notableId
---


##### Request

```
Method: DELETE
Path:   /api/v1/admin/notable_people/5e5ebc88-885f-4878-ac91-dd6a30a34d07/delete
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   {}
```

##### Response

```
{
    "status": "success",
    "message": "deleted!"
}
```


































