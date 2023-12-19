const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {

  try {
    const city = req.query.city;
    const API_KEY = process.env.LOCATION_API_KEY;
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${city}&format=json`;
    const response = await axios.get(API);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;