const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  locationData: {
    location: String,
    setFullLocation: String,
    lat: {
      type: Number,
      required: true,
    },
    long: {
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
    currency: String,
    flightNumber: String,
    startDate: Date,
    endDate: Date,
    duration: String,
  },
  carRentalData: {
    provider: String,
    description: String,
    imageURL: String,
    seats: Number,
    price: Number,
    currency: String,
  },
  hotelData: {
    beds: Number,
    price: Number,
    currency: String,
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