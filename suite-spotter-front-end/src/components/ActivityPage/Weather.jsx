
import ListGroup from 'react-bootstrap/ListGroup';


const Weather = (weatherData, key) => {
  if(!weatherData) {
    return null;
  }
 
  return (
    <ListGroup>
      <ListGroup.Title>Weather</ListGroup.Title>
      <ListGroup.Item key={key}>
        weatherData
      </ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>

    </ListGroup>
  );
}

export default Weather;
