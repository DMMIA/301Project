import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


export default function Flight({ formData, updateFormData, updateTrips }) {
  const [startAirport, setStartAirport] = useState('');
  const [endAirport, setEndAirport] = useState('');
  const [flights, setFlights] = useState([]);
  const guests = formData.guests;
  const checkIn = formData.checkIn;
  const checkOut = formData.checkOut;


  const SERVER = import.meta.env.VITE_SERVER_URL
  const handleFlightSearch = async () => {
    try {
      const response = await axios.get(`${SERVER}/planes`, {
        params: {
          startAirport,
          endAirport,
          guests,
          checkIn,
          checkOut,
        },
      });

      setFlights(response.data.flights);
      updateFormData({
        airportData: {
          startAirport,
          endAirport,
        }
      });
    } catch (error) {
      console.error('Flight Search Error:', error.message);
    }
  };

  const handleButtonClick = (flight) => {
    const newTrip = {
      data: flight,
    };
    updateTrips(newTrip);
  };
  return (
    <>
      <Form>
        <Form.Group controlId="startAirport">
          <Form.Label>Starting Airport</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter starting airport"
            value={formData.airportData.startAirport}
            onChange={(e) => setStartAirport(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="endAirport">
          <Form.Label>Ending Airport</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ending airport"
            value={formData.airportData.endAirport}
            onChange={(e) => setEndAirport(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleFlightSearch}>
          Search Flights
        </Button>
      </Form>
      <Carousel>
        {flights.map((flight, index) => (
          <Carousel.Item key={index}>
            <h3>{flight.carrierCode}</h3>
            <p>Price: {flight.price.total}</p>
            <p>Departure Time: {flight.itineraries[0].segments[0].departure.at}</p>
            <p>Arrival Time: {flight.itineraries[0].segments.slice(-1)[0].arrival.at}</p>
            <p>Number of Stops: {flight.itineraries[0].segments.length - 1}</p>
            <p>Cabin: {flight.travelerPricings[0].fareDetailsBySegment[0].cabin}</p>
            <Button onClick={() => handleButtonClick(flight)}>Add to My Trips</Button>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}