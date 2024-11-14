import { NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-3">
            <div></div>
            <div className="nav space-x-8">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'career'}>Career</NavLink>
            </div>
            <div className="logo flex items-center gap-x-2">
                <img src={userIcon} alt="" />
                <button className="text-white rounded-none bg-[#403F3F] px-8 py-2">Login</button>
            </div>
        </div>
    );
};

export default Navbar;