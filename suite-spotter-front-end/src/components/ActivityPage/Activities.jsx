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
        getRestaurantFromSearch();
        getEntertainmentFromSearch();

      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [long, lat, checkIn, checkOut]);


  async function getWeatherFromSearch(long, lat, checkIn, checkOut) {
    const localApi = `${SERVER}`;
    console.log('local API', localApi);
    const response = await axios.get(`http://localhost:3000/weather?longitude=${long}&latitude=${lat}&checkIn=${checkIn}&checkOut=${checkOut}`);
    console.log(response.data, 'weather response');
    setWeatherData(response.data);

  }

  async function getRestaurantFromSearch() {
    try {
      const localApi = `${SERVER}`;
      const response = await axios.get(`${localApi}/food`);
      console.log('API Response for Restaurants:', response.data);
      const restaurantData = response.data;

      setRestaurantData(restaurantData.map((restaurant, index) => ({ ...restaurant, id: index })));
      console.log('restaurant', response.data);
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
    }
  }

  async function getEntertainmentFromSearch() {
    try {
      const localApi = `${SERVER}`;
      const response = await axios.get(`${localApi}/poi`);
      console.log('API Response for entertainment:', response.data);
      const entertainmentData = response.data;

      setEntertainmentData(entertainmentData.map((entertainment, index) => ({ ...entertainment, id: index })));
      console.log('entertainment data', response.data);
    } catch (error) {
      console.error('Error fetching entertainment data:', error.message);
    }
  }


  return (
    <Container className="mt-4">
      <Card.Title>Local Information</Card.Title>
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>

              <Card.Title>Weather</Card.Title>
             
                  <Weather weatherData={weatherData} />
                
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
                    <RestaurantList
                     key={index} restaurant={restaurant} />
                   ))
                ) : ( 
                  <><h1>Loading restaurant data...</h1></>
                 )} 
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Places to visit nearby</Card.Title>
              <ListGroup variant="flush">
                {entertainmentData ? (
                  entertainmentData.map((entertainment, index) => (
                    <Entertainment entertainment={entertainment}key={index} />
                  ))
                ) : (
                  <Card.Title>Loading entertainment data...</Card.Title>
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