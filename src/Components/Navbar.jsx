import { Link, Navigate, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)

    return (
        <div className="flex justify-between items-center py-3">
            <div className={`${user && "btn btn-outline btn-primary"}`}>{user && user.email}</div>
            <div className="nav space-x-8">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'career'}>Career</Link>
            </div>
            <div className="logo flex items-center gap-x-2">
                <img src={userIcon} alt="" />
                {
                    user && user?.email ? <Link to={'/'} onClick={LogOut} className="text-white rounded-none bg-[#403F3F] px-8 py-2">Log-Out</Link> : <Link to={'/auth/login'} className="text-white rounded-none bg-[#403F3F] px-8 py-2">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;