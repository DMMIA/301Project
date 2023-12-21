import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import moment from "moment";
import Popup from './Popup';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function MyCalendar({ tripList }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState(tripList.map(trip => ({
    start: moment(trip.checkIn).toDate(),
    end: moment(trip.checkOut).toDate(),
    title: trip.destination,
    id: trip._id,
    tripData: trip
  })));

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="big-calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "100vh" }}
        events={events}
        onSelectEvent={handleEventClick}
        selectable
        resizable
      />
      {selectedEvent && (
        <Popup
          show={showModal}
          onClose={() => setShowModal(false)}
          eventData={selectedEvent.tripData}
        />
      )}

    </div>
  );
}

export default MyCalendar
