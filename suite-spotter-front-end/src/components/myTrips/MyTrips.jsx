import { useState} from 'react';
import BookingComponent from './BookingComponent';

const MyTrips = () => {
  const [trips, setTrips] = useState([]);

  const updateTrips = (newTrip) => {
    setTrips((prevTrips) => [...prevTrips, newTrip]);
  };

  const clearTrips = () => {
    setTrips([]);
  };

  return (
    <div>
      <h1>Trip Information</h1>
      <button onClick={clearTrips}>Clear Trips</button>
      <BookingComponent trips={trips} />
    </div>
  );
};

export default MyTrips;