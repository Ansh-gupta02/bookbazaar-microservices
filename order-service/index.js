const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

app.get('/', (req, res) => {
  res.send("📦 Order Service is Running");
});

app.post('/orders', (req, res) => {
    orders.push(req.body);
    res.json({ message: 'Order placed' });
});

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(3002, () => console.log('Order service running on 3002'));