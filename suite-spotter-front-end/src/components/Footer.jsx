import Button from 'react-bootstrap/Button';

export default function footer() {
    return (
        <footer className="app-footer app-section">
            <section title="Book Your Stay">
                <p>Plan your vacation today. Book your stay with Suite Spotter.</p>
                <a href="/learn-more">Learn More</a>
                <a href="/contact-us">Contact Us</a>
                <a href="/faq">FAQ</a>
                <a href="/terms-conditions">Terms & Conditions</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/cookie-policy">Cookie Policy</a>
                <a href="/help">Help</a>
                <a href="/support">Support</a>
            </section>
            <div className="footer">
                <p>Copyright © 2023 Suite Spotter. All Rights Reserved.</p>
            </div>
        </footer>
    );
}