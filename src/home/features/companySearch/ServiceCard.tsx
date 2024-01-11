export function ServiceCard ({service}: {service: ICompanyService}) {
    return (
        <div className="border rounded-lg p-6 mb-8 shadow-md">
            <div className="border-b pb-4 mb-4">
                <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-2">{service.description}</p>
            </div>

            <table className="mb-4">
                <tbody>
                <tr>
                    <td className="font-semibold text-left">Duration (min):</td>
                    <td className="text-left">{service.durationS / 60}</td>
                </tr>
                <tr>
                    <td className="font-semibold text-left">Price:</td>
                    <td className="text-left">{service.price}</td>
                </tr>
                </tbody>
            </table>

            <button
                className="border-solid border-black bg-black text-white rounded-lg p-2"
            >
                Show available time (redirect to the calendar page, where client can choose & make a reservation)
            </button>
        </div>
    );
};
