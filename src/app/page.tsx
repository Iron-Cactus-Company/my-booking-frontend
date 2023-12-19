'use client'
import AppCalendar from "@/shared/ui/AppCalendar";
import React from "react";

export default function Home() {

  const fetchedEvents = [
    {
      title: 'Event 1',
      start: '2024-01-01',
      end: '2024-01-02',
    },
    {
      title: 'Event 2',
      start: '2024-01-03',
      end: '2024-01-04',
    },
  ];

  return (
    <main className="min-h-screen  p-2 sm:p-24">
      <h1 className="text-5xl font-black">Main page</h1>
      <AppCalendar events={fetchedEvents}/>
    </main>
  )
}
