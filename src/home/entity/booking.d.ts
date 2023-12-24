import {BookingStatusType} from "@/home/entity/bookingStatusType";

export declare type IBooking = {
    id: id;

    start: number;
    end: number;
    status: BookingStatusType;

    serviceId: string;
    client: IClient;
}