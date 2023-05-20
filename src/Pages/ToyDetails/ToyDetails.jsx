import { Link, useLoaderData } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";


const ToyDetails = () => {
    const singleToy = useLoaderData();
    console.log(singleToy);
    return (
        <div className=" w-8/12 mx-auto">
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
                    <div className="badge badge-outline text-xl p-4 mt-4">{singleToy.sellerName}</div>
                    <div className="badge badge-outline">{singleToy.email}</div>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Rating: </div>
                        <div className="badge badge-outline">{singleToy.rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;