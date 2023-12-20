import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/sass/styles';
import 'react-big-calendar/lib/addons/dragAndDrop/styles'; // if using DnD
import moment from "moment";


const MyCalendar = (props) => (
    <div> 
        <Calendar
            localizer={moment} 
            events={myEventsList} 
            startAccessor="start" 
            endAccessor="end" 
            style={{ height: 500 }} 
        />   
    </div> 
); 

export default MyCalendar
