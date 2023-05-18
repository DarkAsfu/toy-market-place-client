import banner1 from '../../../../src/assets/banner/Banner1.jpg'
import banner2 from '../../../../src/assets/banner/Banner2.jpg'
import banner3 from '../../../../src/assets/banner/Banner3.jpg'
import banner4 from '../../../../src/assets/banner/Banner4.jpg'
// import banner5 from '../../../../src/assets/banner/Banner5.jpg'

const Banner = () => {
    
    return (
        
            <div className="carousel w-full h-[700px] ">
                <div id="slide1" className=" carousel-item relative w-full">
                    <img src={banner1} className="w-full md:rounded-xl" style={{ objectFit: 'cover' }}  />
                    <div className="absolute  h-full md:rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white  space-y-8  pt-28 md:px-96 text-center'>
                            <h2 className='text-6xl  font-bold md:space-x-4'>Discover an Exciting World of Toy Cars</h2>
                            <p>Explore a wide range of toy cars for kids of all ages. From remote-controlled cars to miniature collectibles, we have something for everyone.</p>
                            <div>
                                <button className="btn border-0 bg-blue-500 hover:bg-blue-700 mr-4">Discover more</button>
                                <button className="btn btn-outline text-white font-bold">Latest Toy</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                        <a href="#slide4" className="btn  opacity-60 text-white btn-circle">❮</a>
                        <a href="#slide2" className="btn  opacity-60 text-white btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full md:rounded-xl" style={{ objectFit: 'cover' }}  />
                    <div className="absolute  h-full md:rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white  space-y-8  pt-28 md:px-96 text-center'>
                            <h2 className='text-6xl  font-bold md:space-x-4'>Embark on Thrilling Toy Car Adventures</h2>
                            <p>Immerse yourself in thrilling adventures with our toy car playsets. Create your own race tracks and enjoy endless hours of fun and excitement.</p>
                            <div>
                                <button className="btn border-0 bg-blue-500 hover:bg-blue-700 mr-4">Discover more</button>
                                <button className="btn btn-outline text-white font-bold">Latest Toy</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                        <a href="#slide1" className="btn  opacity-60 text-white btn-circle">❮</a>
                        <a href="#slide3" className="btn  opacity-60 text-white btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full md:rounded-xl" style={{ objectFit: 'cover' }}  />
                    <div className="absolute  h-full md:rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white  space-y-8  pt-28 md:px-96 text-center'>
                            <h2 className='text-6xl  font-bold md:space-x-4'>Collectible Masterpieces for Toy Car Enthusiasts</h2>
                            <p> Dive into the world of collectible toy cars. Discover rare and limited-edition models that will captivate any enthusiast or collector.</p>
                            <div>
                                <button className="btn border-0 bg-blue-500 hover:bg-blue-700 mr-4">Discover more</button>
                                <button className="btn btn-outline text-white font-bold">Latest Toy</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between gap-10 transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                        <a href="#slide2" className="btn  opacity-60 text-white btn-circle">❮</a>
                        <a href="#slide4" className="btn  opacity-60 text-white btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full md:rounded-xl" style={{ objectFit: 'cover' }} />
                    <div className="absolute h-full md:rounded-xl left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white  space-y-8  pt-28 md:px-96 text-center">
                            <h2 className="text-6xl font-bold md:space-x-4">Foster Learning and Creativity with Educational Toy Cars</h2>
                            <p>Help children develop essential skills while having fun and engaging in imaginative play with our educational toy cars.</p>
                            <div>
                                <button className="btn border-0 bg-blue-500 hover:bg-blue-700 mr-4">Discover more</button>
                                <button className="btn btn-outline text-white font-bold">Latest Toy</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                        <a href="#slide3" className="btn opacity-60 text-white btn-circle">❮</a>
                        <a href="#slide1" className="btn opacity-60 text-white btn-circle">❯</a>
                    </div>
                </div>
            </div>

      
    );
};

export default Banner;