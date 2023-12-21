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
  const [formData, setFormData] = useState({
    locationData: '',
    guests: 1,
    checkIn: null,
    checkOut: null,
    airportData: '',
  });
  const [tripData, setTripData] = useState('');

  const updateFormData = (newFormData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newFormData,
    }));
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
              formData={formData}
              updateFormData={updateFormData}
              setTrip={setTrip}
              tripData={tripData}
            />
          }
          />
          <Route path="/activities" element={
            <Activities
              formData={formData}
              updateFormData={updateFormData}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={
            <MyTrips
              formData={formData}
              updateFormData={updateFormData}
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
