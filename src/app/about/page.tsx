import React from 'react';

// Placeholder data for opening hours in European time format
const openingHours = {
    Monday: { start: '09:00', end: '18:00' },
    Tuesday: { start: '09:00', end: '18:00' },
    Wednesday: { start: '09:00', end: '18:00' },
    Thursday: { start: '09:00', end: '18:00' },
    Friday: { start: '09:00', end: '18:00' },
    Saturday: { start: '10:00', end: '16:00' },
    Sunday: { start: 'Closed', end: 'Closed' },
};


const companyObject = {
   description: ' Welcome to our beauty salon! Learn more about our story and services.'
};

const AboutPage = () => {
    return (
        <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="mb-6">
                {companyObject.description}
            </p>


            {/* Opening Hours Block */}
            <div className="mb-6 text-left inline-block">
                <p className="mb-2 font-bold text-gray-700">Opening Hours:</p>
                <ul className="list-disc pl-6 text-gray-800">
                    {Object.entries(openingHours).map(([day, hours]) => (
                        <li key={day} className="mb-2">
                            <span className="font-bold">{day}:</span> {hours.start.toLocaleLowerCase() === 'Closed'.toLowerCase() ? 'Closed' : `${hours.start} - ${hours.end}`}
                        </li>
                    ))}
                </ul>
            </div>
            <p className="text-gray-600">
                We look forward to serving you!
            </p>
        </div>
    );
};

export default AboutPage;
