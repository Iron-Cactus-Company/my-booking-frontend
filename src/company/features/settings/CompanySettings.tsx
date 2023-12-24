import React, {ChangeEvent, useState} from 'react';

type CompanySettingsProps = {
    company: ICompany;
    saveChanges: (company: ICompany) => Promise<any>
};

export const CompanySettings: React.FC<CompanySettingsProps> = ({ company, saveChanges } ) => {
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
        await saveChanges(company);
    };

    return (
        <div style={{border: "1px solid grey", margin: "10px 20px"}}>
            <table>
                <tbody>
                {isEditing ? (
                    <>
                        <tr>
                            <td>Company Name:</td>
                            <td><input type="text" name="name" value={company.name} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" name="email" value={company.email} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td><input type="tel" name="phone" value={company.phone} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td><input type="text" name="address" value={company.address} onChange={handleChange}/></td>
                        </tr>
                        {company.description !== undefined && (
                            <tr>
                                <td>Description:</td>
                                <td><textarea name="description" value={company.description} onChange={handleChange}/>
                                </td>
                            </tr>
                        )}
                    </>
                ) : (
                    <>
                        <tr>
                            <td>Company Name:</td>
                            <td>{company.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{company.email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{company.phone}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{company.address}</td>
                        </tr>
                        {company.description && <tr>
                            <td>Description:</td>
                            <td>{company.description}</td>
                        </tr>}
                    </>
                )}
                </tbody>
            </table>
            <button
                onClick={isEditing ? handleSave : handleEdit}
                style={{border:"1px solid black", backgroundColor: "black", color: "white", borderRadius: 20}}
            >
                {isEditing ? 'Save Changes' : 'Change Company Info'}
            </button>
        </div>
    );
};
