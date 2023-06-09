import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";

const Login = () => {
    const { handleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    useTitle('ToyCarTrader | Login')
    const signIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        handleSignIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('Successfully login!!');
                setError('');
                form.reset();
                navigate("/")
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess('')
            })
    }
    return (<>
        <ScrollToTop></ScrollToTop>
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 py-20">
                    <div className="text-center px-14">
                        <h1 className="text-4xl font-bold mb-2">Please Login !</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, officiis.</p> */}
                        <img src="https://i.ibb.co/Prv3X1W/Pngtree-purple-office-ui-registration-illustration-4978562.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">
                        <form onSubmit={signIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className="label-text-alt p-8">Are you new? please <Link to='/register' className='text-blue-400'>Register</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                        <SocialLogin></SocialLogin>
                        <small className='text-red-600 font-bold px-6 pb-3'>{error}</small>
                        <small className='text-green-600 font-bold px-6 pb-3'>{success}</small>
                    </div>
                </div>
            </div>
        </div>
    </>

    );
};

export default Login;