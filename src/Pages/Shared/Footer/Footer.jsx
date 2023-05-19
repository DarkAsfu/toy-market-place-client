import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/toycarlogo.png'
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import fb from '../../../../src/assets/facebook .png'
import tw from '../../../../src/assets/twitter.png'
import insta from '../../../../src/assets/instagram.png'
import yt from '../../../../src/assets/youtube.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
                <img src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Quick Links</span>
                <Link to='/'>Home</Link>
                <Link to='/allToys'>All Toys</Link>
                <Link to='/myToys'>My Toys</Link>
                <Link to='/addToys'>Add A Toys</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>
            <div>
                <span className="footer-title">Adress</span>
                <a className="link link-hover">Mirpur, Dhaka</a>
                <a className="link link-hover">East Shawrapara</a>
            </div>
            <div>
                <span className="footer-title">Join With us</span>
                <div className='flex'>
                    <img className='w-8' src={fb} alt="" />
                    <img className='w-8 ml-4' src={tw} alt="" />
                    <img className='w-8 ml-4' src={insta} alt="" />
                    <img className='w-8 ml-4' src={yt} alt="" />
                </div>
            </div>

        </footer>
    );
};

export default Footer;