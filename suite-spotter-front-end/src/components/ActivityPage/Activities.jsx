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


const Activities = (props) => {
  // get the start date and end date from the form. then define it as a const. pass this data to the server through the /weather api call. (i thinkj its checkIn and checkOut)
  // define searchQuery for axios calls
  // make sure data mapping is working 
  const { checkIn, checkOut } = props.formData;
  console.log(checkIn, checkOut);
  const { lat, long } = props.formData.locationData || {};

  const [weatherData, setWeatherData] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);
  const [entertainmentData, setEntertainmentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const weatherResponse = await axios.get(`${SERVER}/weather`);
        // console.log('Weather Response:', weatherResponse.data);
        // setWeatherData(weatherResponse.data);

        // const restaurantResponse = await axios.get(`${SERVER}/food`);
        // console.log('food Response:', restaurantResponse.data)
        // setRestaurantData(restaurantResponse.data);

        // const entertainmentResponse = await axios.get(`${SERVER}/poi`);
        // console.log('entertainment response:', entertainmentResponse.data)
        // setEntertainmentData(entertainmentResponse.data);
        if (lat && long && checkIn) {
          await getWeatherFromSearch(long, lat, checkIn, checkOut);
        }
        // getRestaurantFromSearch(searchQuery);
        // getEntertainmentFromSearch(searchQuery);

      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [long, lat, checkIn, checkOut]);


  async function getWeatherFromSearch(long, lat, checkIn, checkOut) {
    const localApi = `${SERVER}`;
    console.log('local API', localApi);
    const response = await axios.get(`http://localhost:3001/weather?longitude=${long}&latitude=${lat}&checkIn=${checkIn}&checkOut=${checkOut}`);
    console.log(response.data.data, 'weather response');
    setWeatherData(response.data.data);

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
                {weatherData ? (
                  <Weather weatherData={weatherData} />
                ) : (
                  <p>Loading weather data...</p>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Local Restaurants</Card.Title>
              <ListGroup variant="flush">
                {restaurantData ? (
                  restaurantData.map((restaurant, index) => (
                    <ListGroup.Item key={index}>{restaurant.name}</ListGroup.Item>
                  ))
                ) : (
                  <p>Loading restaurant data...</p>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Entertainment</Card.Title>
              <ListGroup variant="flush">
                {entertainmentData ? (
                  entertainmentData.map((event, index) => (
                    <Entertainment key={index} event={event} />
                  ))
                ) : (
                  <p>Loading entertainment data...</p>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activities;