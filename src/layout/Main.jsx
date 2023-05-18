import { Outlet } from "react-router-dom";
import NabBar from "../Pages/Shared/NavBar/NabBar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;