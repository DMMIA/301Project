import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './App.css'; 
import './Homepage.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import Weather from './Weather';
import Container from 'react-bootstrap/Container';
import Row,Col,Card from 'react-bootstrap/Row,Col,Card';


const API_KEY = import.meta.env.GEO_API_KEY;


// Add Calender component here.
// Add Weather component here.
export default function Homepage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");



    const renderAccordionItem = (itemData) => (
        // <Accordion.Item eventKey={itemData._id}>
        //     <Accordion.Header>{itemData.name}</Accordion.Header>
        //     <Accordion.Body>{itemData.description}</Accordion.Body>
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
    const renderAccordionItems = (data) => {
        return data.map(itemData => renderAccordionItem(itemData));
    }
    <Container className="mt-4">
    <h1>Local Weather Report</h1>
    <Row> 
      <Col  md={4}>
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

    return (
        
        //Some quick example text to build on the card title and make up the bulk of the card's content.
        <div className="App">
            <Header />
            <Section />   title="Experience Luxury Stay"
            <p>Find your next stay with Suite Spotter Today!.</p>

        //Image here.
            <img src= alt="Hotel Room" className="hotel-image" />.      //Image here.
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Trips</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Activities</a></li>
                </ul>
            </nav>

        </div>

    );
}

export default function footer() {
    return (
    <footer className="App-footer">
        <Section title="Book Your Stay">
            <p>Plan your vacation today. Book your stay with Suite Spotter.</p>
            <Button>Book Now</Button>
            <Button>Learn More</Button>
            <Button>Contact Us</Button>
            <Button>FAQ</Button>
            <Button>Terms & Conditions</Button>
            <Button>Privacy Policy</Button>
            <Button>Cookie Policy</Button>
            <Button>Help</Button>
            <Button>Support</Button>
        </Section>
        <div className="footer">
            <p>Copyright © 2023 Suite Spotter. All Rights Reserved.</p>
        </div>
        </footer>
        
    ); 
}