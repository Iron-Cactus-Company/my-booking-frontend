import React, { useState } from 'react';

type InputComponentProps = {
    onSearch: (companyName: string) => Promise<any>;
};

export const CompanyNameInput: React.FC<InputComponentProps> = ({ onSearch }) => {
    const [companyName, setCompanyName] = useState<string>('');

    const handleSearch = () => {
        onSearch(companyName);
    };

    return (
        <div>
            <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
            />
            <button
                onClick={handleSearch}
                style={{border:"1px solid black", backgroundColor: "black", color: "white", borderRadius: 20}}
            >
                Search
            </button>
        </div>
    );
};
