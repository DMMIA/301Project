import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const API_KEY = import.meta.env.GEO_API_KEY;


    <Form className="location-form" onSubmit={handleLocation}>
        <Form.Group controlId='locationForm'>
            <Form.Label>Find a city</Form.Label>
            <Form.Control type='text' placeholder='Enter City Name' />
        </Form.Group>
        <Button variant='primary' type='submit'>
            Find
        </Button>
        
        
    </Form>
    {
        formSubmitted && (
            <>
                <Card
                    style={{ width: '40vw' }}
                    className='city-card'
                >
                    <Card.Body>
                        <div className='card-text-container'>
                            <Card.Title>{fullLocation}</Card.Title>
                            <Card.Text>
                                Lat: {lat}
                            </Card.Text>
                            <Card.Text>
                                Long: {long}
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }

    