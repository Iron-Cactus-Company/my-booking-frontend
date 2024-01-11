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
        <div className="flex flex-wrap justify-center">

            {/*// @ts-ignore*/}
            {dataCompanies?.data?.map((c: ICompany) => (
                <div key={c.id} onClick={() => navigateToDesiredCompany(c.id)} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-5/12 p-4 hover:cursor-pointer">
                    <CompanyCard company={c} showServices={false} />
                </div>
            ))}
        </div>
    );
}
