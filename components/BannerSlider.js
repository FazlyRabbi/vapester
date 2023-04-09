import '../styles/ProductSlider.module.css';
import pic1 from '../img/bg/stand-up-pouches-cbd-1.webp'
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Autoplay]);

function BannerSlider() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    width: 320,
                    slidesPerView: 1,
                },
                640: {
                    width: 620,
                    slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 1,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 1,
                },
                1280: {
                    width: 1280,
                    slidesPerView: 1,
                },
            }}
            slidesPerView={1}
            spaceBetween={0}
            freeMode={true}
            // modules={[ Pagination]}
            className=""
        >
            <SwiperSlide className="w-full">
                <div className="relative">
                    <p className="text-white font-semibold tracking-widest uppercase absolute top-16 left-10">Custom boxes</p>
                    <p className="text-white font-bold text-xl md:text-[28px] absolute left-10 top-24">Customized bulk <br /> Paper bags</p>
                    <button className="bg-white text-gray-800 px-5 py-2.5 text-[18px] font-semibold rounded-3xl absolute block top-52 left-10 ">Shop now</button>
                    <img src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_banner2.jpg" className="w-full" alt="img" />
                </div>
            </SwiperSlide>
            <SwiperSlide className=" w-full">
                <div className="relative">
                    <p className="text-white font-semibold tracking-widest uppercase absolute top-16 left-10">Custom boxes</p>
                    <p className="text-white font-bold text-xl md:text-[28px] absolute left-10 top-24">Customized bulk <br /> Paper bags</p>
                    <button className="bg-white text-gray-800 px-5 py-2.5 text-[18px] font-semibold rounded-3xl absolute block top-52 left-10 ">Shop now</button>
                    <img src="https://demo2.pavothemes.com/printec/wp-content/uploads/2023/02/h6_banner3.jpg" className="w-full" alt="img" />
                </div>
            </SwiperSlide>

        </Swiper>
    )
}
export default BannerSlider;