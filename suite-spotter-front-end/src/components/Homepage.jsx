import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './App.css';
import './Homepage.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import Weather from './Weather';

// Assuming you set the environment variable in your build process

export default function Homepage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const renderAccordionItem = (itemData) => (
        <Accordion.Item key={itemData._id} eventKey={itemData._id}>
            <Accordion.Header>{itemData.name}</Accordion.Header>
            <p><strong>Description:</strong> {itemData.description}</p>
            <p>Explore the world of luxury hotels with Suite Spotter. </p>
            <Button>Home</Button>
            <Button>My Trips</Button>
            <Button>About Us</Button>
            <Button>Activities</Button>
        </Accordion.Item>
    );

    return (
        <div>
            <Header />
            <Section />

            <Container className="mt-4">
                <h1>Local Weather Report</h1>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>Weather</Card.Title>
                                <Card.Text>
                                    <Weather />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}
