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
 
  const { checkIn, checkOut } = props.formData;
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
        getWeatherFromSearch();
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
    const response = await axios.get(`https://suite-spotter-back-end.onrender.com/weather?longitude=${long}&latitude=${lat}&checkIn=${checkIn}&checkOut=${checkOut}`);
    setWeatherData(response.data);
  }

  async function getRestaurantFromSearch() {
    try {
      const localApi = `${SERVER}`;
      const response = await axios.get(`${localApi}/food`);
      
      const restaurantData = response.data;

      setRestaurantData(restaurantData.map((restaurant, index) => ({ ...restaurant, id: index })));
      
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
    }
  }

  async function getEntertainmentFromSearch() {
    try {
      const localApi = `${SERVER}`;
      const response = await axios.get(`${localApi}/poi`);
      
      const entertainmentData = response.data;

      setEntertainmentData(entertainmentData.map((entertainment, index) => ({ ...entertainment, id: index })));
      
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
             {weatherData && ( <Weather weatherData={weatherData} />)}
                 
                
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