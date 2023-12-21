import InputForm from './InputForm';
import AccordionSection from './AccordionSection';
import Location from './Location';

export default function Homepage({ formData, updateFormData, setTrip, setSubmitState, tripData }) {

  const showAlert = () => {
    // Display an alert with all the state data
    alert(JSON.stringify(tripData));
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
        tripData={tripData}
        setTrip={setTrip}
        setSubmitState={setSubmitState}
      />
      
    </>
  );

}