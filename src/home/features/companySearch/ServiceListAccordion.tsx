import {ServiceCard} from "@/home/features/companySearch/ServiceCard";
import {useState} from "react";

const servicesLoaded: ICompanyService[] = [
    {
        id: '34567-3456-3456-23456',
        name: "Haircut 15 min",
        durationS: 900,
        price: 23,
        description: "This is a haircut 15 min",
        companyId: '34567-3456-3456-23456'
    },
    {
        id: '34567-3456-3456-23456',
        name: "Haircut 25 min",
        durationS: 1500,
        price: 40,
        description: "This is a haircut 25 min",
        companyId: '34567-3456-3456-23456'
    },
    {
        id: '34567-3456-3456-23456',
        name: "Haircut 45 min",
        durationS: 2700,
        price: 70,
        description: "This is a haircut 45 min",
        companyId: '34567-3456-3456-23456'
    }
];

type ServiceListProps = {
    companyId: string;
};

export const ServiceListAccordion: React.FC<ServiceListProps> = ({ companyId }) => {
    const [showServices, setShowServices] = useState(false);

    //TODO: API get all services by companyId
    async function getCompanyServices(){

    }

    async function loadServicesAndShow(){
        const servicesFound = await getCompanyServices();

        setShowServices(true);
    }

    function hideServices(){
        setShowServices(false);
    }

    return (
        <div>
            <button
                onClick={() => showServices ? hideServices() : loadServicesAndShow()}
                style={{border:"1px solid black", backgroundColor: "black", color: "white", borderRadius: 20}}
            >
                {showServices ? "Hide" : "Show services"}
            </button>

            <div
                style={showServices ?
                    {maxHeight: "1000px"} :
                    {overflow: "hidden", transition: "max-height 0.3s ease-out", maxHeight: 0}
                }
            >
                {servicesLoaded.map((service, index) => (
                    <ServiceCard key={index} service={service}/>
                ))}
            </div>
        </div>

    );
};