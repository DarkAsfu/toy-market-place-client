import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const handleGoogleSignIn =() =>{

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