import {CompanyCard} from "@/home/features/companySearch/CompanyCard";

type Props = {
    companies: ICompany[]
}

export function CompanyList ({companies}: Props) {
        return (
        <div>
            {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
            ))}
        </div>
    );
}
