import Image from "next/image";
import hero1 from "../img/banner-1-copyright1.jpg";
import hero2 from "../img/banner-2-copyright.jpg";
import hero3 from "../img/banner-3-copyright.jpg";
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay, Pagination]);

function BannerSlideMobile() {
    return (
        <Swiper
            pagination={true}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className=" h-full w-full"
        >
           
            <SwiperSlide className="w-full">
                <div className=" w-full h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero1.src})` }}>
                    <div className="" >
                        <div className="text-center absolute top-1/4 left-0  text-white mx-0 bg-pink-600 h-40">
                            <p className='font-black uppercase text-[60px] tracking-widest -mt-7 mr-0 text-right'> Tarot <br /><span className="mt-0"> mini kits</span></p>
                        </div>
                        <div className="flex justify-between items-center absolute top-2/3 left-10">
                            <div className="mr-10">
                                <p className="text-white font-semibold tracking-widest uppercase text-titleSm mt-2">
                                    $<span className="text-[40px]">79.00</span></p>
                            </div>
                            <div>
                                <button className="bg-black text-white px-7 py-2.5 text-[25px] font-semibold ">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
                <div className=" w-full h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero2.src})` }}>
                <div className="">
              <div className="text-center absolute top-1/4 left-0  text-white mx-0 bg-[#F2D71F] h-40">
                <p className='font-black uppercase text-[60px] tracking-widest -mt-7 mr-0 text-right'>  E-Liquids <br /><span className="mt-0"> Bundles</span></p>
              </div>
              <div className="flex justify-between items-center absolute top-2/3 left-10">
                <div className="mr-10">
                  <p className="text-black font-bold tracking-widest uppercase text-titleSm mt-2">
                    $<span className="text-[40px]">20.00</span></p>
                </div>
                <div>
                  <button className="bg-black text-white px-7 py-2.5 text-[25px] font-semibold ">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-full">
                <div className=" w-full h-screen bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero3.src})` }}>
                <div className="">
              <div className="text-center absolute top-1/4 left-0  text-white mx-0 bg-[#F2D71F] h-40">
                <p className='font-black uppercase text-[60px] tracking-widest -mt-7 mr-0 text-right'> Vaporesso <br /><span className="mt-0"> vaco one</span></p>
              </div>
              <div className="flex justify-between items-center absolute top-2/3 left-10">
                <div className="mr-20">
                  <p className="text-black font-bold tracking-widest uppercase text-titleSm mt-2">
                    $<span className="text-[40px]">56.00</span></p>
                </div>
                <div>
                  <button className="bg-black text-white px-7 py-2.5 text-[25px] font-semibold ">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
                </div>
            </SwiperSlide>
        </Swiper >
    )
}
export default BannerSlideMobile;