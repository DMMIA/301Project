import { useState, useEffect } from 'react';
import BookingComponent from './BookingComponent';
import axios from 'axios';

const MyTrips = ({ setTripList }) => {
  const SERVER = import.meta.env.VITE_SERVER_URL;
  const [trips, setTrips] = useState([]);

  useEffect(() => {
   
    getTrips();
  }, []); 

  async function getTrips() {
    try {
      const response = await axios.get(`${SERVER}/trips`);
      setTrips(response.data);
      setTripList(response.data);
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