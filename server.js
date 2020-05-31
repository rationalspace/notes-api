import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

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
    const id = uuidv4();
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

app.listen(port, () => { console.log('We are live on ' + port); });