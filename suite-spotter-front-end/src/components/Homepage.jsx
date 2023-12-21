import Footer from './Footer';
import InputForm from './InputForm';
import AccordionSection from './AccordionSection';
import Location from './Location';

export default function Homepage({ formData, updateFormData, setTrip }) {
  // console.log(props)
  // const locationData = props.locationData;
  // const guests = props.guests;
  // const checkIn = props.checkIn;
  // const checkOut = props.checkOut;
  // const airportData = props.airportData;

  const showAlert = () => {
    // Display an alert with all the state data
    alert(JSON.stringify(formData));
  };

  return (
    <>
      <button onClick={showAlert}>Show State Data</button>
      <Location
        formData={formData}
        updateFormData={updateFormData}
      />
      <InputForm
        formData={formData}
        updateFormData={updateFormData}
      />
      <AccordionSection
        formData={formData}
        updateFormData={updateFormData}
        setTrip={setTrip}
      />
      <Footer />
    </>
  );

}