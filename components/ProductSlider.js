import "../styles/ProductSlider.module.css";
import Image from "next/image";
import product1 from "../img/prod01-1-min-copyright-500x598.jpg";
import product2 from "../img/prod02-1-min-copyright-500x598.jpg";
import product3 from "../img/prod03-1-min-copyright-500x598.jpg";
import product4 from "../img/prod04-1-min-copyright-500x598.jpg";
import product5 from "../img/prod05-1-min-copyright-500x598.jpg";
import product6 from "../img/prod06-1-min-copyright-500x598.jpg";

import Link from "next/link";

import { FaStar } from "react-icons/fa";

import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay]);

function ProductSlider() {
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
          slidesPerView: 3,
        },
        1024: {
          width: 1024,
          slidesPerView: 4,
        },
      }}
      slidesPerView={4}
      spaceBetween={25}
      freeMode={true}
      // modules={[ Pagination]}
      className=""
    >
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl" id="swiper-slide-product">
        <Link href={`/shop`}>
          <div className="text-left">
            <Image
              height={450}
              width={450}
              className={`max-h-[35rem]  border-4 border-gray-400`}
              alt="product__imgae"
              src={product1}
            />
            <div className="  font-eco my-4">
              <p className=" font-bold">VAPORESSO NEBULA VAPE KIT</p>
              <div className="flex items-center">
                <p className="text-pink-600">
                  $<span className="text-[25px]">26.99</span>
                </p>
                <div className="text-center gap-1 flex justify-center text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
export default ProductSlider;
