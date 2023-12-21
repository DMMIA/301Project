import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import AuthButtons from '../Auth/AuthButtons';

export default function Header() {
  return (
    <header className="app-header app-section">
      <Navbar expand="lg">
        <div className="nav-logo">
          <Navbar.Brand as={Link} to="/">
            <img
              src="src/assets/logo.png"
              alt="Hotel Room"
              className="hotel-image"
            />
          </Navbar.Brand>
        </div>
        <div className="nav-buttons">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/trips">My Trips</Nav.Link>
              <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
              <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <AuthButtons />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}