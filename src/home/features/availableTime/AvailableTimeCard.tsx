import {IAvailableTime} from "../../entity/IAvailableTime";
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
        <div style={{display: "flex", gap: "10px", marginBottom: "10px"}}>
            <p>{new Date(availableTime.from * 1000).toLocaleString()} - {new Date(availableTime.to * 1000).toLocaleString()}</p>
            <button
                onClick={openClientForm}
                style={{display: isFormVisible ? "none" : "block",  border: "1px solid black", backgroundColor: "black", color: "white", borderRadius: 20}}
            >
                Book
            </button>
            <div
                style={isFormVisible ?
                    {maxHeight: "500px"} :
                    {overflow: "hidden", transition: "max-height 0.3s ease-out", maxHeight: 0}
                }
            >
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={client.name} placeholder="Name" onChange={handleInputChange}/>
                    <input type="email" name="email" value={client.email} placeholder="Email"
                           onChange={handleInputChange}/>
                    <input type="tel" name="phone" value={client.phone} placeholder="Phone"
                           onChange={handleInputChange}/>
                    <button
                        type="submit"
                        style={{border: "1px solid black", backgroundColor: "black", color: "white", borderRadius: 20}}
                    >
                        Book
                    </button>
                </form>
            </div>
        </div>
    );
};