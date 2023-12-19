import { useState } from 'react'
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import axios from 'axios'
import Weather from './Weather';
import RestaurantList from './RestaurantList'
import Entertainment from './Entertainment'

const  Activities = (props) => {

  return (
    <Container className="mt-4">
      <h1>Local Information</h1>
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Weather</Card.Title>
              <Card.Text>
                <Weather />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Local Restaurants</Card.Title>
              <ListGroup variant="flush">
                <RestaurantList />
                <ListGroup.Item>Restaurant 1</ListGroup.Item>
                <ListGroup.Item>Restaurant 2</ListGroup.Item>
                <ListGroup.Item>Restaurant 3</ListGroup.Item>
              
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Entertainment</Card.Title>
              <ListGroup variant="flush">
              <Entertainment />
                <ListGroup.Item>Event 1</ListGroup.Item>
                <ListGroup.Item>Event 2</ListGroup.Item>
                <ListGroup.Item>Event 3</ListGroup.Item>
            
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activities;