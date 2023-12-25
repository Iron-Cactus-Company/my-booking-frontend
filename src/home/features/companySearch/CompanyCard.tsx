import {ServiceListAccordion} from "@/home/features/companySearch/ServiceListAccordion";
import React from "react";

export const CompanyCard: React.FC<{ company: ICompany }> = ({ company }) => {

    return (
        <div style={{border: "1px solid grey", margin: "10px 20px"}}>
            <div key={company.id} style={{border: "1px solid black", margin: "10px 20px"}}>
                <table>
                    <tbody>
                    <tr>
                        <td>Company Name: </td>
                        <td>
                            {company.name}
                        </td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>
                            {company.email}
                        </td>
                    </tr>
                    <tr>
                        <td>Phone: </td>
                        <td>
                            {company.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>
                            {company.address}
                        </td>
                    </tr>
                    <tr>
                        <td>Description: </td>
                        <td>
                            {company.description}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <ServiceListAccordion companyId={company.id}/>
        </div>
    )
    ;
};