## Description:
Use Express to create APIs for creating, adding, fetching, updating & deleting notes.<br/>
You can either use a backend in mongodb or simply store objects in memory for simplicity <br/>
### Dependencies
**uuid** for generating unique id <br/>
**cors** for cross-origin request response <br/>
**mongo** for mongodb integration <br/>
1. `>>>npm install --save express body-parser jsonwebtoken uuidv4 cors`
2. `>>>npm install mongodb --save `
3. `>>>npm install mongoose`
### Code Structure
1. routes/ - declare routes that are available with corresponding controller function <br/>
2. controllers/ - logic for implementing routes <br/>
3. models/ - define schema for note object <br/>
4. config/ - db related config <br/>
5. server-wo-db.js - In-Memory implementation of CRUD operations <br/>
### Usage
GET  http://localhost:8000/notes - gets all notes<br/>
GET http://localhost:8000/notes/2 - gets note with note id 2<br/>
POST http://localhost:8000/notes - add a note<br/>
    `Header Content-type: application/json` <br/>
    `Body: {
        "title": "Work For Sunday"
        "content": "Clean the house, complete groceries"
    }`<br/>
DELETE http://localhost:8000/notes/2 - delete noted with id 2<br/>
PUT http://localhost:8000/notes/5ed51f618429e0992eba7747 - update a particular note <br/>
  `Header Content-type: application/json` <br/>
    `Body: {
        "title": "Work For Sunday"
        "content": "Wash clothes"
    }`<br/>