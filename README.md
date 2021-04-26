# joot-take-home

#Routes: 
  ```
  - Customer -
      POST /customers/create
      GET /customers - list of customers
      GET /customers/{customerId}
      DELETE /customers/{customerId}/delete
      PUT /customers/{customerId}/update
  
  - Repair -
      GET /repairs 
      GET /repairs/{repairId}
      POST /repairs/{customerId}/create
      DELETE /repairs/{repairId}/{customerId}/delete
      PUT /repairs/{repairdId}/update
   
   - Inventory -
      GET /inventories 
      GET /inventories/{inventoryId}
      POST /inventories/{inventoryId}/create
      DELETE /inventories/{inventoryId}/delete
      PUT /inventories/{inventoryId}/update
  ```

#Run App 
  ```
    - git clone the joot-take-home repository
    - from root of folder, run npm install for dependencies
    - set the variable `dbUri` in app.js to `mongodb://127.0.0.1/{appName}` to run locally
    - run command `npm start` to run app locally 

    - Sample Data -
      Some sample data to test routes using Postman or similar tool 
      Paste below JSON snippets in Postman and select `raw` and `JSON` from the dropdown 
      
      - Customer - 
          {
            "name": {
                "firstName": "Bruce",
                "middleName": "",
                "lasName": "wayne"
            },
            "address": {
                "street": "batcave ave",
                "city": "gotham",
                "state": "ca",
                "zipCode": "71717"
            },
            "email": "bwayne@gmail.com",
            "phoneNumber": "6268887777"
          }
      
       - Repair - 
          {
            "bikeDetails": {
                "repairType": "tire",
                "bikeModel": "Mongoose"
            },
            "repairNotes": "need tire replacement",
            "rush": false
          }
          
       - Inventory -
          {
            "catagory": "part",
            "partDetails": {
                "manufacturer": "maxxis",
                "type": "dirt tire",
                "size": "20 inch"
            },
            "price": 1000
          }
  ```
