const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors())
app.use(express.json());
const mongoose = require('mongoose');
// require('./connection');

const serverPort = process.env.PORT || 5643

mongoose.connect(process.env.URL)
    .then(() => console.log('Connected Successfully to MongoDB'))
    .catch(err => console.error('Connection Failed', err));


app.get('/', (req, res) => {
    res.json({ 'message': "I am running fine" })
})

app.get('/test', async (req, res) => {
    const Test = mongoose.model('Test', new mongoose.Schema({ name: String }));
    await Test.create({ name: 'hello todo2026' });
    res.json({ message: 'saved Successfully!' });
})

app.listen(serverPort, () => {
    console.log(`Lift off!!! server is running at ${serverPort}`);
})