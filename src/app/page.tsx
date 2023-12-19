'use client'
import AppCalendar from "@/shared/ui/AppCalendar";
import React from "react";

export default function Home() {

  const fetchedEvents = [
    {
      id: "1",
      service: 'Depilation',
      start: '2024-01-01T10:00:00',
      end: '2024-01-02T12:00:00',
      client: {
        name : "Pekka Pekkanen",
        email: "Pekkanen@gmail.com",
        phone: "+35845872037"
      }
    },
    {
      id: "2",
      service: 'Сoloring',
      start: '2024-01-03T14:30:00',
      end: '2024-01-04T16:45:00',

      client: {
        name : "Petr Petrson",
        email: "Petrson@gmail.com",
        phone: "+35845872037"
      }

    },
    {
      id: "3",
      title: 'Haircut',
      start: '2024-01-03T18:00:00',
      end: '2024-01-04T20:30:00',
      client: {
        name : "Hekka Hendrikson",
        email: "Hendrikson@gmail.com",
        phone: "+35845872037"
      }
    },
  ];

  return (
    <main className="min-h-screen  p-2 sm:p-24">
      <h1 className="text-5xl font-black">Main page</h1>
      <AppCalendar events={fetchedEvents}/>
    </main>
  )
}
