import banner1 from '../../../../src/assets/banner/Banner1.jpg'
import banner2 from '../../../../src/assets/banner/Banner2.jpg'
import banner3 from '../../../../src/assets/banner/Banner3.jpg'
import banner4 from '../../../../src/assets/banner/Banner4.jpg'
import banner5 from '../../../../src/assets/banner/Banner5.jpg'
import banner6 from '../../../../src/assets/banner/Banner6.jpg'

const Gallery = () => {
    return (
        <div className="py-24">
            <h1 className="text-4xl font-bold text-center  mb-4">Gallery</h1>
            <div className="divider mb-10 w-2/5 mx-auto">Show our photo gallery</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-0">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={banner1} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={banner2} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={banner3} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={banner4} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={banner5} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={banner6} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Gallery;