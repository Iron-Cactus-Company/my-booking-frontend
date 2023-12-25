import {CompanyCard} from "@/home/features/companySearch/CompanyCard";

export const CompanyList: React.FC<{ companies: ICompany[] }> = ({ companies }) => {
    return (
        <div>
            {companies.map((company) => (
                <CompanyCard key={company.email} company={company} />
            ))}
        </div>
    );
};