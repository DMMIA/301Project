import BookingComponent from './BookingComponent'; // Adjust the path based on your actual file structure


const MyTrips = (props) => {
  
  return (
    <div>
      <h1>Trip Information</h1>
     <p>{JSON.stringify(props.trips)}</p>

    </div>
  );
};

export default MyTrips;