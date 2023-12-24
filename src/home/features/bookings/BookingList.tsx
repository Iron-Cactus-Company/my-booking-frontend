import React from "react";
import BookingCard from "@/home/features/bookings/BookingCard";
import {IBooking} from "@/home/entity/booking";

type BookingListProps = {
    bookings: IBooking[];
};

export const BookingList: React.FC<BookingListProps> = ({ bookings }) => {

    //TODO: API accept booking by id
    async function accept(id: string) {
        console.log("booking Accepted");
    }

    //TODO: API decline booking by id
    async function decline(id: string) {
        console.log("booking declined");
    }


    return (
        <div>
            {bookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} acceptBooking={accept} cancelBooking={decline}/>
            ))}
        </div>
    );
};