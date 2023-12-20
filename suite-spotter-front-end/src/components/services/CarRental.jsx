import { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

export default function CarRental({ latitude, longitude, guests, checkIn, countryCode, iataCode }) {
  const [carRentalData, setCarRentalData] = useState(null);
  useEffect(() => {
    const fetchCarRentalData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cars', {
          params: {
            latitude,
            longitude,
            guests,
            checkIn,
            countryCode,
            iataCode,
          },
        });

        setCarRentalData(response.data);
      } catch (error) {
        console.error('Car Rental Data Error:', error.message);

      }
    };
    fetchCarRentalData();
  }, [latitude, longitude, guests, checkIn, countryCode, iataCode]);
  return (
    <>
      {carRentalData && (
        <Carousel>
          {carRentalData.map((offer) => (
            <Carousel.Item key={offer.id}>
              <img
                className="d-block w-100"
                src={offer.vehicle.imageURL}
                alt={offer.vehicle.description}
              />
              <Carousel.Caption>
                <h3>{offer.vehicle.description}</h3>
                <p>Provider: {offer.serviceProvider.name}</p>
                <p>Seats: {offer.vehicle.seats[0].count}</p>
                <p>Price: {offer.quotation.monetaryAmount} {offer.quotation.currencyCode}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  )
}