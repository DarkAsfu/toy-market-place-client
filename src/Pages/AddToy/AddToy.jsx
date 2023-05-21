import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const AddToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('ToyCarTrader | AddToy')
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = {
            name,
            picture:photoURL,
            sellerName,
            email: sellerEmail,
            availableQuantity:quantity,
            category,
            price,
            rating,
            description
        }
        console.log(toy);
        fetch('https://toy-car-trader-server-darkasfu.vercel.app/allToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Thank you!',
                    'Your toy is now available',
                    'success'
                  )
                  form.reset();
            }
        })
    }   
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <h1>ADD YOUR TOY</h1>

            <div className=" flex-shrink-0 mx-auto bg-[#F3F3F3] md:p-10 my-10">
                <div className="card-body ">
                    <form onSubmit={handleAddProduct}>
                        <div className="md:grid grid-cols-2 gap-4 space-y-4 md:space-y-0">
                            <div className="form-control">
                                <input type="text" name="photoURL" placeholder="Photo url link..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="sellerEmail" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <select
                                    id="category"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none input-bordered"
                                    name="category"

                                >                                    
                                    <option value="" >Select a category</option>
                                    <option value="car">Car toy</option>
                                    <option value="bus">Bus toy</option>
                                    <option value="truck">Truck toy</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="number" name="quantity" placeholder="Available quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-52 mt-4" name="description" placeholder="Detail description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn border-0 bg-[#FF3811] hover:bg-orange-500">Order Confirm</button> */}
                            <input className="btn border-0 bg-blue-500 hover:bg-blue-700" type="submit" value="ADD TOY" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;