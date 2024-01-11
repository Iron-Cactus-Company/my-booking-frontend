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
    availableTime: IAvailableTime
}

export const AvailableTimeList: React.FC<AvailableTimeList> = ({ availableTime }) => {

    //TODO: API load available times list for the specified period
    //http://localhost:5000/api/AvailableHours POST + IAvailableTime (availableTime from props)
    return (
        <div>
            {availableTimeLoaded.map((time, index) => (
                <AvailableTimeCard key={index} availableTime={time} />
            ))}
        </div>
    );
};