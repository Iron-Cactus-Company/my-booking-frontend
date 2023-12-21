import React from 'react';

const contactMethods = {
    email: 'beauty-salon@gmail.com',
    phone: '045623037',
    address: 'Aleksanterinkatu, Lahti',
};

const ContactPage = () => {
    return (
        <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="mb-6">
                Have questions or need assistance? We're here to help!
            </p>
            <div className="mb-6 text-left inline-block">
                <p className="mb-2 font-bold text-gray-700">
                    Feel free to reach out to us via the following contact methods:
                </p>
                <ul className="list-disc pl-6 text-gray-800">
                    {Object.entries(contactMethods).map(([method, value]) => (
                        <li key={method} className="mb-2">
                            <span className="font-bold">
                                {method.charAt(0).toUpperCase() + method.slice(1)}:
                            </span> {value}
                        </li>
                    ))}
                </ul>
            </div>
            <p className="text-gray-600">
                We look forward to hearing from you!
            </p>
        </div>
    );
};

export default ContactPage;
