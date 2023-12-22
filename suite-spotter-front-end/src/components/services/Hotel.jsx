import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

export default function Hotel({ latitude, longitude, guests, checkIn, checkOut, updateTrips }) {
  const [hotelData, setHotelData] = useState(null);

  const SERVER = import.meta.env.VITE_SERVER_URL
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        if (latitude && longitude) {
          const response = await axios.get(`${SERVER}/rooms`, {
            params: {
              latitude,
              longitude,
              guests,
              checkIn,
              checkOut,
            },
          });

          const extractedData = response.data.rooms[0].offers.map(room => {
            const bedType = room.room.typeEstimated.bedType;
            const beds = room.room.typeEstimated.beds;
            const currency = room.price.currency;
            const total = room.price.base;

            return {
              beds,
              bedType,
              price: {
                currency,
                total,
              },
            };
          });

          setHotelData(extractedData);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchHotelData();
  }, [latitude, longitude, guests, checkIn, checkOut]);

  const handleButtonClick = (data) => {
    const newTrip = {
      data: data,
    };
    updateTrips(newTrip);
  };

  return (
    <>
      {hotelData ? (
        <Carousel>
          {hotelData.map((data, index) => (
            <Carousel.Item key={index}>
              <div>
                <p>Beds: {data.beds}</p>
                <p>Bed Size: {data.bedType}</p>
                <p>Price: {data.price.currency} {data.price.total}</p>
                <button onClick={() => handleButtonClick(data)}>Add to My Trips</button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (<p>Hotel data loading...</p>)}
    </>
  );
}
