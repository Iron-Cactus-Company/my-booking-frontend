'use client'
import { useState } from 'react';
import Image from "next/image";

const data = [
    { id: 1, name: 'Haircut', description: 'Refresh your look with a stylish haircut.', duration: '1 hour', price: '€50', image: '/images/haircut.jpg' },
    { id: 2, name: 'Coloring', description: 'Add a pop of color with our professional hair coloring service.', duration: '2 hours', price: '€75', image: '/images/coloring.jpg' },
    { id: 3, name: 'Relaxing Massage', description: 'Indulge in a 1.5-hour massage for ultimate relaxation.', duration: '1.5 hours', price: '€60', image: '/images/massage.jpg' },
    { id: 4, name: 'Complete Makeover', description: 'Transform your appearance with a comprehensive 3-hour makeover.', duration: '3 hours', price: '€100', image: '/images/makeover.jpg' },
    { id: 5, name: 'Glamorous Styling', description: 'Experience glamorous styling with our 2.5-hour session.', duration: '2.5 hours', price: '€90', image: '/images/styling.jpg' },
];

const ServicesPage = () => {
    const [services, setServices] = useState(data);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.id} className="bg-white rounded-lg shadow-lg p-6">
                        <Image  style={{width: "400px" , height : "400px"}} src={service.image} width={400} height={400} alt={service.name} className="mb-4 rounded-lg" />
                        <h2 className="text-xl font-bold mb-2">{service.name}</h2>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Duration: {service.duration}</p>
                            <p className="text-green-600 font-bold">{service.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
