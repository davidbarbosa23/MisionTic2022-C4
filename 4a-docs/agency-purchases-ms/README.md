# agency-purchases-ms

Servicio para el manejo de paquetes de viaje

### Uso de `.postman_collection.json`

Verificar la variable en la colección

- `api-url`: https://agency-purchases-ms.herokuapp.com

### Endpoints

- ##### Create `POST` `/purchases/`
  Request Body
  ```json
  {
      "user": 1,
      "pack": "2",
      "total": "5000000.00",
      "buyer_id": 1,
      "buyer_card": 4111111111111111,
      "buyer_card_name": "Anita Perez",
      "buyer_card_due_date": "2023-10-08",
      "buyer_card_cvv": 111
  }
  ```
  Response
  ```json
  {
      "id": 4,
      "user": 1,
      "pack": "2",
      "total": "5000000.00",
      "buyer_id": 1,
      "buyer_card": 4111111111111111,
      "buyer_card_name": "Anita Perez",
      "buyer_card_due_date": "2023-10-08",
      "buyer_card_cvv": 111,
      "created_at": "2021-12-02T16:26:26.689084Z"
  }
  ```



- ##### List `GET` `/purchases/list/`
  Response
  ```json
  [
      {
          "id": 1,
          "user": 1,
          "pack": "2",
          "total": "5000000.00",
          "buyer_id": 1,
          "buyer_card": 4111111111111111,
          "buyer_card_name": "Anita Perez",
          "buyer_card_due_date": "2023-10-08",
          "buyer_card_cvv": 111,
          "created_at": "2021-11-26T23:48:48.235571Z"
      },
      {
          "id": 2,
          "user": 1,
          "pack": "61979cd8373b661dff5dd3c1",
          "total": "5000.00",
          "buyer_id": 1111,
          "buyer_card": 111111,
          "buyer_card_name": "pepe",
          "buyer_card_due_date": "2022-06-01",
          "buyer_card_cvv": 444,
          "created_at": "2021-11-30T01:13:42.383786Z"
      },
      {
          "id": 3,
          "user": 1,
          "pack": "61a8ecddb549c21b8b5f6aa3",
          "total": "100000.00",
          "buyer_id": 1010101010,
          "buyer_card": 4111111111111111,
          "buyer_card_name": "Pepito Perez",
          "buyer_card_due_date": "2023-10-08",
          "buyer_card_cvv": 111,
          "created_at": "2021-12-02T16:14:43.539024Z"
      }
  ]
  ```



- ##### Purchase by ID `GET` `/purchases/{id}`
  Response
  ```json
  {
      "id": 1,
      "user": 1,
      "pack": "2",
      "total": "5000000.00",
      "buyer_id": 1,
      "buyer_card": 4111111111111111,
      "buyer_card_name": "Anita Perez",
      "buyer_card_due_date": "2023-10-08",
      "buyer_card_cvv": 111,
      "created_at": "2021-11-26T23:48:48.235571Z"
  }
  ```



- ##### Purchase by User ID `GET` `/purchases/list/{userId}`
  Response
  ```json
  [
      {
          "id": 1,
          "user": 1,
          "pack": "2",
          "total": "5000000.00",
          "buyer_id": 1,
          "buyer_card": 4111111111111111,
          "buyer_card_name": "Anita Perez",
          "buyer_card_due_date": "2023-10-08",
          "buyer_card_cvv": 111,
          "created_at": "2021-11-26T23:48:48.235571Z"
      },
      {
          "id": 2,
          "user": 1,
          "pack": "61979cd8373b661dff5dd3c1",
          "total": "5000.00",
          "buyer_id": 1111,
          "buyer_card": 111111,
          "buyer_card_name": "pepe",
          "buyer_card_due_date": "2022-06-01",
          "buyer_card_cvv": 444,
          "created_at": "2021-11-30T01:13:42.383786Z"
      }
  ]
  ```