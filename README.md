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
| username| yes | max 36 characters | string |
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
  password: 'abdul',
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








