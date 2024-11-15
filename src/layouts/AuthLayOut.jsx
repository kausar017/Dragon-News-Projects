import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayOut = () => {
    return (
        <div className="font-Poppins bg-base-200">
            <header className="pt-5 w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayOut;