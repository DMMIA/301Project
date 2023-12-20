import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function InputForm(props) {
  const [formData, setFormData] = useState({
    numberOfGuests: '',
    checkInDate: '',
    checkOutDate: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = name.includes("Date") ? formatDate(value) : value;

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split('T')[0];
    return formattedDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateInputFormData(formData);
  };
  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group controlId="numberOfGuests">
        <Form.Label>Number of Guests</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number of guests"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="checkInDate">
        <Form.Label>Check-In Date</Form.Label>
        <Form.Control
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="checkOutDate">
        <Form.Label>Check-Out Date</Form.Label>
        <Form.Control
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}