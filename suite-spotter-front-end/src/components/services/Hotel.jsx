import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

export default function Hotel({ latitude, longitude, guests, checkIn, checkOut, updateTrips }) {
  const [hotelData, setHotelData] = useState(null);

  const SERVER = import.meta.env.VITE_SERVER_URL
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get(`${SERVER}/rooms`, {
          params: {
            latitude,
            longitude,
            guests,
            checkIn,
            checkOut,
          },
        });
        console.log(response.data.rooms[0].offers);
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

        // Assuming the response contains hotel data, update the state
        setHotelData(extractedData);
      } catch (error) {
        console.error(error.message);
        // Handle errors if needed
      }
    };

    // Fetch hotel data when the component mounts or when inputs change
    fetchHotelData();
  }, [latitude, longitude, guests, checkIn, checkOut]);
  
  const handleButtonClick = (index) => {
    // Log the data of the clicked carousel item
    console.log('add to Mytrips Hotel:', hotelData[index]);
    const newTrip = {
      type: 'Hotel',
      data: hotelData[index],
    };
    updateTrips(newTrip);
  };
 

  return (
    <>
    {hotelData && (
        <Carousel>
          {hotelData.map((data, index) => (
            <Carousel.Item key={index}>
              <div>
                {/* Render hotel data as needed */}
                <p>Beds: {data.beds}</p>
                <p>Bed Size: {data.bedType}</p>
                <p>Price: {data.price.currency} {data.price.total}</p>
                <button onClick={handleButtonClick}>Add to My Trips</button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}
