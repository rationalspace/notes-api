const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { uuid } = require('uuidv4')

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let notes = [
    {
      id: '1',
      title: 'Front-emd Notes',
    },
    {
      id: '2',
      title: 'Back-end Notes',
    },
];
   

app.get('/notes',(req,res) => {
    res.send(Object.values(notes));
});

app.get('/notes/:noteId',(req,res) =>{
    res.send(notes.find(note => note.id === req.params.noteId));
});

app.post('/notes',(req,res) =>{
    const id = uuid();
    const note = {
        id: id,
        title: req.body.title
    };
    notes.push(note);
    res.send(note);
});

app.put('/',(req,res) => {
    res.send('THIS is PUT METHOD');
});

app.delete('/notes/:noteId',(req,res) => {
    notes = notes.filter(note => note.id !== req.params.noteId);
    res.send(req.params.noteId);
});