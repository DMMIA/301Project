
import BookingComponent from './BookingComponent';

const myTrips = () => {
  const trips = [];

  return (
    <div>
      <h1>Trip Information</h1>
      <BookingComponent trips={trips} />
    </div>
  );
};

export default App;