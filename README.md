# QuickCall
This app can be a valuable tool for people who are looking for quick and easy access to emergency assistance. It can also help people to stay safe in an emergency situation. We are building this app for an hackathon

# API DOCUMENTATION
Documetation of the API endpoints for QuickCall

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
| password  | yes | between 8 - 15 characters| string |
| username| yes | max 35 characters | string |

##### Request
```
Method: POST
Path:   /api/v1/auth/signup
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   { username: 'abdul', password: 'abdul' }
```


##### Response

```
{
    "status": "success",
    "newUser": {
        "userId": "b37910c9-9387-4d5b-bd6b-8e88e13a69ba",
        "username": "abdul",
        "updatedAt": "2023-09-18T12:51:32.845Z",
        "createdAt": "2023-09-18T12:51:32.845Z"
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
        "userId": "b37910c9-9387-4d5b-bd6b-8e88e13a69ba",
        "firstName": null,
        "lastName": null,
        "email": null,
        "username": "abdul",
        "phoneNo1": null,
        "phoneNo2": null,
        "age": null,
        "gender": null,
        "nameOfEmerContact": null,
        "relationship": null,
        "emergencyPhoneNo": null,
        "createdAt": "2023-09-18T12:51:32.000Z",
        "updatedAt": "2023-09-18T12:51:32.000Z"
    }
}
```

---
#### POST method:  /profile/create
---

##### Parameters: 
| fields | Required | No of characters| DataType|
| ---- | --- | --- | ---|
| firstName  | yes |  max 35| string |
| lastName  | yes | max 35 | string |
| email | yes | max 100 characters | string |
| phoneNo1 | yes | max 14 characters | string |
| gender  | yes| max 10| string |
| age | optional | max 5 | string |
|nameOfEmerContact| optional | max 100 | string |
| relationship| optional | max 100 | string |
| emergencyPhoneNo | optional | max 14 | string |
| phoneNo2 | optional | max 14 characters | string |

nameOfEmerContact = name of someone that can make emergency decisions on users' behalf
emergencyPhoneNo = phone no of someone that can make emergency decisions on users' behalf
relationship = relationhip with the person

##### Request
```
Method: POST
Path:   /api/v1/profile/create
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsIiwiaWF0IjoxNjk1MDQxNDkyLCJleHAiOjE2OTUwOTU0OTJ9.bGitozX2nOQiIam7Z5WkQgtFMI_xO6jHhT_pTjHzMJc',
  'Content-Type': 'application/json'
}
Body:   {
  firstName: 'Wale',
  lastName: 'Adenuga',
  phoneNo1: '08160969769',
  age: '22',
  gender: 'male',
  nameOfEmerContact: 'badaru basirah',
  relationship: 'wifey',
  emergencyPhoneNo: '090XXXXXXX',
  email: 'oluwaferanmialausa2001@gmail.com',
  phoneNo2: '07019302484'
}
```

##### Response

