
import { Card, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const BookingComponent = ({ trips }) => {
  console.log(trips[0])
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {trips.map((trip, index) => (
          <Accordion.Item key={index} eventKey={`${index}`}>
            <Accordion.Header>{trip.destination}</Accordion.Header>
            <Accordion.Body>
              {trip.hotelData && (

                <>
                  {/* <strong>Hotel:</strong> {trip.hotel}
<br /> */}
                  <strong>Beds:</strong> {trip.hotelData.beds}
                  <br />
                  <strong>Check-in:</strong> {trip.checkIn}
                  <br />
                  <strong>Check-out:</strong> {trip.checkOut}
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

                </>
              )}


            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};




export default BookingComponent;