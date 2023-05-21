import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="text-center">
            <p className=''>-or sign in with-</p>
            <div onClick={handleGoogleSignIn}  className='flex gap-4 py-2 justify-center items-center mt-4 border mx-4'>
                <FcGoogle className='bg-[#F5F5F8] p-3 text-5xl rounded-full'></FcGoogle>
                <h2 className="text-md font-semibold">Google</h2>
            </div>
        </div>
    );
};

export default SocialLogin;