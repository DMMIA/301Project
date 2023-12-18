require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const carRoute = require('./routes/cars');
const planeRoute = require('./routes/cars');
const roomRoute = require('./routes/cars');
const weatherRoute = require('./routes/cars');
const foodRoute = require('./routes/cars');

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to db'));

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.use('/cars', carRoute);
app.use('/planes', planeRoute);
app.use('/rooms', roomRoute);
app.use('/weather', weatherRoute);
app.use('/food', foodRoute);

app.get('/', (req, res) => {
    res.send('Server listening');
});

app.get('/marco', (req, res) => {
    res.json(req.body);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));