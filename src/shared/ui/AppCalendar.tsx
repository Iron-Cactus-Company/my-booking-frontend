import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {EventInput} from "@fullcalendar/core";

type Props = {
    events : EventInput[]
}
function AppCalendar({events}: Props) {
    return (
        <div className="h-full">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                height={"600px"}
            />
        </div>
    );
}

export default AppCalendar;
