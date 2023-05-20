import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysTable from "../MyToysTable/MyToysTable";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    useTitle('ToyCarTrader | MyToys')
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/mytoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [url])
    console.log(myToys);
    return (
        <div>
        <section className="antialiased bg-gray-100 text-gray-600 py-10 mb-10 px-4">
            <div className="flex flex-col justify-center">

                <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800 w-1/2">My Toys</h2>
                        <form className="input-group flex justify-end">
                            <input type="text" placeholder="Search by name" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </form>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Toy Name & image</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Seller name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Category</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Price</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Rating</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Quantity</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {
                                        myToys.map(toys => <MyToysTable key={toys._id} toys={toys} myToys={myToys} setMyToys={setMyToys}></MyToysTable>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default MyToys;