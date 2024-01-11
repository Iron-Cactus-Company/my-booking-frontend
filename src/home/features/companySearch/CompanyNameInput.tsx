import { useState } from 'react';

type InputComponentProps = {
    onSearch: (companyName: string) => Promise<any>;
};

export const CompanyNameInput: React.FC<InputComponentProps> = ({ onSearch }) => {
    const [companyName, setCompanyName] = useState<string>('');

    const handleSearch = () => {
        onSearch(companyName);
    };

    return (
        <div className="mb-8">
            <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
                className="border rounded p-2 mr-2"
            />
            <button
                onClick={handleSearch}
                className="border-solid border-black bg-black text-white rounded-lg p-2"
            >
                Search
            </button>
        </div>
    );
};
