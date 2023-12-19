const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { latitude, longitude, startPort, guests, checkIn, checkOut } = req.query;
    const amadeus = req.amadeus;
    const response = await amadeus.referenceData.locations.pointsOfInterest.get({
      latitude: latitude || 41.397158,
      longitude: longitude || 2.160873,
      radius: 1,
      categories: 'SIGHTS,NIGHTLIFE,RESTAURANT,SHOPPING'
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;