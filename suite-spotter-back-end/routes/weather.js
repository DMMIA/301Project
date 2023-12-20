const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// router.get('/', async (req, res) => {
 async function weatherFunction (req, res) {
  console.log('made it inside weather function')
  console.log('request query', req.query)
  try {
    const { lat, lon, checkIn, checkOut } = req.query;
    const API_KEY = process.env.WEATHER_API_KEY;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const currentDate = new Date();
    const daysDifference = Math.floor((checkOutDate - currentDate) / (24 * 60 * 60 * 1000));

    let apiUrl;
    if (daysDifference <= 16) {
      apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${API_KEY}`;
    } else {
      checkInDate.setFullYear(checkInDate.getFullYear() - 1);
      checkOutDate.setFullYear(checkOutDate.getFullYear() - 1);
      const formattedCheckIn = formatDate(checkInDate);
      const formattedCheckOut = formatDate(checkOutDate);
      apiUrl = `https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${lon}&start_date=${formattedCheckIn}&end_date=${formattedCheckOut}&key=${API_KEY}`;
    }
    const response = await axios.get(apiUrl);
    console.log('weather response', response);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
 };
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// module.exports = router;
module.exports = weatherFunction;