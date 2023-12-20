import Button from 'react-bootstrap/Button';

export default function footer() {
    return (
        <footer className="App-footer">
            <section title="Book Your Stay">
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
            </section>
            <div className="footer">
                <p>Copyright © 2023 Suite Spotter. All Rights Reserved.</p>
            </div>
        </footer>
    );
}