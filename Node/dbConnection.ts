import {Connection,createConnection} from 'typeorm'

 export const  connection = createConnection({ "type": "mssql", 
"host": "localhost", 
"port": 1433, 
"username": "sa", 
"password": "Dhan1234!", 
"database": "testDb", 
"synchronize": true, 
"logging": false, 
"stream": false,
"options":{

  "cancelTimeout":15000,
  "encrypt":false

},"extra": {

    "trustServerCertificate": true

  }})
