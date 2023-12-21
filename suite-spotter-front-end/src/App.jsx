import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import MyTrips from './components/myTrips/MyTrips';
import About from './components/About';
import Activities from './components/ActivityPage/Activities';
import MyCalendar from './components/calendarPage/MyCalendar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const initialFormData = {
    locationData: '',
    guests: 1,
    checkIn: null,
    checkOut: null,
    airportData: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [tripData, setTripData] = useState({});
  const [tripList, setTripList] = useState([]);

  const updateFormData = (newFormData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newFormData,
    }));
  };

  const setTrip = (tripData) => {
    setTripData(tripData);
  }

  const resetData = () => {
    setFormData(initialFormData);
    setTripData({});
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main app-section">
          <Routes>
            <Route path="/" element={
              <Homepage
                formData={formData}
                updateFormData={updateFormData}
                setTrip={setTrip}
                tripData={tripData}
                resetData={resetData}
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
                setTripList={setTripList}
              />
            } />
            <Route path="/calendar" element={
              <MyCalendar
                tripList={tripList}
              />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
