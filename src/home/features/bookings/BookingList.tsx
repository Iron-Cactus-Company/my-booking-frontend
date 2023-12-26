import React from "react";
import BookingCard from "@/home/features/bookings/BookingCard";
import {IBooking} from "@/home/entity/booking";
import {IUpdateBooking} from "@/home/entity/updateBooking";

type BookingListProps = {
    bookings: IBooking[];
};

export const BookingList: React.FC<BookingListProps> = ({ bookings }) => {

    //TODO: API accept booking by id
    //http://localhost:5000/api/booking PUT + IUpdateBooking (Status must be 1)
    async function accept(id: string) {
        console.log("booking Accepted");
        const booking: IUpdateBooking = {
            id,
            status: 1
        }
    }

    //TODO: API decline booking by id
    //http://localhost:5000/api/booking PUT + IUpdateBooking (Status must be 2)
    async function decline(id: string) {
        console.log("booking declined");
        const booking: IUpdateBooking = {
            id,
            status: 2
        }
    }


    return (
        <div>
            {bookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} acceptBooking={accept} cancelBooking={decline}/>
            ))}
        </div>
    );
};