const Amadeus = require('amadeus');
require('dotenv').config();

const clientId = process.env.DEUS_API_KEY;
const clientSecret = process.env.DEUS_API_SECRET;

const amadeus = new Amadeus({
  clientId: clientId,
  clientSecret: clientSecret,
});

module.exports = { amadeus };

