# agency-packs-ms

Servicio para el manejo de paquetes de viaje

### Uso de `.postman_collection.json`

Verificar la variable en la colección

- `api-url`: https://agency-packs-ms.herokuapp.com

### Endpoints

- ##### Create `POST` `/packs/`
  Request Body
  ```json
  {
      "title": "Test pack",
      "description": "Desc test",
      "price": 500000.00,
      "discount": 50,
      "country": "Colombia"
  }
  ```
  Response
  ```json
  {
      "_id": "61979fc0b80dfa1b0fd54a8f",
      "title": "Test pack",
      "description": "Desc test",
      "price": 500000.0,
      "isActive": true,
      "discount": 50,
      "country": "Colombia",
      "imageUrl": "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg",
      "createdAt": "2021-11-19T12:59:44.633+00:00",
      "modifiedAt": "2021-11-19T12:59:44.633+00:00"
  }
  ```



- ##### List `GET` `/packs/`
  Response
  ```json
  [
      {
          "_id": "61979cd8373b661dff5dd3c1",
          "title": "Test pack updated",
          "description": "Desc test",
          "price": 500000.0,
          "isActive": false,
          "discount": 50,
          "country": "Colombia",
          "imageUrl": "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg",
          "createdAt": "2021-11-19T12:47:20.767+00:00",
          "modifiedAt": "2021-11-19T13:20:14.662+00:00"
      },
      {
          "_id": "61979d33e08de07c579e99f2",
          "title": null,
          "description": null,
          "price": null,
          "isActive": true,
          "discount": 0,
          "country": null,
          "imageUrl": "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg",
          "createdAt": "2021-11-19T12:48:51.940+00:00",
          "modifiedAt": "2021-11-19T12:48:51.940+00:00"
      },
      {
          "_id": "61979eaf390c244342d111bc",
          "title": "Test pack3",
          "description": "Desc test",
          "price": 500000.0,
          "isActive": true,
          "discount": 50,
          "country": "Colombia",
          "imageUrl": "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg",
          "createdAt": "2021-11-19T12:55:11.535+00:00",
          "modifiedAt": "2021-11-19T12:55:11.535+00:00"
      }
  ]
  ```



- ##### Pack by ID `GET` `/packs/{_id}`
  Response
  ```json
  {
      "_id": "61979fc0b80dfa1b0fd54a8f",
      "title": "Test pack",
      "description": "Desc test",
      "price": 500000.0,
      "isActive": true,
      "discount": 50,
      "country": "Colombia",
      "imageUrl": "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg",
      "createdAt": "2021-11-19T12:59:44.633+00:00",
      "modifiedAt": "2021-11-19T12:59:44.633+00:00"
  }
  ```



- ##### Update `PUT` `/packs/{_id}`
  Request Body
  ```json
  {
      "title": "Test pack updated",
      "description": "Desc test",
      "price": 500000.0,
      "discount": 50,
      "country": "Colombia",
      "imageUrl": "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg"
  }
  ```
  Response
  ```json
  {
      "_id": "61979cd8373b661dff5dd3c1",
      "title": "Test pack updated",
      "description": "Desc test",
      "price": 500000.0,
      "isActive": true,
      "discount": 50,
      "country": "Colombia",
      "imageUrl": "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg",
      "createdAt": "2021-11-19T12:47:20.767+00:00",
      "modifiedAt": "2021-11-19T13:20:07.667+00:00"
  }
  ```



- ##### Update Pack Status `PUT` `/packs/{_id}/status`
  Request Body
  ```json
  {
      "isActive": false
  }
  ```
  Response
  ```json
  {
      "_id": "61979cd8373b661dff5dd3c1",
      "title": "Test pack updated",
      "description": "Desc test",
      "price": 500000.0,
      "isActive": false,
      "discount": 50,
      "country": "Colombia",
      "imageUrl": "https://cdn.pixabay.com/photo/2017/01/05/16/57/girl-1955797_960_720.jpg",
      "createdAt": "2021-11-19T12:47:20.767+00:00",
      "modifiedAt": "2021-11-19T13:20:14.662+00:00"
  }
  ```



- ##### Delete `DELETE` `/packs/{_id}`
