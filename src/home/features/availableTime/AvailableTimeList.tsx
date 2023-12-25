import {IAvailableTime} from "@/home/entity/IAvailableTime";
import {AvailableTimeCard} from "@/home/features/availableTime/AvailableTimeCard";

const availableTimeLoaded: IAvailableTime[] = [
    {
        serviceId: '10567-3456-3456-23489',
        from: 3334345,
        to: 33343456
    },

    {
        serviceId: '10567-3456-3456-23489',
        from: 33343457,
        to: 3334345656
    }
];

type AvailableTimeList = {
    serviceId: string,
    from: number,
    to: number
}

export const AvailableTimeList: React.FC<AvailableTimeList> = ({ serviceId, from, to }) => {

    //TODO: API load available times list for the specified period

    return (
        <div>
            {availableTimeLoaded.map((time, index) => (
                <AvailableTimeCard key={index} availableTime={time} />
            ))}
        </div>
    );
};