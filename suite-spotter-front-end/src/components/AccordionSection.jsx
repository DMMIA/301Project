import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarRental from './services/CarRental';
import Flight from './services/Flight';
import Hotel from './services/Hotel';
import Submission from './Submission';

export default function AccordionSection(props) {
  const [collectedData, setCollectedData] = useState({});

  const updateTrips = (serviceType, data) => {
    setCollectedData(prevData => ({
      ...prevData,
      [serviceType]: data,
    }));
    props.setTrip((prevTrip) => ({
      ...prevTrip,
      [serviceType]: data,
    }));
  }

  return (
    <Accordion defaultActiveKey="0" className="accordion-section app-section">
      <Row>
        <Col>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Hotel</Accordion.Header>
            <Accordion.Body>
              <Hotel
                updateTrips={(data) => updateTrips('hotel', data)}
                latitude={props.formData.locationData.lat}
                longitude={props.formData.locationData.long}
                guests={props.formData.guests}
                checkIn={props.formData.checkIn}
                checkout={props.formData.checkOut}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Col>
        <Col>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Flight</Accordion.Header>
            <Accordion.Body>
              <Flight
                formData={props.formData}
                updateFormData={props.updateFormData}
                updateTrips={(data) => updateTrips('flight', data)}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Car Rental</Accordion.Header>
            <Accordion.Body>
              <CarRental
                latitude={props.formData.locationData.lat}
                longitude={props.formData.locationData.long}
                iataCode={props.formData.locationData.iataCode}
                countryCode={props.formData.locationData.countryCode}
                guests={props.formData.guests}
                checkIn={props.formData.checkIn}
                updateTrips={(data) => updateTrips('carRental', data)}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Col>
        <Col>
        <Card>
            <Card.Header>
              <Card.Title>Trip</Card.Title>
            </Card.Header>
            <Card.Body>
              <Submission
                onClick={() => {
                  setCollectedData('')
                  props.resetData();
                }}
                formData={props.formData}
                updateFormData={props.updateFormData}
                tripData={props.tripData}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Accordion>
  );
}