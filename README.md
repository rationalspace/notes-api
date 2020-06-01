## A simple POC using Express to write a CRUD API for Notes
### dependencies
**uuid** for generating unique id <br/>
**cors** for cross-origin request response <br/>
### code structure
***routes/*** - declare routes that are available with corresponding controller function <br/>
***controllers/*** - logic for implementing routes <br/>
***models/*** - define schema for note object <br/>
***config/*** - db related confid <br/>
***server-wo-db.js*** - CRUD operations in memory <br/>
### Usage
GET  http://localhost:8000/notes - gets all notes<br/>
GET http://localhost:8000/notes/2 - gets note with note id 2<br/>
POST http://localhost:8000/notes - add a note<br/>
Header Content-type: application/json <br/>
Body: {
	"title": "Work For Sunday"
    "content": "Clean the house, complete groceries"
}<br/>
DELETE http://localhost:8000/notes/2 - delete noted with id 2<br/>