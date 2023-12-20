import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import MyTrips from './components/myTrips/MyTrips';
import About from './components/About';
import Activities from './components/ActivityPage/Activities';
import MyCalendar from './components/calendarPage/MyCalendar';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [locationData, setLocationData] = useState('');
  const [guests, setGuests] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [airportData, setAirportData] = useState(null);
  const [tripData, setTripData] = useState(null);

  const updateLocationData = (newLocationData) => {
    setLocationData(newLocationData);
  };

  const updateInputFormData = (formData) => {
    setGuests(formData.numberOfGuests);
    setCheckIn(formData.checkInDate);
    setCheckOut(formData.checkOutDate);
  };

  const updateAirportData = (newAirportData) => {
    setAirportData(newAirportData);
  };

  const setTrip = (tripData) => {
    setTripData(tripData);
  }

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={
            <Homepage
              updateLocationData={updateLocationData}
              updateInputFormData={updateInputFormData}
              updateAirportData={updateAirportData}
              locationData={locationData}
              guests={guests}
              checkIn={checkIn}
              checkOut={checkOut}
              airportData={airportData}
              setTrip={setTrip}
            />
          }
          />
          <Route path="/activities" element={
            <Activities
              updateLocationData={updateLocationData}
              updateInputFormData={updateInputFormData}
              updateAirportData={updateAirportData}
              locationData={locationData}
              guests={guests}
              checkIn={checkIn}
              checkOut={checkOut}
              airportData={airportData}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={
            <MyTrips
              updateLocationData={updateLocationData}
              updateInputFormData={updateInputFormData}
              updateAirportData={updateAirportData}
              locationData={locationData}
              guests={guests}
              checkIn={checkIn}
              checkOut={checkOut}
              airportData={airportData}
              tripData={tripData}
            />
          } />
          <Route path="/calendar" element={<MyCalendar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
