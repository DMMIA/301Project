/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup';


const Weather = ({weatherData}) => {
  if(!weatherData) {
    return null;
  }
   return (
    <ListGroup>
      <ListGroup.Title>Weather</ListGroup.Title>
      {weatherData && weatherData.map((day, index) => (
        <ListGroup.Item key={index}>
          <strong>Date:</strong> {day.valid_date}<br />
          <strong>High Temp:</strong> {day.max_temp}&deg;C<br />
          <strong>Low Temp:</strong> {day.min_temp}&deg;C<br />
          <strong>Precipitation:</strong> {day.precip}mm<br />
          <strong>Description:</strong> {day.weather.description}<br />
          <strong>Wind Speed:</strong> {day.wind_spd}m/s
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Weather;
