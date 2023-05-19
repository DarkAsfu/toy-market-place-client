import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
const CategoryTab = () => {
    return (
        <div className="mb-10">
            <Tabs>
                <TabList className="w-10/12 md:w-2/5 mx-auto font-bold text-center text-2xl  mb-10 border">
                    <Tab>Car</Tab>
                    <Tab>Bus</Tab>
                    <Tab>Truck</Tab>

                </TabList>

                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Car</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
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
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Bus</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
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
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Truck!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
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