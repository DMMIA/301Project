import ListGroup from 'react-bootstrap/ListGroup';

const Weather = (weatherData) => {
  if(!weatherData) {
    return null;
  }
   return (
    <ListGroup>
      <ListGroup.Title>Weather</ListGroup.Title>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item></ListGroup.Item>

    </ListGroup>
  );
}

export default Weather;
