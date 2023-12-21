import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function MyCalendar(props) {
  const trips = [{
    startDate: "2023-12-01",
    endDate: "2023-12-05",
    name: "Seattle trip"
  }];
  const [events, setEvents] = useState(trips.map(trip => ({
    start: moment(trip.startDate).toDate(),
    end: moment(trip.endDate).toDate(),
    title: trip.name,
  })));

  return (
    <div className="big-calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        selectable
        resizable
        onSelectSlot={(slotInfo) => alert(`You selected slot: ${slotInfo}`)}
      />
    </div>
  );
}

export default MyCalendar
