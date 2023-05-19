const TableToys = ({ toys }) => {
    console.log(toys);
    return (
        <>
            <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="font-medium text-gray-800">{toys?.sellerName}</div>
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{toys?.name}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{toys?.category}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">${toys?.price}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left text-sm text-green-500">{toys?.availableQuantity}
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap text-center">
                    <button className="btn btn-ghost text-left text-blue-500">Details</button>
                </td>
            </tr>
        </>
    );
};

export default TableToys;