```
{
    "status": "success",
    "message": "profile created successfully"
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
| allergies| optional | - | array |
| chronicConditions | optional | - | array |

Note: 

famDocContact = users' family doctor's contact



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
   "nearby_places": [
        {
            "user_ratings_total": 0,
            "vicinity": "39,Adeola Odutola College Road",
            "lat": 6.8299226,
            "lng": 3.9164152,
            "name": "Jolaolu Medical Centre",
            "opening_hours": {
                "open_now": true
            }
        },
        {
            "user_ratings_total": 0,
            "vicinity": "RXQ8+P9F, Erunwon",
            "lat": 6.839311299999999,
            "lng": 3.9659159,
            "name": "Erunwon Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "2Q57+3V9, Bale",
            "lat": 7.007651000000001,
            "lng": 3.7647455,
            "name": "Imagbon Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "WP2X+2X2, Irolu",
            "lat": 6.899999999999999,
            "lng": 3.749899999999999,
            "name": "Irolu Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "VPX5+43G, Ilishan-Remo",
            "lat": 6.8978063,
            "lng": 3.707687,
            "name": "Ilisan II Health Clinic",
            "opening_hours": {}
        },
        {
            "user_ratings_total": 0,
            "vicinity": "2P7M+HX6, Ogunti",
            "lat": 7.0139,
            "lng": 3.7349,
            "name": "Iyankan Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "WQ5C+V9J, Araromi Ake",
            "lat": 6.9097,
            "lng": 3.7709,
            "name": "Ijebu-Ijesha Health Clinic"
        },
        {
            "user_ratings_total": 2,
            "vicinity": "VPR9+H84, Ikenne-Isara Road, Ilishan-Remo",
            "lat": 6.891392,
            "lng": 3.7183255,
            "name": "Medical Diagnostics Center"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "XP7F+6VP, Akaka",
            "lat": 6.9631,
            "lng": 3.7247,
            "name": "Akaka Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "VP87+23G, Ikenne",
            "lat": 6.8650737,
            "lng": 3.712695399999999,
            "name": "Itunmoro Health Clinic",
            "opening_hours": {}
        },
        {
            "user_ratings_total": 0,
            "vicinity": "VV8P+56C, Road, Imodi",
            "lat": 6.865515299999999,
            "lng": 3.8855121,
            "name": "Ataye\u1e63e Health Club of Imodi - Ijebu",
            "opening_hours": {}
        },
        {
            "user_ratings_total": 0,
            "vicinity": "VX24+CFQ, Ogbogbo",
            "lat": 6.8510882,
            "lng": 3.9562197,
            "name": "Gbogojari Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "RX38+QC6, Ijebu Ode",
            "lat": 6.804399999999999,
            "lng": 3.966,
            "name": "Ilese Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "XRCJ+VXJ, Ishamuro",
            "lat": 6.9722,
            "lng": 3.8324,
            "name": "Ishamuro Health Centre"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "RQW9+XG3, Odogbolu",
            "lat": 6.8473988,
            "lng": 3.7687895,
            "name": "Odogbolu 1 Community Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "RW99+5H2, Ijebu Ode",
            "lat": 6.8179985,
            "lng": 3.9189292,
            "name": "Imupa.Iyanro Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "VR37+XJP, Okun-Owa",
            "lat": 6.8551248,
            "lng": 3.8140777,
            "name": "Okun-Owa Health Clinic",
            "opening_hours": {}
        },
        {
            "user_ratings_total": 0,
            "vicinity": "WWPC+GQ4, Ago-Iwoye",
            "lat": 6.936254399999999,
            "lng": 3.9219553,
            "name": "Oke-Odo Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "RWPV+V3P, Ijebu Ode",
            "lat": 6.8372157,
            "lng": 3.9427095,
            "name": "Igbala Health Clinic"
        },
        {
            "user_ratings_total": 0,
            "vicinity": "WWXV+RH2, Oru",
            "lat": 6.9495,
            "lng": 3.9439,
            "name": "Oru Health Centre"
        }
    ],
     "emergencyTips": [
        {
            "tipId": "916c6abe-ed95-4f77-8428-ad726785627f",
            "category": "medical",
            "title": "Medical Tip 1",
            "description": "Description of medical tip 1.",
            "createdAt": "2023-09-20T11:17:23.000Z",
            "updatedAt": "2023-09-20T11:17:23.000Z"
        }
    ]
}
```

---
POST method: /emergency/feedback = To give feedback on a service
---

##### Request
```
Method: POST
Path:   /api/v1/emergency/feedback
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlF1aWNrY2FsbCIsImlhdCI6MTY5NTU0OTM4NCwiZXhwIjoxNjk1NjAzMzg0fQ.K-Q3FnetMhcVXuzaB-nGwmGommY47yq_u-d34_Dgz9M',
  'Content-Type': 'application/json'
}
Body:   {
  comment: 'The man said and I said, he said and I said she said and I said we said and I said. Thank you, I love quickcall. The best emergency app',
  emergencyType: 'Fire',
  emergencyContact: '099',
  rating: 2,
  location: 'Ibadan North'
}
```

##### Response

```
{
    "status": "success",
    "message": "Feedback sent",
    "feedback": {
        "feedbackId": "0104d5a1-fda7-47c3-bc56-395af8c81b56",
        "comment": "The man said and I said, he said and I said she said and I said we said and I said. Thank you, I love quickcall. The best emergency app",
        "emergencyType": "Fire",
        "emergencyContact": "099",
        "userId": "ab270f3c-d3a7-4061-8968-3a6039413649",
        "username": "Quickcall",
        "location": "ibadan north",
        "rating": 2,
        "updatedAt": "2023-09-24T09:56:26.888Z",
        "createdAt": "2023-09-24T09:56:26.888Z"
    }
}
```

---
GET method: /emergency/my_feedbacks = For users' to retrieve their previous feedbacks
---

##### Request

