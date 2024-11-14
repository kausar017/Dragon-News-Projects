import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../Components/Error";
import CatagoryNews from "../pagas/CatagoryNews";


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
        path: "/news",
        element: <h1>News Layout</h1>
    },
    {
        path: "/auth",
        element: <h1>Login</h1>
    },
    {
        path: "*",
        element: <Error />
    },
]);

export default Router;
