import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarRental from './services/CarRental';
import Flight from './services/Flight';
import Hotel from './services/Hotel';

export default function AccordionSection(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Row>
        <Col>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Hotel</Accordion.Header>
            <Accordion.Body>
              <Hotel updateTrips={props.updateTrips}/>
            </Accordion.Body>
          </Accordion.Item>
        </Col>
        <Col>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Flight</Accordion.Header>
            <Accordion.Body>
              <Flight
                updateAirportData={props.updateAirportData}
                updateTrips={props.updateTrips}
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
              <CarRental updateTrips={props.updateTrips}/>
            </Accordion.Body>
          </Accordion.Item>
        </Col>
        <Col>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Content for Accordion Item #3
            </Accordion.Body>
          </Accordion.Item>
        </Col>
      </Row>
    </Accordion>
  );
}