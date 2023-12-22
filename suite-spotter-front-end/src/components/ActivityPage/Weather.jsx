/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Weather = ({weatherData}) => {
  console.log(weatherData)
  if(!weatherData) {
    return null;
    
  }
   return (
    <>
    <ListGroup>
      <Card.Title>Weather</Card.Title>
      {weatherData && weatherData.data.map((day, index) => (
        <ListGroup.Item key={index}>
          <ListGroup.Item><strong>Date:</strong> {day.valid_date}<br /></ListGroup.Item>
          <ListGroup.Item><strong>High Temp:</strong> {day.max_temp}&deg;C<br /></ListGroup.Item>
          <ListGroup.Item><strong>Low Temp:</strong> {day.min_temp}&deg;C<br /></ListGroup.Item>
          <ListGroup.Item><strong>Precipitation:</strong> {day.precip}mm<br /></ListGroup.Item>
          <ListGroup.Item><strong>Description:</strong> {day.weather.description}<br /></ListGroup.Item>
          <strong>Wind Speed:</strong> {day.wind_spd}m/s
        </ListGroup.Item>
      ))}
    </ListGroup>
    </>
  );
}

export default Weather;
