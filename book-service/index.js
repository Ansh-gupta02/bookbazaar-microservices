const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let books = [];

app.post('/books', (req, res) => {
    books.push(req.body);
    res.json({ message: 'Book added' });
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(3001, () => console.log('Book service running on 3001'));