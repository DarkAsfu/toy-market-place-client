import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ToyCard from "../ToyCard/ToyCard";
const CategoryTab = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('car');
    useEffect(() => {
        fetch(`http://localhost:5000/allToy/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])
    console.log(toys);
    return (
        <div className="mb-10">
            <Tabs>
                <TabList className="min-w-fit mx-auto font-bold text-center md:text-2xl  mb-10 border">
                    <Tab onClick={() => setActiveTab('car')}>Car Toys</Tab>
                    <Tab onClick={() => setActiveTab('bus')}>Bus Toys</Tab>
                    <Tab onClick={() => setActiveTab('truck')}>Truck Toys</Tab>

                </TabList>

                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <ToyCard toy={toy} key={toy._id}></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <ToyCard toy={toy} key={toy._id}></ToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="md:grid grid-cols-2 gap-20 px-4 md:px-0">
                        {
                            toys.map(toy => <ToyCard toy={toy} key={toy._id}></ToyCard>)
                        }
                    </div>

                </TabPanel>


            </Tabs>
        </div>
    );
};

export default CategoryTab;