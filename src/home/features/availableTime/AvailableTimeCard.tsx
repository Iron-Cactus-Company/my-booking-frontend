import {useState} from "react";

type AvailableTimeCardProps = {
    availableTime: IAvailableTime;
};

export const AvailableTimeCard: React.FC<AvailableTimeCardProps> = ({ availableTime }) => {
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [client, setClient] = useState<ICreateClient>({ name: '', email: '', phone: '' });

    const openClientForm = () => {
        setIsFormVisible(true);
    }

    //TODO: API create a new client
    //http://localhost:5000/api/Client POST + ICreateClient
    const createClient = async (clientToCreate: ICreateClient) => {

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };


    //TODO: API make a booking, for that u first create a client and when ICreateBooking with created clientId
    // serviceId u can get from availableTime prop

    //http://localhost:5000/api/booking POST + ICreateBooking
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const createdClient= await createClient(client);
        console.log(`Booking for: ${JSON.stringify(client)}`);
    };



    return (
        <div className="flex items-center  gap-4 mb-4 p-2">
            <div>
                <p className="text-lg font-semibold">
                    {new Date(availableTime.from * 1000).toLocaleString()} - {new Date(availableTime.to * 1000).toLocaleString()}
                </p>
            </div>
            <div>
                <button
                    onClick={openClientForm}
                    className={`border-solid border-black bg-black text-white rounded-lg p-2 ${isFormVisible ? 'hidden' : 'block'}`}
                >
                    Book
                </button>
                <div
                    className={`transition-max-height ease-out overflow-hidden max-h-0 ${isFormVisible ? 'max-h-500px' : ''}`}
                >
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input type="text" name="name" value={client.name} placeholder="Name" onChange={handleInputChange} className="border rounded p-2" />
                        <input type="email" name="email" value={client.email} placeholder="Email" onChange={handleInputChange} className="border rounded p-2" />
                        <input type="tel" name="phone" value={client.phone} placeholder="Phone" onChange={handleInputChange} className="border rounded p-2" />
                        <button
                            type="submit"
                            className="border-solid border-black bg-black text-white rounded-lg p-2"
                        >
                            Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};