import Image from "next/image";
import bag from "../img/bg/bag.webp";
import bottle from "../img/bg/bottol.webp";
import mog from "../img/bg/mog.webp";
import jacket from "../img/bg/jacket.webp";
import phone from "../img/bg/phone .webp";

import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Autoplay]);

function TopSellingItems() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    width: 320,
                    slidesPerView: 1,
                },
                640: {
                    width: 620,
                    slidesPerView: 2,
                },
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
                1024: {
                    width: 1024,
                    slidesPerView: 3,
                },
            }}
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            // modules={[ Pagination]}
            className=""
        >

            <SwiperSlide className="rounded-3xl">
                <div className="p-4">
                <Image src={bag} height={300} width={300} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
                <div className="p-4">
                <Image src={mog} height={300} width={300} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
                <div className="p-4">
                <Image src={phone} height={300} width={300} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
                <div className="p-4">
                <Image src={bottle} height={300} width={300} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-3xl">
                <div className="p-4">
                <Image src={jacket} height={400} width={400} alt="product banner" className=" rounded-3xl" />
                <p className="mt-5">Poster Mockup</p>
                <p className="mt-3">$12.00</p>
                <button className=" mt-5 w-full bg-black text-white rounded-3xl py-2.5">Add to cart</button>
                </div>
            </SwiperSlide>
      
           
        </Swiper>
    )
}
export default TopSellingItems;