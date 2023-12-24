'use client'


import {useState} from "react";
import {CompanySettings} from "@/company/features/settings/CompanySettings";
import OpeningHoursSettings from "@/company/features/settings/OpeningHoursSettings";
import ServiceSettings from "@/company/features/settings/ServiceSettings";


//load company info
const companyLoaded: ICompany = {
    id: '34567-3456-3456-23456',
    name: "Haircutter 228",
    email: "cut.hair@mail.com",
    phone: "045 90 45 1234",
    address: "Rautatie 45 56",
    description: "This is an description of my company. Welcome!"
}

//load openingHours
const ohLoaded: IOpeningHours = {
    id: '34567-3456-3456-23456',
    mondayStart: "08:00",
    mondayEnd: "16:00",
    tuesdayStart: "08:00",
    tuesdayEnd: "16:00",
    wednesdayStart: "08:00",
    wednesdayEnd: "16:00",
    thursdayStart: "08:00",
    thursdayEnd: "16:00",
    fridayStart: "08:00",
    fridayEnd: "16:00",
    saturdayStart: "08:00",
    saturdayEnd: "16:00",
    sundayStart: "08:00",
    sundayEnd: "16:00",

    companyId: '34567-3456-3456-23456'
}

//load company services
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

export default function ForBusiness () {

    //TODO: API read company, openingHours and services
    const [company, setCompany] = useState<ICompany | null>(companyLoaded);
    const [oh, setOh] = useState<IOpeningHours | null>(ohLoaded);
    const [services, setServices] = useState<ICompanyService[] | null>(servicesLoaded);


    //TODO: API update company
    async function saveCompanyChanges(companyToSave: ICompany) {
        //logic for saving company info
        console.log("Company data Saved!");
    }

    //TODO: API update OpeningHours
    async function saveOpeningHours(ohToSave: IOpeningHours) {
        //logic for saving OpeningHours info
        console.log("Opening Hours data Saved!");
    }

    //TODO: API update services
    async function saveServices(servicesToSave: ICompanyService[]) {
        console.log("services data Saved!");
        for (let i=0; i<servicesToSave.length; i++) {
            const currentService = servicesToSave[i];
            //logic for saving service info
        }
    }

    return(
        <div>
            <h3>Company info</h3>
            <CompanySettings company={companyLoaded} saveChanges={saveCompanyChanges}/>
            <div>
                <h3>Opening hours</h3>
                <OpeningHoursSettings oh={ohLoaded} saveChanges={saveOpeningHours}/>
            </div>
            <div>
                <h3>Company services</h3>
                <ServiceSettings services={servicesLoaded} saveChanges={saveServices}/>
            </div>
        </div>
    )
}