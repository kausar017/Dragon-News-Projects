import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold mb-3">Login With </h1>
            <div className="flex flex-col gap-3">
                <button className="btn btn-outline btn-accent"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn btn-outline btn-success"><FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;