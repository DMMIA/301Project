import { useState } from 'react';
import Footer from './Footer';
import InputForm from './InputForm';
import AccordionSection from './AccordionSection';
import Location from './Location';

export default function Homepage() {
    const [locationData, setLocationData] = useState(null);
    const [guests, setGuests] = useState(null);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [airportData, setAirportData] = useState(null);

    const updateLocationData = (newLocationData) => {
        setLocationData(newLocationData);
    };

    const updateInputFormData = (newGuests, newCheckIn, newCheckOut) => {
        setGuests(newGuests);
        setCheckIn(newCheckIn);
        setCheckOut(newCheckOut);
    };

    // Function to update airport data
    const updateAirportData = (newAirportData) => {
        setAirportData(newAirportData);
    };

    const showAlert = () => {
        // Display an alert with all the state data
        alert(JSON.stringify({ locationData, guests, checkIn, checkOut, airportData }));
    };

    return (
        <>
            <button onClick={showAlert}>Show State Data</button>
            <Location
                updateLocationData={updateLocationData}
            />
            <InputForm
                updateInputFormData={updateInputFormData}
            />
            <AccordionSection
                locationData={locationData}
                guests={guests}
                checkIn={checkIn}
                checkOut={checkOut}
                airportData={airportData}
                updateAirportData={updateAirportData}
            />
            <Footer />
        </>
    );

}