'use client'


import {useState} from "react";

interface ICompany {
    name: string;
    email: string;
    phone: string;
    address: string;
    description?: string;
}

interface IOpeningHours {
    mondayStart: string;
    mondayEnd: string;
    tuesdayStart: string;
    tuesdayEnd: string;
    wednesdayStart: string;
    wednesdayEnd: string;
    thursdayStart: string;
    thursdayEnd: string;
    fridayStart: string;
    fridayEnd: string;
    saturdayStart: string;
    saturdayEnd: string;
    sundayStart: string;
    sundayEnd: string;
}

interface IService {
    name: string;
    durationS: number;
    description?: string;
    price: number;
}


//load company info
const companyLoaded: ICompany = {
    name: "Haircutter 228",
    email: "cut.hair@mail.com",
    phone: "045 90 45 1234",
    address: "Rautatie 45 56",
    description: "This is an description of my company. Welcome!"
}

//load openingHours
const ohLoaded: IOpeningHours = {
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
    sundayEnd: "16:00"
}

//load company services
const servicesLoaded: IService[] = [
    {
        name: "Haircut 15 min",
        durationS: 900,
        price: 23,
        description: "This is a haircut 15 min"
    },
    {
        name: "Haircut 25 min",
        durationS: 1500,
        price: 40,
        description: "This is a haircut 25 min"
    },
    {
        name: "Haircut 45 min",
        durationS: 2700,
        price: 70,
        description: "This is a haircut 45 min"
    }
];

export default function ForBusiness () {

    const [company, setCompany] = useState<ICompany | null>(companyLoaded);
    const [oh, setOh] = useState<IOpeningHours | null>(ohLoaded);
    const [services, setServices] = useState<IService[] | null>(servicesLoaded);


    return(
        <div>
            <div>
                <h3>Company info</h3>
                {/*<input
                    placeholder="type a name"
                    type="text"
                    value={company.name || ""}
                    onChange={(e) => setName(e.target.value)}
                />*/}
                {/*<input>{company.email}</input>*/}
                {/*<input>{company.phone}</input>*/}
                {/*<input>{company.address}</input>*/}
                {/*<input>{company.description}</input>*/}
            </div>
            <div>
                <h3>Opening hours</h3>
                {/*<p>Monday {oh.mondayStart} - {oh.mondayEnd}</p>*/}
                {/*<p>Tuesday {oh.tuesdayStart} - {oh.tuesdayEnd}</p>*/}
                {/*<p>Wednesday {oh.wednesdayStart} - {oh.wednesdayEnd}</p>*/}
                {/*<p>Thursday {oh.thursdayStart} - {oh.thursdayEnd}</p>*/}
                {/*<p>Friday {oh.fridayStart} - {oh.fridayEnd}</p>*/}
                {/*<p>Saturday {oh.saturdayStart} - {oh.saturdayEnd}</p>*/}
                {/*<p>Sunday {oh.sundayStart} - {oh.sundayEnd}</p>*/}
            </div>
            <div>
                <h3>Company services</h3>
                <ul>
                    {/*{services.map(item => <li key={item.name+item.price+item.durationS}>{item.name} {item.durationS/60}min {item.price}€ {item.description}</li>)}*/}
                </ul>
            </div>
        </div>
    )
}