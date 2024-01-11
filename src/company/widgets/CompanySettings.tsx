import { ChangeEvent, useState } from 'react';

type CompanySettingsProps = {
    company: ICompany;
    saveChanges: (company: IUpdateCompany) => Promise<any>;
};

export const CompanySettings: React.FC<CompanySettingsProps> = ({ company, saveChanges }) => {
    const [currentCompany, setCurrentCompany] = useState<ICompany>(company);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCurrentCompany({ ...currentCompany, [name]: value });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsEditing(false);
        await saveChanges(currentCompany);
    };

    return (
        <div className="border rounded-lg p-6 mb-8 shadow-md">
            <table className="mb-4">
                <tbody>
                {isEditing ? (
                    <>
                        <tr>
                            <td className="font-semibold text-left">Company Name:</td>
                            <td>
                                <input type="text" name="name" value={currentCompany.name} onChange={handleChange} className="border rounded p-2" />
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Email:</td>
                            <td>
                                <input type="email" name="email" value={currentCompany.email} onChange={handleChange} className="border rounded p-2" />
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Phone:</td>
                            <td>
                                <input type="tel" name="phone" value={currentCompany.phone} onChange={handleChange} className="border rounded p-2" />
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Address:</td>
                            <td>
                                <input type="text" name="address" value={currentCompany.address} onChange={handleChange} className="border rounded p-2" />
                            </td>
                        </tr>
                        {currentCompany.description !== undefined && (
                            <tr>
                                <td className="font-semibold text-left">Description:</td>
                                <td>
                                    <textarea name="description" value={currentCompany.description} onChange={handleChange} className="border rounded p-2" />
                                </td>
                            </tr>
                        )}
                    </>
                ) : (
                    <>
                        <tr>
                            <td className="font-semibold text-left">Company Name:</td>
                            <td>{company.name}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Email:</td>
                            <td>{company.email}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Phone:</td>
                            <td>{company.phone}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-left">Address:</td>
                            <td>{company.address}</td>
                        </tr>
                        {company.description && (
                            <tr>
                                <td className="font-semibold text-left">Description:</td>
                                <td>{company.description}</td>
                            </tr>
                        )}
                    </>
                )}
                </tbody>
            </table>
            <button
                onClick={isEditing ? handleSave : handleEdit}
                className="border-solid border-black bg-black text-white rounded-lg p-2"
            >
                {isEditing ? 'Save Changes' : 'Change Company Info'}
            </button>
        </div>
    );
};
