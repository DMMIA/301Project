const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const amadeus = req.amadeus;
    const { city, lat, long } = req.query;
    const response = await amadeus.referenceData.locations.cities.get({
      keyword: city
    });
    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;