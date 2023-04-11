import Image from "next/image";
import hero1 from '../img/rev_home3_4.png'
import hero2 from '../img/rev_home6_1.jpg'
import hero3 from '../img/rev_home6_2.jpg'
import hero4 from '../img/rev_home6_3.png'
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Autoplay, Pagination]);

function BannerSlider() {
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
                <div className="flex w-full h-screen mx-0" style={{
                    backgroundImage: `url(${hero2.src})`,
                   
                }}>
                    <div className='text-left px-4 py-8 md:px-7 md:py-12 lg:px-14 lg:py-20 w-2/5'>
                        <p className='text-white font-semibold tracking-widest uppercase text-sm mt-2'>Custom Boxes</p>
                        <p className="text-white font-extrabold text-[28px] md:text-[32px] lg:text-[40px] mt-6">Customized bulk <br /> Paper bags</p>
                        <p className='text-white font-normal mt-6'>Turn your ideas into premium products that <br /> leave a lasting impression </p>
                        <button className="bg-white text-gray-800 px-7 py-2.5 text-[18px] font-semibold rounded-3xl mt-10">Shop now</button>
                    </div>
                    <div className="w-3/5">
                        <Image
                            src={hero4}
                            
                            alt="img"
                        />
                    </div>
                </div>
            </SwiperSlide> 
            <SwiperSlide className=" w-full">
                <div className="flex w-full h-screen mx-0" style={{
                    backgroundImage: `url(${hero3.src})`,
                }}>
                    <div className='text-left px-4 py-8 md:px-7 md:py-12 lg:px-14 lg:py-20 w-1/2'>
                        <p className='text-white font-semibold tracking-widest uppercase text-sm mt-2'>Custom Boxes</p>
                        <p className="text-white font-extrabold text-[28px] md:text-[32px] lg:text-[40px] mt-6">Customized bulk <br /> Paper bags</p>
                        <p className='text-white font-normal mt-6'>Turn your ideas into premium products that <br /> leave a lasting impression </p>
                        <button className="bg-white text-gray-800 px-7 py-2.5 text-[18px] font-semibold rounded-3xl mt-10">Shop now</button>
                    </div>
                    <div className="1/2">
                        <Image
                            src={hero1}

                            alt="img"

                        />
                    </div>
                </div>
            </SwiperSlide> 

        </Swiper>
    )
}
export default BannerSlider;