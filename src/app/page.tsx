'use client'
import AppCalendar from "@/shared/ui/AppCalendar";
import React from "react";
import {BookingList} from "@/home/features/bookings/BookingList";
import {IBooking} from "@/home/entity/booking";
import {BookingStatusType} from "@/home/entity/bookingStatusType";

export default function Home() {

  const fetchedEvents: IBooking[] = [
    {
      id: "1",
      serviceId: 'Depilation',
      start: 1703419702,
      end: 1703419702,
      status: BookingStatusType.Pending,
      client: {
        id: '34567-3456-3456-23456',
        name : "Pekka Pekkanen",
        email: "Pekkanen@gmail.com",
        phone: "+35845872037"
      }
    },
    {
      id: "2",
      serviceId: 'Depilation',
      start: 1703419702,
      end: 1703419702,
      status: BookingStatusType.Pending,
      client: {
        id: '34567-3456-3456-23456',
        name : "Petr Petrson",
        email: "Petrson@gmail.com",
        phone: "+35845872037"
      }
    },
    {
      id: "3",
      serviceId: '34567-3456-3456-23456',
      start: 1703419702,
      end: 1703419702,
      status: BookingStatusType.Pending,
      client: {
        id: '34567-3456-3456-23456',
        name : "Hekka Hendrikson",
        email: "Hendrikson@gmail.com",
        phone: "+35845872037"
      }
    },
  ];

  return (
    <main className="p-2 sm:p-12">
      <h1 className="text-5xl font-black">Main page</h1>
      <AppCalendar events={fetchedEvents}/>
      <BookingList bookings={fetchedEvents} />
    </main>
  )
}