```
Method: GET
Path:   /api/v1/emergency/my_feedbacks
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiZHVsIiwiaWF0IjoxNjk1MTI2NTEyLCJleHAiOjE2OTUxODA1MTJ9.Bc2mdFk_24xY-1MQC2mYZiWCsAINjA3eDKPjwhNbb3M',
  'Content-Type': 'application/json'
}
Body:   {}
```

##### Response
```
{
    "status": "success",
    "feedbacks": [
        {
            "feedbackId": "1b425d3d-1d4d-4256-b7a4-f171b59362d9",
            "username": "abdul",
            "emergencyType": "Medical",
            "comment": "The man said and I said, he said and I said she said and I said we said and I said. Thank you, I love quickcall. The best emergency app",
            "emergencyContact": "09999",
            "createdAt": "2023-09-19T11:48:30.000Z",
            "updatedAt": "2023-09-19T11:48:30.000Z",
            "userId": "b37910c9-9387-4d5b-bd6b-8e88e13a69ba"
        },
        {
            "feedbackId": "757b269a-4d23-4901-bbbb-94e717d0c3e1",
            "username": "abdul",
            "emergencyType": "Medical",
            "comment": "The man said and I said, he said and I said she said and I said we said and I said. Thank you, I love quickcall. The best emergency app",
            "emergencyContact": "09999",
            "createdAt": "2023-09-19T12:28:32.000Z",
            "updatedAt": "2023-09-19T12:28:32.000Z",
            "userId": "b37910c9-9387-4d5b-bd6b-8e88e13a69ba"
        },
        {
            "feedbackId": "cbc87a04-6a95-4647-b9c9-ccd1dc44c9f9",
            "username": "abdul",
            "emergencyType": "Medical",
            "comment": "The man said and I said, he said and I said she said and I said we said and I said. Thank you, I love quickcall. The best emergency app",
            "emergencyContact": "09999",
            "createdAt": "2023-09-19T12:02:52.000Z",
            "updatedAt": "2023-09-19T12:02:52.000Z",
            "userId": "b37910c9-9387-4d5b-bd6b-8e88e13a69ba"
        }
    ]
}
```


## ADMIN
## Routes to populate database

---
GET method: /admin/signin = admin signin
---

##### Request
```
Method: POST
Path:   /api/v1/admin/signup
Headers:   { Authorization: undefined, 'Content-Type': 'application/json' }
Body:   { username: 'Quickcall', password: 'Quickcall' }
```

##### Response

```
{
    "status": "success",
    "admin": {
        "AdminId": "d6e6cea4-f51e-47c5-ae7a-539e6584c500",
        "username": "Quickcall",
        "createdAt": "2023-09-20T09:17:46.000Z",
        "updatedAt": "2023-09-20T09:17:46.000Z"
    }
}
```

---
POST method: /admin/add_states = To add new states into the database
---

##### Request curl

```
Method: POST
Path:   /api/v1/admin/add_states
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers: { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
Body:   {}
```

##### Response

```
{
    "status": "success",
    "message": "deleted!"
}
```


---
GET method: /admin/feedbacks/:startDate/:endDate = To get all feedbacks received between the time range specified
---

##### Request

```
Method: GET
Path:   /api/v1/admin/feedbacks/2023-07-15/2023-09-20
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
Body:   {}
```


##### Response

```
{
    "status": "success",
    "feedbacks": [
        {
            "feedbackId": "3c22bf59-56d8-40ab-9945-5500b668b232",
            "username": "",
            "emergencyType": "Medical",
            "comment": "The man said and I said, he said and I said she said and I said we said and I said. Thank you, I love quickcall. The best emergency app",
            "emergencyContact": "09999",
            "createdAt": "2023-09-19T11:25:20.000Z",
            "updatedAt": "2023-09-19T11:25:20.000Z",
            "userId": "b37910c9-9387-4d5b-bd6b-8e88e13a69ba"
        },
        {
            "feedbackId": "757b269a-4d23-4901-bbbb-94e717d0c3e1",
            "username": "abdul",
            "emergencyType": "Medical",
            "comment": "The man said and I said, he said and I said she said and I said we said and I said. Thank you, I love quickcall. The best emergency app",
            "emergencyContact": "09999",
            "createdAt": "2023-09-19T12:28:32.000Z",
            "updatedAt": "2023-09-19T12:28:32.000Z",
            "userId": "b37910c9-9387-4d5b-bd6b-8e88e13a69ba"
        }
    ]
}
```



