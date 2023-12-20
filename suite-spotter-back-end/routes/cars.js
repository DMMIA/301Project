const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const amadeus = req.amadeus;
    const { latitude, longitude, iataCode, guests, checkIn, countryCode } = req.query;
    const body = {
      startLocationCode: iataCode,
      endAddressLine: "NA",
      endCountryCode: countryCode,
      endGeoCode: latitude + "," + longitude,
      transferType: "PRIVATE",
      startDateTime: checkIn + "T06:00:00",
      passengers: guests,
      passengerCharacteristics: []
    };
    for(let x in (guests - 1)) {
      body.passengerCharacteristics.push({
        "passengerTypeCode": "ADT",
      });
    }
    const response = await amadeus.shopping.transferOffers.post(JSON.stringify(body));
    console.log(body);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

