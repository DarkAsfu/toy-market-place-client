import banner1 from '../../../../src/assets/banner/Banner1.jpg'
import banner2 from '../../../../src/assets/banner/Banner2.jpg'
import banner3 from '../../../../src/assets/banner/Banner3.jpg'
import banner4 from '../../../../src/assets/banner/Banner4.jpg'
import banner5 from '../../../../src/assets/banner/Banner5.jpg'
import banner6 from '../../../../src/assets/banner/Banner6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

    
const Gallery = () => {
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
        <div className="py-24">
            <h1 className="text-4xl font-bold text-center  mb-4">Gallery</h1>
            <div className="divider mb-10 w-2/5 mx-auto">Show our photo gallery</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-0">
                <div data-aos="fade-down-right">
                    <img className="h-auto max-w-full rounded-lg" src={banner1} alt=""/>
                </div>
                <div data-aos="fade-down">
                    <img className="h-auto max-w-full rounded-lg" src={banner2} alt=""/>
                </div>
                <div data-aos="fade-down-left">
                    <img className="h-auto max-w-full rounded-lg" src={banner3} alt=""/>
                </div>
                <div data-aos="fade-down-right">
                    <img className="h-auto max-w-full rounded-lg" src={banner4} alt=""/>
                </div>
                <div data-aos="fade-down">
                    <img className="h-auto max-w-full rounded-lg" src={banner5} alt=""/>
                </div>
                <div data-aos="fade-down-left">
                    <img className="h-auto max-w-full rounded-lg" src={banner6} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Gallery;