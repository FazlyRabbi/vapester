import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import logo from "../img/logo.png";
import product5 from '../img/prod05-1-min-copyright-500x598.jpg'
import { MdAccountCircle, MdPhoneCallback, MdEmail } from "react-icons/md";
import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { Navbar } from "flowbite-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Search from "@/components/Search";
import BannerSlider from "@/components/BannerSlider";
import ProductSlider from "@/components/ProductSlider";
import styles from "../styles/Home.module.css";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonoals";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import BannerSlideMobile from "@/components/BannerSlideMobile";
import Megamenu from "@/components/Megamenu";
import { useTransition, animated } from "react";

const styleToggleButton = {
  fontSize: "3rem",
  color: "rgb(36,36,36)",
  padding: 0,
  border: "none",
  background: "none"
};

export default function Home() {

  return (
    <section>
      <Head>
        <title>Vapester</title>
      </Head>

      <header id="head" className="z-[9999]">

        <div className="header-top bg-[#292929] ">

          <div className="container mx-auto lg:px-10">

            <div className="header-top-content flex justify-between items-center h-36">
              <div className=" lg:h-[240px] lg:w-[220px] bg-[#393939]">
                <Image
                  src={logo}
                  alt="logo"
                  height={140}
                  width={140}
                  className="text-center mx-auto pt-6 lg:pt-20"
                />
              </div>
              <div className="flex items-center text-white">
                <div className=" cursor-pointer  px-3  space-x-1 hidden md:block">
                  <p className="text-base">Call Us: +1 800 820 20 20</p>
                </div>
                <div className=" cursor-pointer hidden lg:flex px-3 ">
                  <BiLogIn className="text-[20px]" />
                  <p className="text-base font-semibold text-white">
                    Log In
                  </p>
                </div>
                <div className=" cursor-pointer hidden md:block px-3">
                  <Search />
                </div>
                <div className=" cursor-pointer  px-3">
                  <div className="bg-pink-600 p-3">
                    <FaShoppingBasket />
                  </div>

                </div>
                <div className=" cursor-pointer  px-3 flex items-center">
                  < FaBars className="text-white text-[30px]" onclick="openNav()" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Megamenu /> */}
        <div className="header-main  bg-white py-4  w-[100%] shadow">
          <div className="w-3/4  lg:ml-auto ">
            <Navbar fluid={true} rounded={true}>
              <Navbar.Toggle />

              <Navbar.Collapse>
                <Link href={"/"} className="font-bold text-[14px]">
                  Accessories
                </Link>

                <Link href={"/shop"} className="font-bold text-[14px]">
                  E-Liquids
                </Link>
                <Link href={"/aboutus"} className="font-bold text-[14px]">
                  Premium Mods
                </Link>

                <Link href={"/contacts"} className="font-bold text-[14px]">
                  Starter Kits
                </Link>
                <Link href={"/contacts"} className="font-bold text-[14px]">
                  Tanks & RDas
                </Link>
                <Link href={"/contacts"} className="font-bold text-[14px]">
                  RDAs (Drippers)
                </Link>
                <Link href={"/contacts"} className="font-bold text-[14px]">
                  Standard Tanks
                </Link>
                <Link href={"/contacts"} className="font-bold text-[14px]">
                  Rebuildables
                </Link>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </header>
      <div className="hidden lg:block">
        <BannerSlider />
      </div>
      <div className="block lg:hidden">
        <BannerSlideMobile />
      </div>
      {/* features */}
      <div className="flex flex-wrap justify-around my-12">
        <div className="p-2">
          < FaShippingFast className="text-[40px]" />
          <p className="text-[25px] text-gray-800">
            Free Shipping</p>
          <p className="text-gray-500">No minimum order</p>
        </div>
        <div className="p-2">
          < FaThumbsUp className="text-[40px]" />
          <p className="text-[25px] text-gray-800">
            60 Day Warranty</p>
          <p className="text-gray-500">Free roundtrip shipping</p>
        </div>
        <div className="p-2">
          < FaMoneyBillAlt className="text-[40px]" />
          <p className="text-[25px] text-gray-800">
            Easy Returns</p>
          <p className="text-gray-500">With no restocking fee</p>
        </div>
        <div className="p-2">
          < RiCustomerService2Fill className="text-[40px]" />
          <p className="text-[25px] text-gray-800">
            Expert Advice</p>
          <p className="text-gray-500">In-store, call, email, chat</p>
        </div>
        <div className="p-2">
          < MdAttachMoney className="text-[40px]" />
          <p className="text-[25px] text-gray-800">
            Low Prices
          </p>
          <p className="text-gray-500">Shop with confidence</p>
        </div>
      </div>

      {/* categories */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className={`${styles.bgImage1} col-span-1 md:col-span-2 bg-center bg-no-repeat bg-cover relative min-w-[10rem] min-h-[10rem]`}>
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className='font-semibold tracking-widest uppercase text-[25px] -mt-1.5'>Starter kit bundles</p>
          </div>
        </div>
        <div className={` bg-center bg-no-repeat bg-cover relative min-w-[7rem] min-h-[10rem] ${styles.bgImage2}`}>
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className='font-semibold tracking-widest uppercase text-[25px] -mt-1.5'>E-liquids</p>
          </div>
        </div>
        <div className={` bg-center bg-no-repeat bg-cover relative min-w-[7rem] min-h-[10rem] ${styles.bgImage3}`}>
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className='font-semibold tracking-widest uppercase text-[25px] -mt-1.5'>vape mods</p>
          </div>
        </div>
        <div className={` bg-center bg-no-repeat bg-cover relative min-w-[7rem] min-h-[10rem] ${styles.bgImage4}`}>
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className='font-semibold tracking-widest uppercase text-[25px] -mt-1.5'>tanks and rda</p>
          </div>
        </div>
        <div className={` bg-center bg-no-repeat bg-cover relative min-w-[7rem] min-h-[10rem] ${styles.bgImage5}`}>
          <div className="text-center absolute top-1/2 left-0 -translate-y-1/2 text-white mx-0 bg-black">
            <p className='font-semibold tracking-widest uppercase text-[25px] -mt-1.5'>accessories</p>
          </div>
        </div>
      </div>

      {/* featured products */}
      <div className="w-11/12 mx-auto my-16">
        <p className="text-[25px] ">Meet our Feature Products</p>
        <div className="relative"  >
          <div className="text-center absolute top-1/2 left-0  text-black mx-0 bg-[#F2D71F]">
            <p className='font-black uppercase text-[40px] -mt-3.5'>vape mods</p>
          </div>
        </div>
        <div className="my-20 pt-16">
          <ProductSlider />
        </div>
      </div>

      {/* discounts */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        <div className={`${styles.discount1} col-span-1 lg:col-span-2 bg-center bg-no-repeat bg-cover relative min-w-[10rem] min-h-[20rem]`}>
          <div className="text-start absolute top-1/3 left-0 -translate-y-1/2 text-white mx-0 bg-[#af7ffc] h-14">
            <p className='font-black uppercase text-[30px] -mt-3'>SAVE 30% ON<br /> POPULAR E-LIQUIDS</p>
          </div>
          <div className="absolute top-2/4">
            <div className="p-10">
              <button className="bg-[#292929] text-white px-5 py-2.5 uppercase">Save on e-liquids</button>
            </div>
          </div>

        </div>
        <div className={` bg-center bg-no-repeat bg-cover relative ${styles.discount2} min-w-[10rem] min-h-[20rem]`}>
          <div className="text-start absolute top-1/3 left-0 -translate-y-1/2 text-white mx-0 bg-[#c1c800] h-14">
            <p className='font-black tracking-wide uppercase text-[30px] -mt-3'>vaporesso <br /> vaco one kids</p>
          </div>
          <div className="absolute top-1/2 mx-auto">
            <div className="p-10">
              <button className="bg-[#292929] text-white px-5 py-2.5 uppercase">Shop now</button>
            </div>
          </div>
        </div>
      </div>

      {/* last update */}
      <div className="w-11/12 mx-auto my-16">
        <p className="text-[25px]">Don't Miss Our Last Updates</p>
        <div className="relative"  >
          <div className="text-center absolute top-1/2 left-0  text-black mx-0 bg-[#F2D71F]">
            <p className='font-black uppercase text-[40px] -mt-3.5'>new arrivals</p>
          </div>
        </div>

        <div className="my-20 pt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-auto">
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left ">
            <div className="border-4 border-gray-400 hover:border-gray-700 z-10">
              <Image
                height={300}
                width={300}
                className={`max-h-[28rem] scale-95 hover:scale-110 overflow-hidden`}
                alt="product__imgae"
                src={product5}
              />
            </div>
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
          <div className="text-left">
            <Image
              height={300}
              width={300}
              className={`max-h-[28rem] border-4 border-gray-400`}
              alt="product__imgae"
              src={product5}
            />
            <div className='my-4'>
              <p>DINNER LADY BLACKBERRY</p>
              <div className='flex items-center'>
                <p className='text-pink-600'>$<span className='text-[25px]'>09.90</span></p>
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
        </div>
      </div>

      {/* partners */}
      <div className="w-11/12 mx-auto my-16">
        <p className="text-[25px]">The Best Name in Vape Culture</p>
        <div className="relative"  >
          <div className="text-center absolute top-1/2 left-0  text-black mx-0 bg-[#F2D71F]">
            <p className='font-black uppercase text-[40px] -mt-3.5'>our partners</p>
          </div>
        </div>
        <div className="my-20 pt-20">
          <Partners />
        </div>
      </div>

      {/* testimonial */}

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        <div className={`${styles.testimonial} col-span-1 lg:col-span-2 bg-center bg-no-repeat bg-cover min-w-[10rem] min-h-[20rem]`}>
          <div className="pt-20">
            <div className="text-start w-fit h-8 text-white m-0 bg-pink-600 ">
              <p className='font-black uppercase text-[30px]'>Coutomers love us</p>
            </div>
          </div>
          <div className="p-10">
            <Testimonials />
          </div>
        </div>
        <div className={` bg-center bg-no-repeat bg-cover relative ${styles.newsletter} min-w-[10rem] min-h-[20rem]`}>
          <div className="text-center absolute top-1/3 left-0 -translate-y-1/2 text-white mx-0 bg-pink-600">
            <p className='font-black tracking-wide uppercase text-[30px] -mt-2'>newsletter</p>
          </div>
          <div className="absolute top-[40%] mx-auto">
            <NewsLetter />
          </div>
        </div>
      </div>

      {/* social */}
      <div className="w-11/12 mx-auto my-20">
        <p className="text-[25px]">Find and Share on Instagram	</p>
        <div className="relative"  >
          <div className="text-center absolute top-1/2 left-0  text-black mx-0 bg-[#F2D71F]">
            <p className='font-black uppercase text-[40px] -mt-3.5'>#VAPESTERSHOP</p>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>

  );

}