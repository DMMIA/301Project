const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const amadeus = req.amadeus;
      const { startPort, endPort, guests, checkIn, checkOut } = req.query;
      const body = {
        originLocationCode: startPort || 'SYD',
        destinationLocationCode: endPort || 'BKK',
        departureDate: checkIn || '2024-01-01',
        adults: guests || 1,
        max: '20'
      };
      if(checkOut){
        body.returnDate = checkOut;
      };
      const response = await amadeus.shopping.flightOffersSearch.get(body);
      flights = response.data;
      res.json({ flights });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  module.exports = router;