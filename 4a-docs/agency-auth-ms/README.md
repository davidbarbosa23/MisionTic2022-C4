# agency-auth-ms

Servicio de autenticación y manejo de usuarios

## Características

- Existe un usuario superadministrador:
    - User: admin
    - pass: 123456
- La consulta a la lista de usuarios está restringida a un superadministrador
- La consulta de un usuario por ID, está restringida a un superadministrador o al usuario correspondiente al ID consultado
- En la respuesta del login se incluye el ID de usuario por separado para facilidad de uso en el front-end

### Uso de `.postman_collection.json`

Verificar las variables en la colección

- `api-url`: https://agency-auth-ms.herokuapp.com
- `token`: Definido después de login exitoso

### Endpoints

- ##### Login `POST` `/login/`
  Request Body
  ```json
  {
      "username": "admin",
      "password": "123456"
  }
  ```
  Response
  ```json
  {
      "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzNzM3ODI5NCwianRpIjoiZGE1ODgwMzg5NjVhNDVlNGI3OWI1YjgyY2ZjZjVmOTAiLCJ1c2VyX2lkIjoxfQ.8B5lXoY3ZyAz3PhwgQac_0cYRQuCFo24WZQMH1-zMWg",
      "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3MjkyNDk0LCJqdGkiOiJmNGQyM2FlMGVmNmM0M2VjOGI2OWMzYWE5YTE4YzU4ZCIsInVzZXJfaWQiOjF9.pyQH2O1hJyOfgxDEneOYWgOOfmuz1ehOvaaydK4K4EU",
      "id": 1
  }
  ```



- ##### Refresh Token `POST` `/refresh/`
  Request Body
  ```json
  {
      "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzNzM3ODI5NCwianRpIjoiZGE1ODgwMzg5NjVhNDVlNGI3OWI1YjgyY2ZjZjVmOTAiLCJ1c2VyX2lkIjoxfQ.8B5lXoY3ZyAz3PhwgQac_0cYRQuCFo24WZQMH1-zMWg"
  }
  ```
  Response
  ```json
  {
      "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3MjkyNjA1LCJqdGkiOiJlYTFjYzIyMmFlZTM0MTI2OGIyNDc0OTZmMWViYTY1ZiIsInVzZXJfaWQiOjF9.ZRGJ9KbCW_MGu78c6e9uhtW24dqsaYYDtWxitv9-40E"
  }
  ```



- ##### Create user (client) `POST` `/register/`
  Request Body
  ```json
  {
      "username": "johndoe3",
      "password": "123456",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@gmail.com"
  }
  ```
  Response
  ```json
  {
      "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzNzM3ODQ5MCwianRpIjoiM2RkNjQ4ZDY1Njk1NGY3ZGJjMTEwMDIwYzQ5ZWUxOWYiLCJ1c2VyX2lkIjozfQ.-Y2ZtC9tJvaIygg07E1OeWbig6LTZgbNsdvt2L7j8zM",
      "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3MjkyNjkwLCJqdGkiOiI2YmJjNzhkMTU2MjU0Mzc1OTZlNjNlOWRhNzgyMjM3ZSIsInVzZXJfaWQiOjN9.VUZdtjxr-KGRnv06yymF8JeP-Fmn-C1h59mimyg43sc",
      "id": 3
  }
  ```



- ##### List users `GET` `/user/`
  Headers
  ```curl
  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3MjkyNjA1LCJqdGkiOiJlYTFjYzIyMmFlZTM0MTI2OGIyNDc0OTZmMWViYTY1ZiIsInVzZXJfaWQiOjF9.ZRGJ9KbCW_MGu78c6e9uhtW24dqsaYYDtWxitv9-40E
  ```
  Response
  ```json
  [
      {
          "id": 1,
          "username": "admin",
          "is_admin": true,
          "first_name": "",
          "last_name": "",
          "email": "dev@dev.com",
          "country": null,
          "birth_day": null,
          "created_at": "2021-11-10T05:14:59.622588Z"
      },
      {
          "id": 2,
          "username": "johndoe",
          "is_admin": false,
          "first_name": "John",
          "last_name": "Doe",
          "email": "john@gmail.com",
          "country": null,
          "birth_day": null,
          "created_at": "2021-11-12T03:04:37.625032Z"
      },
      {
          "id": 3,
          "username": "johndoe3",
          "is_admin": false,
          "first_name": "John",
          "last_name": "Doe",
          "email": "john@gmail.com",
          "country": null,
          "birth_day": null,
          "created_at": "2021-11-19T03:21:29.843347Z"
      }
  ]
  ```



- ##### User by ID `GET` `/user/{id}`
  Headers
  ```curl
  Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3MjkyNjA1LCJqdGkiOiJlYTFjYzIyMmFlZTM0MTI2OGIyNDc0OTZmMWViYTY1ZiIsInVzZXJfaWQiOjF9.ZRGJ9KbCW_MGu78c6e9uhtW24dqsaYYDtWxitv9-40E
  ```
  Response
  ```json
  {
      "id": 1,
      "username": "admin",
      "is_admin": true,
      "first_name": "",
      "last_name": "",
      "email": "dev@dev.com",
      "country": null,
      "birth_day": null,
      "created_at": "2021-11-10T05:14:59.622588Z"
  }
  ```
