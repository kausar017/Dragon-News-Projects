
import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className="logo flex flex-col justify-center items-center gap-2  py-4">
                <img className='w-[417px] mx-auto' src={logo} alt="" />
                <p className='text-gray-400'>Journalism Without Fear or Favour</p>
                <p>
                    {
                        moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
                    }
                </p>
            </div>
        </div>
    );
};

export default Header;