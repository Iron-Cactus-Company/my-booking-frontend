import {useCallback, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from "@fullcalendar/core";

type Props = {
    events: EventInput[];
};

function AppCalendar({ events }: Props) {

    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const handleDateClick = (info: { dateStr: string }) => {
        setSelectedDate(info.dateStr);
    }

    const filterEvents = useCallback((events: EventInput[]) => {
        const filteredEvents =  events.filter((event) => {
                const eventDate = new Date(event.start as string).toISOString().split('T')[0];
                return eventDate === selectedDate;
            });
        console.log(filteredEvents);
        return filteredEvents;
        }, [selectedDate])


    return (
        <div className="h-full">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                // events={events}
                height={"600px"}
                // headerToolbar={{
                //     left: 'prev,next today',
                //     center: 'title',
                //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
                // }}
                locale="fi"
                timeZone='UTC'
                dateClick={handleDateClick}
            />

            {selectedDate && (
                <div className="mt-4">
                    <h1 className={"font-bold text-2xl"}>Events for {selectedDate}</h1>
                    {filterEvents(events).map(event=> (

                        <div key={event.id}
                             className="border-2 border-solid border-amber-950 mb-2 bg-amber-100 p-2 rounded-md"
                        >
                            <ul>
                                <li>
                                    <b>Service: </b>
                                    {event.service}
                                </li>
                                <li>
                                    <b>Duration: </b>
                                    {formatEventTime(event.start as string)} to {formatEventTime(event.end as string)}
                                </li>
                                <li>
                                    <b>Client name: </b>
                                    {event.client.name}
                                </li>
                                <li>
                                    <b>Client email: </b>
                                    {event.client.email}
                                </li>

                                <li>
                                    <b>Client phone </b>
                                    {event.client.phone}
                                </li>

                            </ul>
                        </div>


                    ))}

                </div>
            )}

        </div>
    );
}

export default AppCalendar;

const formatEventTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString('en-GB', {hour: 'numeric', minute: 'numeric'});
};