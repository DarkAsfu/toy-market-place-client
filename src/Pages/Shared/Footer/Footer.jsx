import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/toycarlogo.png'
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import fb from '../../../../src/assets/facebook .png'
import tw from '../../../../src/assets/twitter.png'
import insta from '../../../../src/assets/instagram.png'
import yt from '../../../../src/assets/youtube.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
const Footer = () => {
    useEffect(() => {
        AOS.init({
          // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
        });
      }, []);
      useEffect(() => {
        AOS.refresh();
      });
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