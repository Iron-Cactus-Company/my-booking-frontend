import React, {useState} from "react";
import {IBooking} from "../../entity/booking";
import {BookingStatusType} from "@/home/entity/bookingStatusType";

type BookingCardProps = {
    booking: IBooking;
    acceptBooking: (id: string) => Promise<any>;
    cancelBooking: (id: string) => Promise<any>;
};

const BookingCard: React.FC<BookingCardProps> = ({ booking, acceptBooking, cancelBooking }) => {
    const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);
    const [currentBooking, setCurrentBooking] = useState<IBooking>(booking);

    const handleAccept = async () => {
        setIsButtonVisible(false);
        await acceptBooking(booking.id);
        setCurrentBooking(item => {
            return {...item, status: BookingStatusType.Accepted}
        });
    }

    const handleDecline = async () => {
        setIsButtonVisible(false);
        await cancelBooking(booking.id);
        setCurrentBooking(item => {
            return {...item, status: BookingStatusType.Cancelled}
        });
    }

    const timestampToString = (timestamp: number) => new Date(timestamp*1000).toLocaleString()

    return (
        <div>
            <div key={booking.id} style={{border: "1px solid black", margin: "10px 20px"}}>
                <table>
                    <tbody>
                    <tr>
                        <td>Date: </td>
                        <td>
                            {timestampToString(booking.start)} - {timestampToString(booking.end)}
                        </td>
                    </tr>
                    <tr>
                        <td>Service ID: </td>
                        <td>
                            {booking.serviceId}
                        </td>
                    </tr>
                    <tr>
                        <td>Client Name: </td>
                        <td>
                            {booking.client.name}
                        </td>
                    </tr>
                    <tr>
                        <td>Client Email: </td>
                        <td>
                            {booking.client.email}
                        </td>
                    </tr>
                    <tr>
                        <td>Client Phone: </td>
                        <td>
                            {booking.client.phone}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {isButtonVisible && booking.status === BookingStatusType.Pending ? (
                    <>
                    <button
                            onClick={handleAccept}
                            style={{border: "1px solid black", backgroundColor: "blue", color: "white", borderRadius: 20}}
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleDecline}
                            style={{border: "1px solid black", backgroundColor: "red", color: "white", borderRadius: 20}}
                        >
                            Decline
                        </button>
                    </>
                )
                :
                (
                    <p>{currentBooking.status === BookingStatusType.Accepted ? "Time is accepted" : "Time is declined"}</p>
                )

            }
        </div>
    );
};

export default BookingCard;