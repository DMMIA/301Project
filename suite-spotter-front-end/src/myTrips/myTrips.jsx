
import BookingComponent from './BookingComponent';

const myTrips = () => {
  const trips = [  {
    tripId: 1,
    destination: 'New York',// hard code trips delete when we get the api from the backend
    checkInDate: '2023-01-01',
    checkOutDate: '2023-01-05',
    rooms: [
      { roomNumber: '101', reservationNumber: 'NY101R123' },
      { roomNumber: '102', reservationNumber: 'NY102R456' },
    ],
  },
  {
    tripId: 2,
    destination: 'San Francisco',
    checkInDate: '2023-02-01',
    checkOutDate: '2023-02-07',
    rooms: [
      { roomNumber: '201', reservationNumber: 'SF201R789' },
      { roomNumber: '202', reservationNumber: 'SF202R012' },
    ],
  },];

  return (
    <div>
      <h1>Trip Information</h1>
      <BookingComponent trips={trips} />
    </div>
  );
};

export default App;