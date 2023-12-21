const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

// Get all
router.get('/', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one
router.get('/:id', getTrip, (req, res) => {
  res.json(res.trip);
});

// Add one
router.post('/', async (req, res) => {
  console.log(req.body);
  const trip = new Trip(req.body);
  console.log('posting');
  try {
    const newTrip = await trip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// change one
router.patch('/:id', getTrip, async (req, res) => {
  try {
    deepMerge(res.trip, req.body);
    const updatedTrip = await res.trip.save();
    res.json(updatedTrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete one
router.delete('/:id', getTrip, async (req, res) => {
  try {
    await res.trip.remove();
    res.json({ message: 'Trip deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Self explanatory
async function getTrip(req, res, next) {
  let trip;
  try {
    trip = await Trip.findById(req.params.id);
    if (trip == null) {
      return res.status(404).json({ message: 'Trip not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.trip = trip;
  next();
}

// Target deeper in schema
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

module.exports = router;