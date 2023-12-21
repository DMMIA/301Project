import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './MyCalendar.css';








const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [events] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title", // Use a string for the title
      // possibilities
      allDay: true, // Use true if this is an all day event
      resourceId: "a", // An arbitrary string to uniquely identify this event
      bgColor: "red", // Use a string for the background color
      borderColor: "blue", // Use a string for the border color
      textColor: "white", // Use a string for the text color
      description: "Some description",
      location: "Some location",
      resourceIds: ["a", "b"], // An array of arbitrary strings to uniquely identify this event

    },
  ]);
  return (
    <div className="big-calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events} // Use events directly, no need for this.state.events
        style={{ height: "100vh" }}
        // Possibilities 
        onSelectEvent={(event) => alert(event.title)}
        selectable
        resizable
        onSelectSlot={(slotInfo) => alert(`You selected slot: ${slotInfo}`)}
        onSelecting={(range) => alert(`You selected: ${range}`)}
        onDoubleClickEvent={(event) => alert(`You double clicked: ${event.title}`)}
        onRangeChange={(range) => alert(`You selected a new range: ${range}`)}
        onView={(view) => alert(`You changed view to ${view}`)}
        onNavigate={(date) => alert(`You navigated to ${date}`)}
        onDrillDown={(date) => alert(`You drilled down to ${date}`)}
        onDrillUp={() => alert("You drilled up")}
        onDrillDownDate={(date) => alert(`You drilled down to ${date}`)}
        onDrillUpDate={() => alert("You drilled up")}



      />
    </div>
  );
}

export default MyCalendar
