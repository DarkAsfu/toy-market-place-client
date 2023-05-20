import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const TableToys = ({ toys }) => {
    const { user } = useContext(AuthContext);
    const showToast = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'You have to log in first to view details'
        })
    }
    console.log(toys);
    return (
        <>
            <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <img src={toys?.picture} className="w-40 rounded-md mr-4" alt="" />
                        <div className="text-left font-bold">{toys?.name}</div>

                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{toys?.sellerName}</div>
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
                    {user ?
                        <Link to={`/toydetails/${toys?._id}`} className="btn btn-primary">Details</Link> : <Link to={`/toydetails/${toys?._id}`} onClick={showToast} className="btn btn-primary">Details</Link>
                    }
                </td>
            </tr>
        </>
    );
};

export default TableToys;