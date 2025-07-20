const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const users = [];

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: 'User created' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ username }, 'secret');
    res.json({ token });
});

app.listen(3000, () => console.log('Auth service running on 3000'));