import Image from "next/image";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "../img/banner-1-copyright.jpg";
import hero2 from "../img/banner-2-copyright.jpg";
import hero3 from "../img/banner-3-copyright.jpg";

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
      className=" max-h-[35rem] w-full"
    >
      <SwiperSlide className="w-full">
        <div
          className="flex w-full h-screen mx-0 bg-yellow-300"
        >
           <div className="1/2">
            <Image src={hero1} alt="img" />
          </div>
          <div className="ml-auto text-right px-4 py-8 md:px-7 md:py-12 lg:px-14 lg:py-20 w-1/2">
            <div className="bg-pink-600 text-right">
              <p className="text-white font-black text-[28px] md:text-[32px] lg:text-[40px] mt-6">
                Tarot <br /> mini kits
              </p>
            </div>
            <div className="flex text-right">
              <p className="text-white font-semibold tracking-widest uppercase text-sm mt-2">
                $<span className="text-[36px]">79.00</span></p>
              <button className="bg-black text-white px-7 py-2.5 text-[18px] font-semibold ">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
     <SwiperSlide className=" w-full">
        <div
          className="flex w-full h-screen mx-0 bg-yellow-300"
          
        >
          <div className="text-left px-4 py-8 md:px-7 md:py-12 lg:px-14 lg:py-20 w-1/2">
            <p className="text-white font-semibold tracking-widest uppercase text-sm mt-2">
              Custom Boxes
            </p>
            <p className="text-white font-extrabold text-[28px] md:text-[32px] lg:text-[40px] mt-6">
              Customized bulk <br /> Paper bags
            </p>
            <p className="text-white font-normal mt-6">
              Turn your ideas into premium products that <br /> leave a lasting
              impression{" "}
            </p>
            <button className="bg-white text-gray-800 px-7 py-2.5 text-[18px] font-semibold rounded-3xl mt-10">
              Shop now
            </button>
          </div>
          <div className="1/2">
            <Image src={hero1} alt="img" />
          </div>
        </div>
      </SwiperSlide> 
    </Swiper>
  );
}
export default BannerSlider;
