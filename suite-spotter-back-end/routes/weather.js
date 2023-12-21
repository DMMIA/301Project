const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const { latitude, longitude, checkIn, checkOut } = req.query;
    const API_KEY = process.env.WEATHER_API_KEY;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const currentDate = new Date();
    const daysDifference = Math.floor((checkOutDate - currentDate) / (24 * 60 * 60 * 1000));

    let apiUrl;
    if (Math.abs(daysDifference) <= 16) {
      apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${API_KEY}`;
    } else {
      checkInDate.setFullYear(checkInDate.getFullYear() - 1);
      checkOutDate.setFullYear(checkOutDate.getFullYear() - 1);
      const formattedCheckIn = formatDate(checkInDate);
      const formattedCheckOut = formatDate(checkOutDate);
      apiUrl = `https://api.weatherbit.io/v2.0/history/daily?lat=${latitude}&lon=${longitude}&start_date=${formattedCheckIn}&end_date=${formattedCheckOut}&key=${API_KEY}`;
    }
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).send("Error: " + error.response.data.error);
  }
});
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

module.exports = router;