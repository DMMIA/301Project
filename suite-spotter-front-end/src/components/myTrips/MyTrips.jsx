import { useState, useEffect } from 'react';
import BookingComponent from './BookingComponent';
import axios from 'axios';

const MyTrips = ({ formData, updateFormData, tripData, submitState, setSubmitState }) => {
  const SERVER = import.meta.env.VITE_SERVER_URL;
  
  const [trips, setTrips] = useState([]);
  const [submit, setSubmit] = useState(submitState);

  async function getTrips() {
    try {
      const response = await axios.get(`${SERVER}/trips`);
      setTrips(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  const clearTrips = () => {
    setTrips([]);
  };

  return (
    <div>
      <h1>Trip Information</h1>
      <button onClick={clearTrips}>Clear Trips</button>
      <button onClick={getTrips}>get Trips</button>
      <BookingComponent
        trips={trips}
      />
    </div>
  );
};

export default MyTrips;