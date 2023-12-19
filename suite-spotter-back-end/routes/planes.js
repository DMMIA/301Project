const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const amadeus = req.amadeus;
      // const { latitude, longitude } = req.query;
      const response = await amadeus.shopping.flightOffersSearch.get({
        originLocationCode: 'SYD',
        destinationLocationCode: 'BKK',
        departureDate: '2023-12-30',
        adults: '2',
        max: '20'
      });
      flights = response.data;
      res.json({ flights });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  module.exports = router;