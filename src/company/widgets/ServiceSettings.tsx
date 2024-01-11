import React, { useState, ChangeEvent } from 'react';

type ServiceListProps = {
    services: ICompanyService[];
    saveChanges: (company: ICompanyService[]) => Promise<any>;
};

const ServiceSettings: React.FC<ServiceListProps> = ({ services, saveChanges }) => {
    const [currentServices, setCurrentServices] = useState<ICompanyService[]>(services);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleChange = (index: number, field: keyof ICompanyService) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let value: string | number = e.target.value;
        if (field === 'durationS')
            value = Number(value) * 60;

        const newServices = [...services];
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
        <div style={{border: "1px solid grey", margin: "10px 20px"}}>
            {services.map((service, index) => (
                <div key={index} style={{border: "1px solid black", margin: "10px 20px"}}>
                    <table>
                        <tbody>
                        <tr>
                            <td>Service Name:</td>
                            <td>
                                {isEditing ? (
                                    <input type="text" value={service.name} onChange={handleChange(index, 'name')}/>
                                ) : (
                                    service.name
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Duration (min):</td>
                            <td>
                                {isEditing ? (
                                    <input type="number" value={service.durationS / 60}
                                           onChange={handleChange(index, 'durationS')}/>
                                ) : (
                                    service.durationS / 60
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>
                                {isEditing ? (
                                    <textarea value={service.description || ''}
                                              onChange={handleChange(index, 'description')}/>
                                ) : (
                                    service.description
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>
                                {isEditing ? (
                                    <input type="number" value={service.price} onChange={handleChange(index, 'price')}/>
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
                style={{border:"1px solid black", backgroundColor: "black", color: "white", borderRadius: 20}}
            >
                {isEditing ? 'Save Changes' : 'Edit Services'}
            </button>
        </div>
    );
};

export default ServiceSettings;
