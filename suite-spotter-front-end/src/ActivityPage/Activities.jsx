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
  const { locationData } = props.location.state;
  const { lat, long } = locationData;

  const [weatherData, setWeatherData] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);
  const [entertainmentData, setEntertainmentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResponse = await axios.get(`${SERVER}/weather`);
        setWeatherData(weatherResponse.data);

        const restaurantResponse = await axios.get(`${SERVER}/restaurant`);
        setRestaurantData(restaurantResponse.data);

        const entertainmentResponse = await axios.get(`${SERVER}/entertainment`);
        setEntertainmentData(entertainmentResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }

      getWeatherFromSearch(lat, long);
      getRestaurantFromSearch(''); // Replace with relevant search query if its needed
      getEntertainmentFromSearch('');
    };


    fetchData();
  }, [lat, long]);


  async function getWeatherFromSearch(long, lat) {
    const localApi = `${SERVER}`;
    console.log('local API', localApi);
    const response = await axios.get(`${localApi}/weather?lon=${long}&lat=${lat}&searchQuery=${searchQuery}`);
    console.log(response, 'weather response');
    setWeatherData(response);

  }

  async function getRestaurantFromSearch(searchQuery) {
    try {
      const localApi = '';
      const response = await axios.get(`${localApi}/restaurants?searchQuery=${searchQuery}`);
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
      const localApi = '';
      const response = await axios.get(`${localApi}/entertainment?searchQuery=${searchQuery}`);
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
                <RestaurantList restaurantData={restaurantData} />
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
                <Entertainment entertainmentData={entertainmentData} />
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