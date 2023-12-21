import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function InputForm(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = name.includes("Date") ? formatDate(value) : value;
  
    props.updateFormData({
      ...props.formData,
      [name]: formattedValue,
    });
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split('T')[0];
    return formattedDate;
  };

  return (
    <Form>

      <Form.Group controlId="numberOfGuests">
        <Form.Label>Number of Guests</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number of guests"
          name="guests"
          value={props.formData.guests || ''}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="checkInDate">
        <Form.Label>Check-In Date</Form.Label>
        <Form.Control
          type="date"
          name="checkIn"
          value={props.formData.checkIn || ''}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="checkOutDate">
        <Form.Label>Check-Out Date</Form.Label>
        <Form.Control
          type="date"
          name="checkOut"
          value={props.formData.checkOut || ''}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}