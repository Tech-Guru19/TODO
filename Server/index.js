const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URL)
    .then(() => console.log('Connected Successfully to MongoDB'))
    .catch(err => console.error('Connection Failed', err));


const serverPort = process.env.PORT || 5643

app.get('/', (req, res) => {
    res.json({ 'message': "I am running fine" })
})

app.listen(serverPort, () => {
    console.log(`Lift off!!! server is running at ${serverPort}`);
})