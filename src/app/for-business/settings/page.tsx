'use client'

import { CompanyCard } from "@/company/entity/CompanyCard";
import { useGetCompaniesQuery } from "@/company";
import { useRouter, usePathname } from 'next/navigation';

export default function Companies() {
    const router = useRouter();
    const pathName = usePathname();
    const { data: dataCompanies } = useGetCompaniesQuery({});

    function navigateToDesiredCompany(slug: string) {
        router.push(pathName + "/" + slug);
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mb-4">
                Here you can see all your companies or add a new one
            </h1>

            {/*// @ts-ignore*/}
            {dataCompanies?.data?.map((c: ICompany) => (
                <div key={c.id} onClick={() => navigateToDesiredCompany(c.id)} className="w-1/4 mb-4 hover:cursor-pointer">
                    <CompanyCard company={c} showServices={false} />
                </div>
            ))}
        </div>
    );
}
