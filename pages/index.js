import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { AgeGateContext } from "@/context/ageGateContext";
import AgeGateModal from "@/components/AgeGateModal";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

import product5 from "../img/prod05-1-min-copyright-500x598.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BannerSlider from "@/components/BannerSlider";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Partners from "@/components/Partners";
import ProductSlider from "@/components/ProductSlider";
import Testimonials from "@/components/Testimonoals";
import styles from "../styles/Home.module.css";

// imports compoents
import Header from "@/components/HomePage/Header";
const styleToggleButton = {
  fontSize: "3rem",
  color: "rgb(36,36,36)",
  padding: 0,
  border: "none",
  background: "none",
};

export default function Home() {
  const { isOver18 } = useContext(AgeGateContext);

  if (!isOver18) {
    return <AgeGateModal />;
  }

  return (
    <section>
      <Head>
        <title>Vapester</title>
      </Head>
      {/* // header */}
      <Header />
      {/* // end */}
      <div>
        <BannerSlider />
      </div>

      {/* features */}
      {/* <div className="flex flex-wrap justify-around my-12">
        <div className="p-2">
          <FaShippingFast className="text-[40px]" />
          <p className="text-[25px] text-gray-800">Free Shipping</p>
          <p className="text-gray-500">No minimum order</p>
        </div>
        <div className="p-2">
          <FaThumbsUp className="text-[40px]" />
          <p className="text-[25px] text-gray-800">60 Day Warranty</p>
          <p className="text-gray-500">Free roundtrip shipping</p>
        </div>
        <div className="p-2">
          <FaMoneyBillAlt className="text-[40px]" />
          <p className="text-[25px] text-gray-800">Easy Returns</p>
          <p className="text-gray-500">With no restocking fee</p>
        </div>
        <div className="p-2">
          <RiCustomerService2Fill className="text-[40px]" />
          <p className="text-[25px] text-gray-800">Expert Advice</p>
          <p className="text-gray-500">In-store, call, email, chat</p>
        </div>
        <div className="p-2">
          <MdAttachMoney className="text-[40px]" />
          <p className="text-[25px] text-gray-800">Low Prices</p>
          <p className="text-gray-500">Shop with confidence</p>
        </div>
      </div> */}

      {/* categories */}
      <div className=" container mx-auto  mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className={`${styles.bgImage1} col-span-1 md:col-span-2 bg-center bg-no-repeat bg-cover relative min-w-[10rem] min-h-[10rem]`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className=" font-bun cursor-pointer tracking-widest uppercase text-[25px] -mt-1.5">
              Starter kit bundles
            </p>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover relative min-w-[7rem] min-h-[10rem] ${styles.bgImage2}`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className="font-bun cursor-pointer tracking-widest uppercase text-[25px] -mt-1.5">
              E-liquids
            </p>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover relative min-w-[7rem] min-h-[10rem] ${styles.bgImage3}`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className="font-bun cursor-pointer tracking-widest uppercase text-[25px] -mt-1.5">
              vape mods
            </p>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover relative min-w-[7rem] min-h-[10rem] ${styles.bgImage4}`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className="font-bun cursor-pointer tracking-widest uppercase text-[25px] -mt-1.5">
              tanks and rda
            </p>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover relative min-w-[7rem] min-h-[10rem] ${styles.bgImage5}`}
        >
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className="font-bun cursor-pointer tracking-widest uppercase text-[25px] -mt-1.5">
              accessories
            </p>
          </div>
        </div>
      </div>

      {/* featured products */}
      <div className="container mx-auto my-16 p-2">
        <p className="text-[25px]  font-eco">Meet our Feature Products</p>
        <div className="relative">
          <div className="text-center absolute top-1/2 left-0  text-black mx-0 bg-[#F2D71F]">
            <p className="font-black font-bun cursor-pointer uppercase text-[40px] -mt-3.5">
              vape mods
            </p>
          </div>
        </div>
        <div className="my-20 pt-10">
          <ProductSlider />
        </div>
      </div>

      {/* discounts */}
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        <div
          className={`${styles.discount1} col-span-1 lg:col-span-2 bg-center bg-no-repeat bg-cover relative min-w-[10rem] min-h-[20rem]`}
        >
          <div className="text-start absolute top-1/3 left-0 -translate-y-1/2 text-white mx-0 bg-[#af7ffc] h-14">
            <p className="font-black font-bun cursor-pointer uppercase text-[30px] -mt-3">
              SAVE 30% ON
              <br /> POPULAR E-LIQUIDS
            </p>
          </div>
          <div className="absolute top-2/4">
            <div className="p-10">
              <button className="bg-[#292929] font-bold  font-eco text-white px-5 py-2.5 uppercase">
                Save on e-liquids
              </button>
            </div>
          </div>
        </div>
        <div
          className={` bg-center bg-no-repeat bg-cover relative ${styles.discount2} min-w-[10rem] min-h-[20rem]`}
        >
          <div className="text-start absolute top-1/3 left-0 -translate-y-1/2 text-white mx-0 bg-[#c1c800] h-14">
            <p className=" font-bun cursor-pointer tracking-wide uppercase text-[30px] -mt-3">
              vaporesso <br /> vaco one kids
            </p>
          </div>
          <div className="absolute top-1/2 mx-auto">
            <div className="p-10">
              <button className="bg-[#292929] font-eco font-bold text-white px-5 py-2.5 uppercase">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* last update */}
      <div className="container mx-auto my-16">

        <p className="text-[25px] font-eco font-bold">
          Don't Miss Our Last Updates
        </p>
        <div className="relative">
          <div className="text-center absolute top-1/2 left-0  text-black mx-0 bg-[#F2D71F]">
            <p className="font-black uppercase text-[40px] font-bun cursor-pointer -mt-3.5">
              new arrivals
            </p>
          </div>
        </div>

        <div className="my-20 pt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-auto  justify-items-center  ">
          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p className=" font-eco">DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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

          <Link href={`/shop`}>
            <div className="text-left cursor-pointer">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] border-4 border-gray-400`}
                alt="product__imgae"
                src={product5}
              />
              <div className="my-4">
                <p>DINNER LADY BLACKBERRY</p>
                <div className="flex items-center">
                  <p className="text-pink-600">
                    $<span className="text-[25px] font-eco">09.90</span>
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
        </div>
      </div>

      {/* partners */}
      <div className="container mx-auto my-16">
        <p className="text-[25px] font-eco font-bold">
          The Best Name in Vape Culture
        </p>
        <div className="relative">
          <div className="text-center absolute top-1/2 left-0  text-black mx-0 bg-[#F2D71F]">
            <p className="font-black uppercase text-[40px] font-bun -mt-3.5">
              our partners
            </p>
          </div>
        </div>
        <div className="my-20 pt-20">
          <Partners />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}