---
POST: /admin/add_emergency_tips: To upload emergency tips. Receives an array of different tips. 
---
##### Request

```
Method: POST
Path:   /api/v1/admin/add_emergency_tips
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlF1aWNrY2FsbCIsImlhdCI6MTY5NTIyNjgxNSwiZXhwIjoxNjk1MjgwODE1fQ.hllRgKXnULRKdoFQI7hJUb74zch2Stc1fJq1w_FcmJs',
  'Content-Type': 'application/json'
}
Body:   {
  tips: [
    {
      "category": "police",
      "title": "Police Tip 1",
      "description": "Description of police tip 1.",
    }
  ]
}
```

##### Rssponse

```
{
    "status": "success",
    "message": "Emergency tips added successfully",
    "tipDetails": [
        {
            "tipId": "e2c9deb5-0061-4ece-a91f-8d8f4eac7f67",
            "category": "police",
            "title": "Police Tip 1",
            "description": "Description of police tip 1.",
            "updatedAt": "2023-09-20T16:20:15.938Z",
            "createdAt": "2023-09-20T16:20:15.938Z"
        }
    ]
}
```

---
GET: /admin/emergency_tips - Returns a list of all uploaded tips in the database
---

##### Request

```
Method: GET
Path:   /api/v1/admin/emergency_tips
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlF1aWNrY2FsbCIsImlhdCI6MTY5NTIyNjgxNSwiZXhwIjoxNjk1MjgwODE1fQ.hllRgKXnULRKdoFQI7hJUb74zch2Stc1fJq1w_FcmJs',
  'Content-Type': 'application/json'
}
Body:   {}
```


##### Response

```
{
    "status": "success",
    "tips": [
        {
            "tipId": "2c4d899a-0931-4bbc-a533-95fd6a717bf7",
            "category": "fire",
            "title": "Fire Safety Tip 1",
            "description": "Description of fire safety tip 1.",
            "createdAt": "2023-09-20T15:56:00.000Z",
            "updatedAt": "2023-09-20T15:56:00.000Z"
        },
        {
            "tipId": "d61f68d6-4f97-43a7-8872-33df68172a33",
            "category": "medical",
            "title": "Medical Tip 1",
            "description": "Description of medical tip 1.",
            "createdAt": "2023-09-20T16:03:10.000Z",
            "updatedAt": "2023-09-20T16:03:10.000Z"
        },
        {
            "tipId": "e2c9deb5-0061-4ece-a91f-8d8f4eac7f67",
            "category": "police",
            "title": "Police Tip 1",
            "description": "Description of police tip 1.",
            "updatedAt": "2023-09-20T16:20:15.938Z",
            "createdAt": "2023-09-20T16:20:15.938Z"
        }
    ]
}
```


---
DELETE: /admin/emergency_tip/tipId - To Delete an already uploaded tip
---

##### Request

```
Method: DELETE
Path:   /api/v1/admin/emergency_tip/2b41eed9-771d-41d0-96c0-bb1f6d20f1b1/delete
Headers:   {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlF1aWNrY2FsbCIsImlhdCI6MTY5NTIyNjgxNSwiZXhwIjoxNjk1MjgwODE1fQ.hllRgKXnULRKdoFQI7hJUb74zch2Stc1fJq1w_FcmJs',
  'Content-Type': 'application/json'
}
Body:   {}
```

##### Response

```
{
    "status": "not found",
    "message": "emergency tip not found, invalid id"
}
```




---
POST method: /admin/add_notable_personality/state/stateId - adds a notable personality under a state
---

##### Request

```
Method: POST
Path:   /api/v1/admin/add_notable_personality/state/d6eef2e1-b588-413d-8c0d-b59ebae36ee3
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
GET method: /admin/notable_people/state/stateId
---

##### Request

```
Method: GET
Path:   /api/v1/admin/notable_people/state/d6eef2e1-b588-413d-8c0d-b59ebae36ee3
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
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
            "stateId": "d6eef2e1-b588-413d-8c0d-b59ebae36ee3"
        }
    ]
}
```


---
DELETE method: /admin/notable_people/state/notableId
---


##### Request

```
Method: DELETE
Path:   /api/v1/admin/notable_people/state/5e5ebc88-885f-4878-ac91-dd6a30a34d07/delete
Headers:   { Authorization: token, 'Content-Type': 'application/json' }
Body:   {}
```

##### Response

```
{
    "status": "success",
    "message": "deleted!"
}
```

























