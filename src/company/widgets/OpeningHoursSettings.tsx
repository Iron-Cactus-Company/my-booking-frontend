import React, { useState, ChangeEvent } from 'react';

// Define the OpeningHours type

type OpeningHoursProps = {
    oh: IOpeningHours;
    saveChanges: (company: IOpeningHours) => Promise<any>
};

const OpeningHoursSettings: React.FC<OpeningHoursProps> = ({ oh, saveChanges }) => {
    const [openingHours, setOpeningHours] = useState<IOpeningHours>(oh);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOpeningHours({ ...openingHours, [name]: value });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsEditing(false);
        await saveChanges(openingHours);
    };

    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const dayToDisplay = (day: string) => day.charAt(0).toUpperCase() + day.slice(1);

    return (
        <div style={{border: "1px solid grey", margin: "10px 20px"}}>
            <table>
                <tbody>
                {daysOfWeek.map(day => (
                    <tr key={day}>
                        <td>{day.charAt(0).toUpperCase() + day.slice(1)}:</td>
                        {isEditing ? (
                            <>
                                <td><input type="time" name={`${day}Start`}
                                           value={openingHours[`${day}Start` as keyof IOpeningHours]}
                                           onChange={handleChange}/></td>
                                <td><input type="time" name={`${day}End`}
                                           value={openingHours[`${day}End` as keyof IOpeningHours]}
                                           onChange={handleChange}/></td>
                            </>
                        ) : (
                            <>
                                <td>{openingHours[`${day}Start` as keyof IOpeningHours]}</td>
                                <td>{openingHours[`${day}End` as keyof IOpeningHours]}</td>
                            </>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                onClick={isEditing ? handleSave : handleEdit}
                style={{border:"1px solid black", backgroundColor: "black", color: "white", borderRadius: 20}}
            >
                {isEditing ? 'Save Changes' : 'Change Opening Hours'}
            </button>
        </div>
    );
};

export default OpeningHoursSettings;
