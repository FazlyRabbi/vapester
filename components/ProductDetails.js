import React, {  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className=" overflow-hidden w-full">
      <div className="product-slider  ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={2}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`
         h-auto


         
         w-auto

        
          mb-2`}
        >
          <SwiperSlide>
            <Image src={p1} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={p2} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={p3} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={p4} alt="img" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper lg:mb-5 h-[4rem] cursor-pointer "
        >
          <SwiperSlide>
            <Image src={p1} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={p2} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={p3} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={p4} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
       <div className="product-content ml-10  mt-4">
        <ul className="list-disc">
          <li>
            <h4 className="font-bold  ">How is the price calculated?</h4>
            <ul className="ml-10 list-disc text-[14px] pt-1">
              <li>
                <p>
                  Our prices are calculated by the next formula.
                  <br />
                  <span className="font-bold">
                    (Amount of originals) x (amount of copies) x price = Total
                    Price
                  </span>
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold mt-5  ">
              My PDF file has multiple pages but I only need a couple of pages
              from it?
            </h4>
            <ul className="ml-10 list-disc text-[14px] pt-1">
              <li>
                <p>
                  We recommend uploading only the pages you would like to print,
                  either individually or combine in a single PDF or Zip file.
                </p>
              </li>
              <li>
                <p>
                  If you are unable to separate the pages just upload your files
                  and let us know in the "Special Instructions" section the page
                  numbers you need to print.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold mt-5  ">
              I need to upload multiple files, what I do?
            </h4>
            <ul className="ml-10 list-disc text-[14px] pt-1">
              <li>
                <p className=" text-red">
                  To upload multiple files, please combine them on ZIP Format
                  and upload that Zip to our website. You can follow this
                  tutorial https://www.youtube.com/watch?v=hvIlEkxJPrU
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div> 
    </section>
  );
}

export default ProductDetails;
