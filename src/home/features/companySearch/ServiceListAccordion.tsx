import { useState } from "react";
import { ServiceCard } from "@/home/features/companySearch/ServiceCard";

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

    // TODO: API get all services by companyId
    // http://localhost:5000/api/Service?companyId=b182568f-1785-4f20-9e3d-ac38bd29b7e6 GET
    async function getCompanyServices() {
        // Your API call logic here
    }

    async function loadServicesAndShow() {
        const servicesFound = await getCompanyServices();
        setShowServices(true);
    }

    function hideServices() {
        setShowServices(false);
    }

    return (
        <div className="mb-8">
            <button
                onClick={() => (showServices ? hideServices() : loadServicesAndShow())}
                className="border-solid border-black bg-black text-white rounded-lg p-2"
            >
                {showServices ? "Hide" : "Show services"}
            </button>

            <div
                style={
                    showServices
                        ? { maxHeight: "1000px" }
                        : {
                            overflow: "hidden",
                            transition: "max-height 0.3s ease-out",
                            maxHeight: 0
                        }
                }
            >
                {servicesLoaded.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    );
};
