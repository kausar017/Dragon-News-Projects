import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../Components/Error";
import CatagoryNews from "../pagas/CatagoryNews";
import AuthLayOut from "../layouts/AuthLayOut";
import Login from "../pagas/Login";
import Register from "../pagas/Register";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/01" />
            },
            {
                path: "category/:id",
                element: <CatagoryNews></CatagoryNews>,
                loader: ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news/:id",
        element: <h1>News Layout</h1>
    },
    {
        path: "/auth",
        element: <AuthLayOut></AuthLayOut>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <Error />
    },
]);

export default Router;
