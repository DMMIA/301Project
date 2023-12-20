

import { Card, Row, Col } from 'react-bootstrap';

const BookingComponent = ({ trips }) => {
    return (
      <div>
        {trips.map((trip, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{trip.destination}</Card.Title>
              <Row>
                <Col md={4}>
                  <Card.Text>
                    {trip.hotel && (
                      <>
                        <strong>Hotel:</strong> {trip.hotel}
                        <br />
                        <strong>Check-in:</strong> {trip.checkInDate}
                        <br />
                        <strong>Check-out:</strong> {trip.checkOutDate}
                      </>
                    )}
                  </Card.Text>
                </Col>
                <Col md={4}>
                  <Card.Text>
                    {trip.carRental && (
                      <>
                        <strong>Car Rental:</strong> {trip.carRental}
                        <br />
                        <strong>Pick-up:</strong> {trip.carPickUpDate}
                        <br />
                        <strong>Drop-off:</strong> {trip.carDropOffDate}
                      </>
                    )}
                  </Card.Text>
                </Col>
                <Col md={4}>
                  <Card.Text>
                    {trip.planeTicket && (
                      <>
                        <strong>Plane Ticket:</strong> {trip.planeTicket}
                        <br />
                        <strong>Departure:</strong> {trip.departureDate}
                        <br />
                        <strong>Return:</strong> {trip.returnDate}
                      </>
                    )}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };
  
  export default BookingComponent;