import { useState } from "react";
import { IBooking } from "../../entity/booking";
import { BookingStatusType } from "@/home/entity/bookingStatusType";

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
        setCurrentBooking((item) => {
            return { ...item, status: BookingStatusType.Accepted };
        });
    };

    const handleDecline = async () => {
        setIsButtonVisible(false);
        await cancelBooking(booking.id);
        setCurrentBooking((item) => {
            return { ...item, status: BookingStatusType.Cancelled };
        });
    };

    const timestampToString = (timestamp: number) =>
        new Date(timestamp * 1000).toLocaleString();

    return (
        <div className="mb-8">
            <div className="border rounded-lg p-6 shadow-md">
                <table className="mb-4">
                    <tbody>
                    <tr>
                        <td className="font-semibold text-left">Date: </td>
                        <td className="text-left">
                            {timestampToString(booking.start)} - {timestampToString(booking.end)}
                        </td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-left">Service ID: </td>
                        <td className="text-left">{booking.serviceId}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-left">Client Name: </td>
                        <td className="text-left">{booking.client.name}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-left">Client Email: </td>
                        <td className="text-left">{booking.client.email}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-left">Client Phone: </td>
                        <td className="text-left">{booking.client.phone}</td>
                    </tr>
                    </tbody>
                </table>

                {isButtonVisible && booking.status === BookingStatusType.Pending ? (
                    <>
                        <button
                            onClick={handleAccept}
                            className="border-solid border-black bg-blue-500 text-white rounded-lg p-2 mr-2"
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleDecline}
                            className="border-solid border-black bg-red-500 text-white rounded-lg p-2"
                        >
                            Decline
                        </button>
                    </>
                ) : (
                    <p className="text-green-500 font-semibold">
                        {currentBooking.status === BookingStatusType.Accepted
                            ? "Time is accepted"
                            : "Time is declined"}
                    </p>
                )}
            </div>
        </div>
    );
};

export default BookingCard;
