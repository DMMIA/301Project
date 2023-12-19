const express = require('express');
const axios = require('axios');
const router = express.Router();



router.get('/', async (req, res) => {
  try {
    const amadeus = req.amadeus;
    // const { latitude, longitude } = req.query;
    const latitude = 47.608013;
    const longitude = -122.335167;

    const response = await amadeus.referenceData.locations.hotels.byGeocode.get({
      latitude: latitude,
      longitude: longitude,
      ratings: '4,5'
    })
    const hotels = response.data;
    const hotelRooms = hotels.map(hotel => hotel.hotelId).join(',');
    const roomResponse = await amadeus.shopping.hotelOffersSearch.get({
      hotelIds: hotelRooms,
    });
    const rooms = roomResponse.data;
    res.json({ hotels, rooms });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;