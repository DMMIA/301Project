require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const carRoute = require('./routes/cars');
const planeRoute = require('./routes/planes');
const roomRoute = require('./routes/rooms');
const weatherRoute = require('./routes/cars');
const foodRoute = require('./routes/cars');
const locationRoute = require('./routes/location');

const { auth } = require('express-oauth2-jwt-bearer');
const { amadeus } = require('./auth/amadeus');

// mongoose.connect(process.env.MONGODB_URI);
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to db'));

const app = express();
app.use(cors());
app.use(express.json());

// const jwtCheck = auth({
//     audience: process.env.AUTH_AUDIENCE,
//     issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
//     tokenSigningAlg: process.env.AUTH_TOKEN_SIGNING_ALG,
// });

// app.use(jwtCheck);

app.use(async (req, res, next) => {
    req.amadeus = amadeus;
    next();
});

app.use('/location', locationRoute);
app.use('/cars', carRoute);
app.use('/planes', planeRoute);
app.use('/rooms', roomRoute);
// app.use('/weather', weatherRoute);
// app.use('/food', foodRoute);




const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server listening');
});

app.get('/marco', (req, res) => {
    res.send('Polo');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));