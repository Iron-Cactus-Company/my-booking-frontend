// import {ServiceListAccordion} from "@/home/features/companySearch/ServiceListAccordion";
// import React from "react";
//
//
// type Props = {
//     company: ICompany;
//     showServices: boolean
// }
//
// export const CompanyCard =  ({company, showServices = true}: Props) => {
//
//     return (
//         <div style={{border: "1px solid grey", margin: "10px 20px"}}>
//             <div key={company.id} style={{border: "1px solid black", margin: "10px 20px"}}>
//                 <table>
//                     <tbody>
//                     <tr>
//                         <td>Company Name: </td>
//                         <td>
//                             {company.name}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Email: </td>
//                         <td>
//                             {company.email}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Phone: </td>
//                         <td>
//                             {company.phone}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Address: </td>
//                         <td>
//                             {company.address}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Description: </td>
//                         <td>
//                             {company.description}
//                         </td>
//                     </tr>
//                     </tbody>
//                 </table>
//             </div>
//
//             {
//                 showServices &&  <ServiceListAccordion companyId={company.id}/>
//             }
//
//
//         </div>
//     )
//     ;
// };

import { ServiceListAccordion } from "@/home/features/companySearch/ServiceListAccordion";
import React from "react";

type Props = {
    company: ICompany;
    showServices?: boolean;
};

export const CompanyCard = ({ company, showServices = true }: Props) => {
    return (
        <div className="border rounded-lg p-6 mb-8 shadow-md" >
            <div className="border-b pb-4 mb-4">
                <h2 className="text-2xl font-semibold mb-2">{company.name}</h2>
                <p className="text-gray-600 mb-2">{company.description}</p>
            </div>

            <table className="mb-4">
                <tbody>
                <tr>
                    <td className="font-semibold text-left">Email:</td>
                    <td className="text-left">{company.email}</td>
                </tr>
                <tr>
                    <td className="font-semibold text-left">Phone:</td>
                    <td className="text-left">{company.phone}</td>
                </tr>
                <tr>
                    <td className="font-semibold text-left">Address:</td>
                    <td className="text-left">{company.address}</td>
                </tr>
                </tbody>
            </table>

            {showServices && <ServiceListAccordion companyId={company.id} />}
        </div>
    );
};


