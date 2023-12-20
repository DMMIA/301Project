import Footer from './Footer';
import InputForm from './InputForm';
import AccordionSection from './AccordionSection';
import Location from './Location';

export default function Homepage(props) {
    const locationData = props.locationData;
    const guests = props.guests;
    const checkIn = props.checkIn;
    const checkOut = props.checkOut;
    const airportData = props.airportData;

    const showAlert = () => {
        // Display an alert with all the state data
        alert(JSON.stringify({ locationData, guests, checkIn, checkOut, airportData }));
    };

    return (
        <>
            <button onClick={showAlert}>Show State Data</button>
            <Location
                updateLocationData={props.updateLocationData}
            />
            <InputForm
                updateInputFormData={props.updateInputFormData}
            />
            <AccordionSection
                locationData={props.locationData}
                guests={props.guests}
                checkIn={props.checkIn}
                checkOut={props.checkOut}
                airportData={props.airportData}
                updateAirportData={props.updateAirportData}
            />
            <Footer />
        </>
    );

}