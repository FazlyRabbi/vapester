import Image from "next/image";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "../img/banner-1-copyright1.jpg";
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
        <div className="flex w-full h-screen mx-0" style={{
          backgroundImage: `url(${hero1.src})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center-left"
        }}>
          <div className="grid grid-cols-2 grid-flow-col lg:grid-flow-row">
            <div className="">
              <p className="invisible">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, pariatur alias reiciendis blanditiis ipsum veniam inventore adipisci nisi veritatis nobis!</p>
            </div>
            <div className="relative"  >
              <div className="text-center absolute top-1/4 left-0  text-white mx-0 bg-pink-600 h-40">
                <p className='font-black uppercase text-[80px] tracking-widest -mt-7 mr-0 text-right'> Tarot <br /><span className="mt-0"> mini kits</span></p>
              </div>
              <div className="flex justify-between items-center absolute top-2/3 left-10">
                <div className="mr-10">
                  <p className="text-white font-semibold tracking-widest uppercase text-titleSm mt-2">
                    $<span className="text-[50px]">79.00</span></p>
                </div>
                <div>
                  <button className="bg-black text-white px-7 py-2.5 text-[30px] font-semibold ">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <div className="flex w-full h-screen mx-0" style={{
          backgroundImage: `url(${hero2.src})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center-right"
        }}>
          <div className="grid grid-cols-2">
            <div>
              <p className="invisible">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, pariatur alias reiciendis blanditiis ipsum veniam inventore adipisci nisi veritatis nobis!</p>
            </div>
            <div className="relative"  >
              <div className="text-center absolute top-1/4 left-0  text-white mx-0 bg-[#F2D71F] h-40">
                <p className='font-black uppercase text-[80px] tracking-widest -mt-7 mr-0 text-right'>  E-Liquids <br /><span className="mt-0"> Bundles</span></p>
              </div>
              <div className="flex justify-between items-center absolute top-2/3 left-10">
                <div className="mr-10">
                  <p className="text-black font-bold tracking-widest uppercase text-titleSm mt-2">
                    $<span className="text-[50px]">20.00</span></p>
                </div>
                <div>
                  <button className="bg-black text-white px-7 py-2.5 text-[30px] font-semibold ">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full">
        <div className="flex w-full h-screen mx-0" style={{
          backgroundImage: `url(${hero3.src})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center-right"
        }}>
          <div className="grid grid-cols-2">
            <div>
              <p className="invisible">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, pariatur alias reiciendis blanditiis ipsum veniam inventore adipisci nisi veritatis nobis!</p>
            </div>
            <div className="relative"  >
              <div className="text-center absolute top-1/4 left-0  text-white mx-0 bg-[#F2D71F] h-40">
                <p className='font-black uppercase text-[80px] tracking-widest -mt-7 mr-0 text-right'> Vaporesso <br /><span className="mt-0"> vaco one</span></p>
              </div>
              <div className="flex justify-between items-center absolute top-2/3 left-10">
                <div className="mr-20">
                  <p className="text-black font-bold tracking-widest uppercase text-titleSm mt-2">
                    $<span className="text-[50px]">56.00</span></p>
                </div>
                <div>
                  <button className="bg-black text-white px-7 py-2.5 text-[30px] font-semibold ">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
export default BannerSlider;
