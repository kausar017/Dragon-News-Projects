import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../Components/Error";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>
    },
    {
        path: '/auth',
        element: <h1>Login</h1>
    },
    {
        path: '*',
        element: <Error></Error>
    },
])

export default Router;