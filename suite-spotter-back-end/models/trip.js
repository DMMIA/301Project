const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  locationData: {
    type: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
      iataCode: {
        type: String,
        required: true,
      },
      countryCode: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  airportData: {
    startingAirport: String,
    endingAirport: String,
    price: Number,
    flightNumber: String,
    startDate: Date,
    endDate: Date,
  },
  carRentalData: {
    provider: String,
    seats: Number,
    price: Number,
  },
  hotelData: {
    beds: Number,
    price: Number,
  },
  restaurantData: {
    name: String,
    tags: [String],
  },
  entertainmentData: {
    name: String,
    tags: [String],
  },
});

module.exports = mongoose.model('Trip', tripSchema);