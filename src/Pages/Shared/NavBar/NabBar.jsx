import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/toycarlogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const NabBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e.message))
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        {
            user &&
            <>
                <li><Link to='/mytoys'>My Toys</Link></li>
                <li><Link to='/addToys'>Add A Toys</Link></li>
            </>
        }
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="normal-case text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="group relative  flex justify-center">
                                <img className='w-12 rounded-full me-4 border-blue-200 border-4' src={user?.photoURL}></img>
                                <span className="w-32 text-center absolute top-14 scale-0 p-2 transition-all rounded bg-black text-xs text-white group-hover:scale-100">
                                    {
                                        user.displayName ? user.displayName : user.email
                                    }
                                </span>
                            </div>
                            <button onClick={handleLogOut} className="btn">Log out</button>
                        </> :
                        <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default NabBar;