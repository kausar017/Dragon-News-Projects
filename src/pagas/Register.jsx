import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-[90vh] flex flex-col justify-center items-center">
            <div className="card rounded-none bg-base-100 w-full max-w-xl shrink-0 p-10">
                <h2 className="text-2xl font-bold text-center my-4">Register your account</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input rounded-none bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" placeholder="Enter your password" className="input rounded-none bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input rounded-none bg-base-200" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input rounded-none bg-base-200" required />
                    </div>

                    <div className="form-control">
                        <label className="flex gap-2 items-center mt-2 cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text text-start">Accept Term & Conditions</span>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <div>
                        <p className="text-center">Dont’t Have An Account ? <Link to={'/auth/login'} className="text-red-600">Login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;