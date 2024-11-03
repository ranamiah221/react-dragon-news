import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import NewsDetails from "../../Pages/NewDetails/NewsDetails";


const PublicRoute = createBrowserRouter([
   {
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/news/:id',
            element:<NewsDetails></NewsDetails>,
            loader:({params})=>fetch('/public/news.json')
        }
        
    ]
   }

])


export default PublicRoute;