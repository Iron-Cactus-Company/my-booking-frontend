import React from "react";

export const ServiceCard: React.FC<{ service: ICompanyService }> = ({ service }) => {
    return (
        <div style={{border: "1px solid grey", margin: "10px 20px"}}>
            <div key={service.id} style={{border: "1px solid black", margin: "10px 20px"}}>
                <table>
                    <tbody>
                    <tr>
                        <td>Service Name:</td>
                        <td>
                            {service.name}
                        </td>
                    </tr>
                    <tr>
                        <td>Duration (min):</td>
                        <td>
                            {service.durationS / 60}
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            {service.description}
                        </td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>
                            {service.price}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button
                style={{border:"1px solid black", backgroundColor: "black", color: "white", borderRadius: 20}}
            >
                Show available time (redirect to the calendar page, where client can choose & make a reservation)
            </button>
        </div>
    );
};