import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Submission({formData, tripData, onClick, showAlert, beamData}) {
  const SERVER = import.meta.env.VITE_SERVER_URL;
  const addTrip = async () => {
    try {
      const trip = {
        destination: formData.locationData.location,
        locationData: formData.locationData,
        guests: formData.guests,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        airportData: {
          startingAirport: formData.airportData.startingAirport,
          endingAirport: formData.airportData.endingAirport,
          price: tripData.flight.data.price.total,
          currency: tripData.flight.data.price.currency,
          flightNumber: tripData.flight.data.itineraries[0].segments[0].number,
          startDate: tripData.flight.data.itineraries[0].segments[0].departure.at,
          endDate: tripData.flight.data.itineraries[0].segments[0].arrival.at,
          duration: tripData.flight.data.itineraries[0].segments[0].duration,
        },
        carRentalData: {
          provider: tripData.carRental.data.serviceProvider.name,
          description: tripData.carRental.data.vehicle.description,
          imageURL: tripData.carRental.data.vehicle.imageURL,
          seats: tripData.carRental.data.vehicle.seats[0].count,
          price: tripData.carRental.data.quotation.base.monetaryAmount,
          currency: tripData.carRental.data.quotation.currencyCode,
        },
        hotelData: {
          beds: tripData.hotel.data.beds,
          price: tripData.hotel.data.price.total,
          currency: tripData.hotel.data.price.currency,
        },
        restaurantData: {
          name: "Dummy",
          tags: ["Dumm1", "Dumm2"],
        },
        entertainmentData: {
          name: "Dummy",
          tags: ["Dumm1", "Dumm2"],
        },
      };
      const response = await axios.post(`${SERVER}/trips`, trip);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="trip-submit-btns">
      <Button className="submission-btn" onClick={() => {
        addTrip();
      }}>Book Now!</Button>
      <Button className="submission-btn" onClick={onClick}>Reset Trip</Button>
    </div>
  )
}
