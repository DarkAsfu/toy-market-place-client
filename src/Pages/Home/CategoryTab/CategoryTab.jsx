import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
const CategoryTab = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('car');
    useEffect(()=>{
        fetch(`http://localhost:5000/allToy/${activeTab}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div className="mb-10">
            <Tabs>
                <TabList className="min-w-fit mx-auto font-bold text-center md:text-2xl  mb-10 border">
                    <Tab onClick={()=>setActiveTab('car')}>Car Toys</Tab>
                    <Tab onClick={()=>setActiveTab('bus')}>Bus Toys</Tab>
                    <Tab onClick={()=>setActiveTab('truck')}>Truck Toys</Tab>

                </TabList>

                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Car</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-2 gap-20">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Bus</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-2 gap-20">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Truck!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </TabPanel>
                

            </Tabs>
        </div>
    );
};

export default CategoryTab;