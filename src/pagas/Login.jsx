import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provaider/AuthProvaider";

const Login = () => {

    const { singInuser, setUser } = useContext(AuthContext)


    const handalSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")

        singInuser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });

        // console.log(email, password);

    }

    return (
        <div className="min-h-[90vh] flex flex-col justify-center items-center">
            <div className="card rounded-none bg-base-100 w-full max-w-xl shrink-0 p-10">
                <h2 className="text-2xl font-bold text-center my-4">Login your account</h2>
                <form onSubmit={handalSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input rounded-none bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input rounded-none bg-base-200" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <div>
                        <p className="text-center">Dont’t Have An Account ? <Link to={'/auth/register'} className="text-red-600">Register</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;