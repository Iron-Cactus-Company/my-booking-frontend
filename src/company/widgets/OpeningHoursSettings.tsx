import { useState, ChangeEvent } from 'react';

type OpeningHoursProps = {
    oh: IOpeningHours;
    saveChanges: (company: IOpeningHours) => Promise<any>;
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
        <div className="border rounded-lg p-6 mb-8 shadow-md">
            <table className="mb-4">
                <tbody>
                {daysOfWeek.map(day => (
                    <tr key={day}>
                        <td className="font-semibold text-left">{dayToDisplay(day)}:</td>
                        {isEditing ? (
                            <>
                                <td><input type="time" name={`${day}Start`} value={openingHours[`${day}Start` as keyof IOpeningHours]} onChange={handleChange} className="border rounded p-2" /></td>
                                <td><input type="time" name={`${day}End`} value={openingHours[`${day}End` as keyof IOpeningHours]} onChange={handleChange} className="border rounded p-2" /></td>
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
                className="border-solid border-black bg-black text-white rounded-lg p-2"
            >
                {isEditing ? 'Save Changes' : 'Change Opening Hours'}
            </button>
        </div>
    );
};

export default OpeningHoursSettings;
