'use client'
import AppCalendar from "@/shared/ui/AppCalendar";
import React from "react";
import {BookingList} from "@/home/features/bookings/BookingList";
import {IBooking} from "@/home/entity/booking";
import {BookingStatusType} from "@/home/entity/bookingStatusType";
import {CompanyNameInput} from "@/home/features/companySearch/CompanyNameInput";
import {CompanyList} from "@/home/features/companySearch/CompanyList";
import {AvailableTimeList} from "@/home/features/availableTime/AvailableTimeList";

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

  const companiesLoaded : ICompany[] = [
    {
      id: '34567-3456-3456-23456',
      name: "Hair cutter 228",
      email: "cat.hair@mail.fi",
      phone: "+35845872037",
      address: "Ratsaskatu 59 3",
      description: "my company is super duper"
    },
    {
      id: '10567-3456-3456-23489',
      name: "Beauty saloon",
      email: "beaty.you@email.fi",
      phone: "+35867872050",
      address: "Lahdenkatu 59 3",
      description: "some description here"
    }
  ];

  //TODO: API get companies by name
  //http://localhost:5000/api/Company?name=lol GET
  async function searchByCompanyName(name: string) {
    console.log("Some companies found");
  }

  return (
      <main className="p-2 sm:p-12">
        <h1 className="text-5xl font-black">Main page</h1>
        <AppCalendar events={fetchedEvents}/>
        <BookingList bookings={fetchedEvents}/>

        <div style={{border: "1px solid grey", margin: "50px 0"}}>
          <h2>Client view of main page</h2>
          <CompanyNameInput onSearch={searchByCompanyName}/>
          <CompanyList companies={companiesLoaded}/>
        </div>

        <div style={{border: "1px solid grey", margin: "50px 0"}}>
          <h2>Client view for making a booking</h2>
          <AvailableTimeList availableTime={{serviceId: "chosen service id", from: 56757, to: 4567477}} />
        </div>

      </main>
  )
}
