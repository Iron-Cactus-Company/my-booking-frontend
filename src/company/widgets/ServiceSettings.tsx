import { useState, ChangeEvent } from 'react';

type ServiceListProps = {
    services: ICompanyService[];
    saveChanges: (company: ICompanyService[]) => Promise<any>;
};

const ServiceSettings: React.FC<ServiceListProps> = ({ services, saveChanges }) => {
    const [currentServices, setCurrentServices] = useState<ICompanyService[]>(services);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleChange = (index: number, field: keyof ICompanyService) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let value: string | number = e.target.value;
        if (field === 'durationS') value = Number(value) * 60;

        const newServices = [...currentServices];
        newServices[index] = { ...newServices[index], [field]: value };
        setCurrentServices(newServices);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsEditing(false);
        await saveChanges(currentServices);
    };

    return (
        <div className="border rounded-lg p-6 mb-8 shadow-md">
            {currentServices.map((service, index) => (
                <div key={index} className="border-solid border-black mb-4 p-4">
                    <table className="mb-4">
                        <tbody>
                        <tr>
                            <td className="font-semibold text-left">Service Name:</td>
                            <td>
                                {isEditing ? (
                                    <input type="text" value={service.name} onChange={handleChange(index, 'name')} className="border rounded p-2" />
                                ) : (
                                    service.name
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Duration (min):</td>
                            <td>
                                {isEditing ? (
                                    <input type="number" value={service.durationS / 60} onChange={handleChange(index, 'durationS')} className="border rounded p-2" />
                                ) : (
                                    service.durationS / 60
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Description:</td>
                            <td>
                                {isEditing ? (
                                    <textarea value={service.description || ''} onChange={handleChange(index, 'description')} className="border rounded p-2" />
                                ) : (
                                    service.description
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Price:</td>
                            <td>
                                {isEditing ? (
                                    <input type="number" value={service.price} onChange={handleChange(index, 'price')} className="border rounded p-2" />
                                ) : (
                                    service.price
                                )}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            ))}
            <button
                onClick={isEditing ? handleSave : handleEdit}
                className="border-solid border-black bg-black text-white rounded-lg p-2"
            >
                {isEditing ? 'Save Changes' : 'Edit Services'}
            </button>
        </div>
    );
};

export default ServiceSettings;
