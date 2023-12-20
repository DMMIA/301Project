/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Weather from './Weather';
import RestaurantList from './RestaurantList';
import Entertainment from './Entertainment';

const SERVER = import.meta.env.VITE_SERVER_URL


const Activities = ( props ) => {
  const { locationData } = props.location.state || {};
  const { lat, long } = locationData || {};

  const [weatherData, setWeatherData] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);
  const [entertainmentData, setEntertainmentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResponse = await axios.get(`${SERVER}/weather`);
        console.log('Weather Response:', weatherResponse.data);
        setWeatherData(weatherResponse.data);

        const restaurantResponse = await axios.get(`${SERVER}/food`);
        console.log('food Response:', restaurantResponse.data)
        setRestaurantData(restaurantResponse.data);

        const entertainmentResponse = await axios.get(`${SERVER}/poi`);
        console.log('entertainment response:', entertainmentResponse.data)
        setEntertainmentData(entertainmentResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [long, lat]);


  async function getWeatherFromSearch(long, lat) {
    const localApi = `${SERVER}`;
    console.log('local API', localApi);
    const response = await axios.get(`${localApi}/weather?lon=${long}&lat=${lat}&searchQuery=${searchQuery}`);
    console.log(response, 'weather response');
    setWeatherData(response);

  }

  async function getRestaurantFromSearch(searchQuery) {
    try {
      const localApi = `${SERVER}`;
      const response = await axios.get(`${localApi}/food?searchQuery=${searchQuery}`);
      console.log('API Response for Restaurants:', response.data);
      const restaurantData = response.data;

      setRestaurantData(restaurantData.map((restaurant, index) => ({ ...restaurant, id: index })));
      console.log('movie data', response.data);
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
    }
  }

  async function getEntertainmentFromSearch(searchQuery) {
    try {
      const localApi = `${SERVER}`;
      const response = await axios.get(`${localApi}/poi?searchQuery=${searchQuery}`);
      console.log('API Response for Restaurants:', response.data);
      const entertainmentData = response.data;

      setEntertainmentData(entertainmentData.map((entertainment, index) => ({ ...entertainment, id: index })));
      console.log('entertainment data', response.data);
    } catch (error) {
      console.error('Error fetching entertainment data:', error.message);
    }
  }


  return (
    <Container className="mt-4">
      <h1>Local Information</h1>
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>

              <Card.Title>Weather</Card.Title>
              <Card.Text>
                <Weather weatherData={weatherData} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Local Restaurants</Card.Title>
              <ListGroup variant="flush">
                {restaurantData && restaurantData.map((restaurant, index) => (
                  <ListGroup.Item key={index}>{restaurant.name}</ListGroup.Item>
                  ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Entertainment</Card.Title>
              <ListGroup variant="flush">
                {entertainmentData && entertainmentData.map((event, index) => (
                <Entertainment key={index} event={event} />
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activities;