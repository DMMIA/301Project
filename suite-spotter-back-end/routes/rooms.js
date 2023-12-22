const express = require('express');
const axios = require('axios');
const router = express.Router();



router.get('/', async (req, res) => {
  try {
    console.log('rooms');
    const amadeus = req.amadeus;
    const { latitude, longitude, guests, checkIn, checkOut, } = req.query;

    const response = await amadeus.referenceData.locations.hotels.byGeocode.get({
      latitude: latitude || 47.608013,
      longitude: longitude || -122.335167,
      ratings: '4,5'
    })
    const hotels = response.data;
    const hotelRooms = hotels.map(hotel => hotel.hotelId).join(',');
    const body = {
      hotelIds: hotelRooms,
      guests: guests || 1,
      bestRateOnly: false,
    };
    if (checkIn) {
      body.checkInDate = checkIn;
    }
    if (checkOut) {
      body.checkOutDate = checkOut;
    }
    const roomResponse = await amadeus.shopping.hotelOffersSearch.get(body);
    const rooms = roomResponse.data;
    res.json({ rooms });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;


