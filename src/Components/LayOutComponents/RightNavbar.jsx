import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div> 
            {/* socialLogin copmonents */}
            <SocialLogin></SocialLogin>
            {/* FindUs Components */}
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;