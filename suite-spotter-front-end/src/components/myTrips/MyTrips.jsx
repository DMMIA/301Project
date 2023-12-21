import { useState, useEffect } from 'react';
import BookingComponent from './BookingComponent';
import axios from 'axios';

const MyTrips = ({ setTripList }) => {
  const SERVER = import.meta.env.VITE_SERVER_URL;
  const [trips, setTrips] = useState([]);

  useEffect(() => {
   
    getTrips();
  }, []); 

  const handleDeleteTrip = (index) => {
    // Create a new array without the deleted trip
    const updatedTrips = [...trips.slice(0, index), ...trips.slice(index + 1)];
    setTrips(updatedTrips);
    console.log(updatedTrips)
  };

  async function getTrips() {
    try {
      const response = await axios.get(`${SERVER}/trips`);
      setTrips(response.data);
      setTripList(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  // const clearTrips = () => {
  //   setTrips([]);
  // };

  return (
    <div>
      <h1>Trip Information</h1>
      {/* <button onClick={clearTrips}>Clear Trips</button>
      <button onClick={getTrips}>get Trips</button> */}
      <BookingComponent
        trips={trips}  onDeleteTrip={handleDeleteTrip}
        
      />
    </div>
  );
};

export default MyTrips;