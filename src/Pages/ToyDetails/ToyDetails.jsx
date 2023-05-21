import { Link, useLoaderData } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy);
    return (
        <div className="p-4 md:w-8/12 mx-auto">
            <ScrollToTop></ScrollToTop>
            <Link to='/allToys' className="mb-8  btn btn-outline text-blue-700"> Back to All toys </Link>
            <div className=" bg-base-100 border mb-10">
                <figure><img className="w-full" src={singleToy.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        {singleToy.name}
                        <div className="badge badge-primary ">{singleToy.category}</div>
                    </h2>
                    <p>{singleToy.description}</p>
                    <p className="font-bold">Price: ${singleToy.price}</p>
                    <p className="font-bold">Quantity: {singleToy.availableQuantity
                    }</p>
                    <div className="badge badge-outline text-sm p-4 mt-4">{singleToy.sellerName}</div>
                    <div className="badge badge-outline">{singleToy.email}</div>

                    <div className="card-actions md:justify-end">
                        <div className="badge badge-outline">Rating: </div>
                        <div><Rating
                        placeholderRating={singleToy.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;