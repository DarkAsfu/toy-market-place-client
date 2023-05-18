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
            <p className=''>or sign in with</p>
            <div className='flex gap-4 text-5xl justify-center mt-4'>
                <FcGoogle onClick={handleGoogleSignIn} className='bg-[#F5F5F8] p-3 rounded-full text-6xl'></FcGoogle>
            </div>
        </div>
    );
};

export default SocialLogin;