import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRouter from "./PrivateRouter";
import AllToy from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/toydetails/:id',
                element: <PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>,
                loader: ({params}) => fetch(`https://toy-car-trader-server-darkasfu.vercel.app/allToy/details/${params.id}`)
            },
            {
                path: '/alltoys',
                element: <AllToy></AllToy>,
                loader: ()=>fetch('https://toy-car-trader-server-darkasfu.vercel.app/allToy')
            },
            {
                path: '/addToys',
                element: <PrivateRouter><AddToy></AddToy></PrivateRouter>
            },
            {
                path: '/mytoys',
                element: <PrivateRouter><MyToys></MyToys></PrivateRouter>
            },
            {
                path: '/update/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`https://toy-car-trader-server-darkasfu.vercel.app/allToy/details/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router