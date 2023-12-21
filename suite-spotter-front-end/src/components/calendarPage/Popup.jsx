import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Popup({show, onClose, eventData}) {
  if (!eventData) {
    return null;
  }
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{eventData.destination}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Check-in: {eventData.checkIn}</p>
        <p>Check-out: {eventData.checkOut}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">
          View Details in MyTrips
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}