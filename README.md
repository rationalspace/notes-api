## A simple POC using Express to write a CRUD API for Notes
### dependencies
** uuid ** for generating unique id <br/>
** cors ** for cross-origin request response <br/>
### Usage
GET  http://localhost:8000/notes - gets all notes<br/>
GET http://localhost:8000/notes/2 - gets note with note id 2<br/>
POST http://localhost:8000/notes - add a note<br/>
Header Content-type: application/json <br/>
Body: {
	"title": "Work For Sunday"
}<br/>
DELETE http://localhost:8000/notes/2 - delete noted with id 2<br/>