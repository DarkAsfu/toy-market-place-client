import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";



const ToyCard = ({ toy }) => {
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
    return (
        <div>
            <h1></h1>
            <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2 items-center justify-center">
                <figure className="w-full"><img className="w-full h-56" src={toy.picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <div className="card-actions justify-end">
                        {user ?
                            <Link to={`/toydetails/${toy?._id}`}  className="btn btn-primary">Details</Link> : <Link to={`/toydetails/${toy?._id}`} onClick={showToast} className="btn btn-primary">Details</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;