
import axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'


const BookingComponent = ({ trips, onDeleteTrip }) => {

  const SERVER = import.meta.env.VITE_SERVER_URL;

  const handleDeleteTrip = async (index) => {
    try {
      const tripToDelete = trips[index];
      const response = await axios.delete(`${SERVER}/trips/${tripToDelete._id}`);
      console.log('Deleted trip with ID:', tripToDelete._id);
      onDeleteTrip(index);
    } catch (error) {
      console.error('Error deleting trip:', error.message);
    }
  };

  return (
    <div>
      <Accordion defaultActiveKey="0">
        {trips.map((trip, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Accordion.Header>
              {trip.destination}

            </Accordion.Header>
            <Accordion.Body>
              {trip.hotelData && (

                <>

                  {trip.airportData && (
                    <>
                      <strong>Flight Number:</strong> {trip.airportData.flightNumber}
                      <br />
                      <strong>Departure:</strong> {trip.airportData.startDate}
                      <br />
                      <strong>Return:</strong> {trip.airportData.endDate}
                      <br />
                      <strong>From:</strong> {trip.airportData.startingAirport}
                      <strong>  Arrive:</strong> {trip.airportData.endingAirport}
                      <br />
                      <strong>Price</strong> {`${trip.airportData.price}${trip.airportData.currency}`}
                      <br />

                    </>
                  )}


                  {/* <strong>Hotel:</strong> {trip.hotel}
<br /> */}
                  <strong>Check-in:</strong> {trip.checkIn}
                  <br />
                  <strong>Check-out:</strong> {trip.checkOut}
                  <br />
                  <strong>Beds:</strong> {trip.hotelData.beds}
                  <br />
                  <strong>Price:</strong> {`${trip.hotelData.price} ${trip.hotelData.currency}`}
                  <br />

                  {trip.carRentalData && (
                    <>
                      <strong>Car Rental:</strong> {trip.carRentalData.provider}
                      <br />
                      <strong>Pick-up:</strong> {trip.carPickUpDate}
                      <br />
                      <strong>Drop-off:</strong> {trip.carDropOffDate}
                      <br />
                      <img src={trip.carRentalData.imageURL} />
                      <br />
                    </>
                  )}


                </>
              )}

              <Button variant="danger" onClick={() => handleDeleteTrip(index)}>
                Delete
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};




export default BookingComponent;