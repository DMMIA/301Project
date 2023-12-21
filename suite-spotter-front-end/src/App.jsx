import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import MyTrips from './components/myTrips/MyTrips';
import About from './components/About';
import Activities from './components/ActivityPage/Activities';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [locationData, setLocationData] = useState(null);
  const [guests, setGuests] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [airportData, setAirportData] = useState(null);
  const [trips,setTrips] = useState([]);

  const updateLocationData = (newLocationData) => {
    setLocationData(newLocationData);
    updateTrips('location',newLocationData.display_name);
    
  };

  const updateInputFormData = (newGuests, newCheckIn, newCheckOut) => {
    setGuests(newGuests);
    setCheckIn(newCheckIn);
    setCheckOut(newCheckOut);
  };

  // Function to update airport data
  const updateAirportData = (newAirportData) => {
    setAirportData(newAirportData);
  };


const updateTrips = (key, value) =>  {
  const trip = trips[0] || {};
  trip[key]=value;
  setTrips([trip]) 
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
              updateTrips={updateTrips}
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
              trips={trips}
            />
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
