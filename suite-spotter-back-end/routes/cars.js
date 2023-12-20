const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const amadeus = req.amadeus;
    const { latitude, longitude, startPort, guests, checkIn, checkOut } = req.query;
    const body = {
      startLocationCode: "SEA",
      endAddressLine: "NA",

      endCountryCode: "US",
      endGeoCode: "47.6061,-122.335167",
      transferType: "PRIVATE",
      startDateTime: "2024-04-10T10:30:00",
      passengers: guests,
      passengerCharacteristics: []
    };
    for(let x in guests) {
      body.passengerCharacteristics.push({
        "passengerTypeCode": "ADT",
      });
    }
    const response = await amadeus.shopping.transferOffers.post(JSON.stringify(body));
    res.json(response.data.slice(0,10));
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

