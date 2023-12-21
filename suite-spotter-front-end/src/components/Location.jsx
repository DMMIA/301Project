/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const API_KEY = import.meta.env.VITE_GEO_API_KEY;

export default function Location(props) {

  const [location, setLocation] = useState('');
  const [fullLocation, setFullLocation] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [iataCode, setIataCode] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const SERVER = import.meta.env.VITE_SERVER_URL;

  const handleLocation = async (e) => {
    e.preventDefault();
    try {
      const city = e.target.elements.locationForm.value;
      const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${city}&format=json`);
      setLocation(response.data[0].display_name.split(',')[0]);
      setFullLocation(response.data[0].display_name);
      setLat(response.data[0].lat);
      setLong(response.data[0].lon);


      const serverResponse = await axios.get(`${SERVER}/location?city=${city}`);

      setIataCode(serverResponse.data[0].iataCode);
      setCountryCode(serverResponse.data[0].address.countryCode);
      setFormSubmitted(true);

      props.updateFormData({
        locationData: {
          location: response.data[0].display_name.split(',')[0],
          setFullLocation: response.data[0].display_name,
          lat: response.data[0].lat,
          long: response.data[0].lon,
          iataCode: serverResponse.data[0].iataCode,
          countryCode: serverResponse.data[0].address.countryCode,
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <section className="location-section app-section">
      <Form className="location-form" onSubmit={handleLocation}>
        <Form.Group controlId='locationForm'>
          <Form.Label>Find a city</Form.Label>
          <Form.Control 
          type='text' 
          placeholder='Enter City Name' 
          defaultValue={props.formData.locationData.location || ''}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Find
        </Button>
      </Form>
      {(formSubmitted || props.formData.locationData.location) && (
        <>
          <Card
            className='city-card'
          >
            <Card.Body>
              <div className='card-text-container'>
                <Card.Title>{props.formData.locationData.setFullLocation}</Card.Title>
              </div>
              <Card.Img
                variant='bottom'
                src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.formData.locationData.lat},${props.formData.locationData.long}&zoom=12`}
              />
            </Card.Body>
          </Card>
        </>
      )}
    </section>

  )
}