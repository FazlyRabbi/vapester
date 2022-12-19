import "tailwindcss/tailwind.css";
import { API_URL } from "../config/index";
import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.png";
import styles from "@/styles/Home.module.css";
import { AiOutlineMobile } from "react-icons/Ai";
import { MdEmail } from "react-icons/Md";
import { MdAccountCircle } from "react-icons/Md";
import { RiShoppingCartLine } from "react-icons/Ri";
import falyer from "../img/travel-sale-flyer-template_52683-46904.webp";
import like from "../img/like.webp";
import headphone from "../img/headpone.webp";
import banner from "../img/card/banners.svg";
import mog from "../img/bg/mog.webp";
import Footer from "@/components/Footer";
import charlotte from "../img/man/charlotte.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Controller} from "swiper";

export default function Home() {
  return (
    <section>
      <header>
        <div className="header-top bg-[#1E1E1E] py-3">
          <div className="container mx-auto lg:px-44">
            <div className="header-top-content flex justify-between">
              <ul className="flex  text-white">
                <li className=" cursor-pointer border-r px-3">Reviews</li>
                <li className=" cursor-pointer px-3 ">Support</li>
              </ul>
              <ul className="flex  text-white">
                <li className="  border-r px-3 flex   items-center">
                  <AiOutlineMobile className=" text-[1.2rem]" />
                  <span>929 217-6589</span>
                </li>
                <li className="   px-3 flex   space-x-1 items-center">
                  <MdEmail className=" text-[1.2rem]" />
                  <span>nprintandgraph@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-main shadow-sm">
          <div className="container mx-auto">
            <div className="header-main-md    lg:hidden">
              <div className="logo box p-4   flex  justify-center">
                <Image src={logo} alt="logo" height={150} width={150} />
              </div>
              <nav className="navbar flex  pb-4  justify-between">
                <div className="dropdown  font-bold cursor-pointer">Menu</div>
                <div>
                  <ul className="flex">
                    <li className=" cursor-pointer">
                      <MdAccountCircle className=" text-[1.8rem]" />
                    </li>
                    <li>
                      <div
                        className={`cart pl-5 ${styles.cart} relative cursor-pointer `}
                      >
                        <RiShoppingCartLine />
                        <span className="count text-[11px]  text-white  font-bold absolute top-0 right-[7px] px-1 rounded-full bg-primary">
                          5
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="header-main-lg  hidden lg:block p-4  ">
              <nav className="flex   justify-between    items-center">
                <div>
                  <ul className="flex space-x-5 font-bold">
                    <li className="border-r border-white pr-2">
                      <Link href={"/shop"}>Shop</Link>
                    </li>
                    <li className="border-r border-white pr-2">
                      <Link href={"/aboutus"}>About Us</Link>
                    </li>
                    <li className="border-white border-r pr-2">
                      <Link href={"/faq"}>Help & Faq</Link>
                    </li>
                    <li>
                      <Link href={"/contacts"}>Contact</Link>
                    </li>
                  </ul>
                </div>

                <Image
                  src={logo}
                  alt="logo"
                  height={150}
                  width={150}
                  className=""
                />

                <div className="dropdown  font-bold cursor-pointer">
                  <ul className="flex">
                    <li className=" px-3 flex   items-center">
                      <MdAccountCircle className=" text-[1.3rem] mr-1" />
                      <span>Account</span>
                    </li>
                    <li>
                      <div
                        className={`cart pl-5 ${styles.cart} relative cursor-pointer  flex justify-center   items-center space-x-1`}
                      >
                        <RiShoppingCartLine />

                        <span className="text-[15px] font-bold">Cart</span>
                        <span className="count text-[11px]  text-white  font-bold absolute top-0 right-[40px] px-1 rounded-full bg-primary">
                          5
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="hero ">
        <Swiper
          Pagination={true}
          Navigation={true}
          Controller={true}
          modules={[Navigation,Pagination,Controller]}
          className="mySwiper h-full w-full"
        >
          <SwiperSlide  className={`${styles.hero}   `}>
            <div className=" h-full">
              <div className="hero-content py-[10rem] flex container mx-auto   leading-[3.5rem] ">
                <div>
                  <h4 className=" text-gray-800 font-bold">
                    #1 YOUR PRINTING PARTNER
                  </h4>

                  <h1 className="font-bold text-[85px] ">
                    {" "}
                    <span className=" text-primary ">Same Day</span> Print
                  </h1>

                  <p className="   leading-[1.8rem] mt-[3rem] lg:pr-[50rem] ">
                    In the city that never sleeps... <br />
                    You can rely on Printing New York, your trusted printing
                    services NYC partner. From business cards to brochures, this
                    local print shop has you covered.
                  </p>

                  <div className="cta-btn flex  space-x-4 mt-[3rem]">
                    <button className=" bg-primary px-[3rem]  text-white  font-bold  rounded-md">
                      Make A Rush Order
                    </button>
                    <button className=" text-black  border-[#000]   border px-[3rem]   font-bold  rounded-md">
                      View Products+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.hero}   `}>
            <div className=" h-full">
              <div className="hero-content py-[10rem] flex container mx-auto   leading-[3.5rem] ">
                <div>
                  <h4 className=" text-gray-800 font-bold">
                    #1 YOUR PRINTING PARTNER
                  </h4>

                  <h1 className="font-bold text-[85px] ">
                    {" "}
                    <span className=" text-primary ">Same Day</span> Print
                  </h1>

                  <p className="   leading-[1.8rem] mt-[3rem] lg:pr-[50rem] ">
                    In the city that never sleeps... <br />
                    You can rely on Printing New York, your trusted printing
                    services NYC partner. From business cards to brochures, this
                    local print shop has you covered.
                  </p>

                  <div className="cta-btn flex  space-x-4 mt-[3rem]">
                    <button className=" bg-primary px-[3rem]  text-white  font-bold  rounded-md">
                      Make A Rush Order
                    </button>
                    <button className=" text-black  border-[#000]   border px-[3rem]   font-bold  rounded-md">
                      View Products+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.hero}   `}>
            <div className=" h-full">
              <div className="hero-content py-[10rem] flex container mx-auto   leading-[3.5rem] ">
                <div>
                  <h4 className=" text-gray-800 font-bold">
                    #1 YOUR PRINTING PARTNER
                  </h4>

                  <h1 className="font-bold text-[85px] ">
                    {" "}
                    <span className=" text-primary ">Same Day</span> Print
                  </h1>

                  <p className="   leading-[1.8rem] mt-[3rem] lg:pr-[50rem] ">
                    In the city that never sleeps... <br />
                    You can rely on Printing New York, your trusted printing
                    services NYC partner. From business cards to brochures, this
                    local print shop has you covered.
                  </p>

                  <div className="cta-btn flex  space-x-4 mt-[3rem]">
                    <button className=" bg-primary px-[3rem]  text-white  font-bold  rounded-md">
                      Make A Rush Order
                    </button>
                    <button className=" text-black  border-[#000]   border px-[3rem]   font-bold  rounded-md">
                      View Products+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="terms py-[3rem] bg-primary">
        <div className="grid gap-12   lg:grid-cols-3 sm:grid-cols-1  md:grid-cols-2 container mx-auto    justify-items-center   text-center   ">
          <button className="  w-[20rem] py-3 text-white font-bold uppercase  bg-transparent rounded-full border">
            How to order
          </button>
          <button className="  w-[20rem] py-3 text-white font-bold uppercase  bg-transparent rounded-full border">
            GET A SAMPLE PACK
          </button>
          <button className=" w-[20rem] sm:col-span-2 lg:col-span-1   py-3 text-white font-bold uppercase  bg-transparent rounded-full border">
            BROWSE TEMPLATES
          </button>
        </div>
      </div>

      <div className="catagory py-[6rem]">
        <div className="container mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-[5rem]">
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
          <div className={`${styles.catagoryCard}  px-3 py-2`}>
            <Image src={banner} height={25} width={25} alt="img" />
            <p className="font-bold ">Banners</p>
          </div>
        </div>
      </div>

      <div className="shipping bg-[#191919] p-8">
        <h1 className="text-center  text-white font-bold text-[25px]">
          Free Worldwide Shipping on orders over $500
        </h1>
        <div className="container mx-auto grid mt-6  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:px-[13rem] justify-items-center ">
          <div className="product  p-5  cursor-pointer">
            <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
              <Image src={mog} height={250} width={250} alt="img" />
            </div>

            <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
              <h4 className="mb-3">Epoxy Business Cards</h4>
              <p>
                <span className="font-bold">$424</span> for 100
              </p>
            </div>
          </div>
          <div className="product  p-5  cursor-pointer">
            <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
              <Image src={mog} height={250} width={250} alt="img" />
            </div>

            <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
              <h4 className="mb-3">Epoxy Business Cards</h4>
              <p>
                <span className="font-bold">$424</span> for 100
              </p>
            </div>
          </div>
          <div className="product  p-5  cursor-pointer">
            <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
              <Image src={mog} height={250} width={250} alt="img" />
            </div>

            <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
              <h4 className="mb-3">Epoxy Business Cards</h4>
              <p>
                <span className="font-bold">$424</span> for 100
              </p>
            </div>
          </div>
          <div className="product  p-5  cursor-pointer">
            <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
              <Image src={mog} height={250} width={250} alt="img" />
            </div>

            <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
              <h4 className="mb-3">Epoxy Business Cards</h4>
              <p>
                <span className="font-bold">$424</span> for 100
              </p>
            </div>
          </div>
          <div className="product  p-5  cursor-pointer">
            <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
              <Image src={mog} height={250} width={250} alt="img" />
            </div>

            <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
              <h4 className="mb-3">Epoxy Business Cards</h4>
              <p>
                <span className="font-bold">$424</span> for 100
              </p>
            </div>
          </div>
          <div className="product  p-5  cursor-pointer">
            <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
              <Image src={mog} height={250} width={250} alt="img" />
            </div>

            <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
              <h4 className="mb-3">Epoxy Business Cards</h4>
              <p>
                <span className="font-bold">$424</span> for 100
              </p>
            </div>
          </div>
          <div className="product  p-5  cursor-pointer">
            <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
              <Image src={mog} height={250} width={250} alt="img" />
            </div>

            <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
              <h4 className="mb-3">Epoxy Business Cards</h4>
              <p>
                <span className="font-bold">$424</span> for 100
              </p>
            </div>
          </div>
          <div className="product  p-5  cursor-pointer">
            <div className=" bg-white rounded-sm text-center min-h-[15rem] w-[15rem] p-2 ">
              <Image src={mog} height={250} width={250} alt="img" />
            </div>

            <div className="product-des p-2 text-[#C8C3C3] shadow-xl min-h-[5rem] w-[15rem]">
              <h4 className="mb-3">Epoxy Business Cards</h4>
              <p>
                <span className="font-bold">$424</span> for 100
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose py-[6rem]">
        <div className="container mx-auto  grid  gap-10  lg:gap-[5rem] sm:grid-cols-1 md:grid-cols-2 md:items-center    justify-items-end ">
          <div className="img-box">
            <Image src={falyer} width={550} height={550} alt="img" />
          </div>
          <div className="content">
            <h4 className="font-bold ">Why choose us</h4>
            <h2 className="font-bold  lg:text-[50px] text-[35px]  mb-2 lg:mb-4">
              Highly Catchy Green Printing
            </h2>
            <p className=" lg:pr-10 text-gray-800 text-[14px] lg:text-[17px]">
              Diam ut venenatis tellus in metus vulputate. Semper eget duis at
              tellus at urna condimentum. Odio tempor orci dapibus ultrices in
              iaculis nunc. In hac habitasse platea dictumst quisque sagittis
              purus sit. A arcu cursus vitae congue mauris rhoncus aenean.
              Mauris cursus mattis molestiehy
            </p>

            <div className="benifit mt-8">
              <div className="flex space-x-4 items-center   justify-start">
                <div className="icon">
                  <Image src={like} width={80} height={80} alt="img" />
                </div>
                <div className="data ">
                  <h4 className="data-title font-bold mb-3 capitalize text-[18px] lg:text-[25px]">
                    Satisfied Service
                  </h4>
                  <p className="data-pera text-gray-800 text-[14px] lg:text-[17px]">
                    Amet consectetur adipiscing elit duis tristique sollicitudin
                    nibh sit FSed libero enim sed faucibus turpisuy
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 mt-[4rem] items-center   justify-start">
                <div className="icon">
                  <Image src={headphone} width={80} height={80} alt="img" />
                </div>
                <div className="data ">
                  <h4 className="data-title font-bold mb-3 capitalize text-[18px] lg:text-[25px]">
                    Free Consultancy
                  </h4>
                  <p className="data-pera text-gray-800 text-[14px] lg:text-[17px]">
                    Rhues ut lectus arcu bibendum at varius vel pharetra. Lacus
                    suspendisse faucibus interdum posut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials py-[3rem] pb-[6rem]">
        <div className="container mx-auto">
          <div className="tes-data text-center mb-[4rem]">
            <h4 className="font-bold uppercase text-primary mb-2">
              TESTIMONIALS
            </h4>
            <h2 className="font-bold text-[40px] mb-2">Customer Words</h2>
            <p className="  text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
            </p>
          </div>

          <div className="customers grid sm:grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3    align-middle ">
            <div className="customer sm:justify-center md:justify-start">
              <div className="bio flex justify-center md:justify-start  items-center space-x-5">
                <Image
                  src={charlotte}
                  alt="logo"
                  height={100}
                  width={100}
                  className=" rounded-full"
                />
                <div>
                  <h5 className="name  font-bold">Oliva</h5>
                  <h5 className="proffesion  text-gray-400">Manager</h5>
                </div>
              </div>
              <p className="message text-center md:text-left mt-6 text-gray-600  pr-6">
                Olivia Massa placerat duis ultricies lacus sed turpis tincidunt
                id aliquet. Fringilla est ullamcorper eget nulla facilisi gestas
                maecenas.Sem viverra aliquet eget sit amet tellus cras
                adipiscing. Interdum velit euismod in pellentesque massa.
              </p>
            </div>
            <div className="customer ">
              <div className="bio flex  justify-center md:justify-start items-center space-x-5">
                <Image
                  src={charlotte}
                  alt="logo"
                  height={100}
                  width={100}
                  className=" rounded-full"
                />
                <div>
                  <h5 className="name  font-bold">Oliva</h5>
                  <h5 className="proffesion  text-gray-400">Manager</h5>
                </div>
              </div>
              <p className="message text-center md:text-left mt-6 text-gray-600  pr-6">
                Olivia Massa placerat duis ultricies lacus sed turpis tincidunt
                id aliquet. Fringilla est ullamcorper eget nulla facilisi gestas
                maecenas.Sem viverra aliquet eget sit amet tellus cras
                adipiscing. Interdum velit euismod in pellentesque massa.
              </p>
            </div>
            <div className="customer sm:justify-center md:jus ">
              <div className="bio flex justify-center md:justify-start items-center space-x-5">
                <Image
                  src={charlotte}
                  alt="logo"
                  height={100}
                  width={100}
                  className=" rounded-full"
                />
                <div>
                  <h5 className="name  font-bold">Oliva</h5>
                  <h5 className="proffesion  text-gray-400">Manager</h5>
                </div>
              </div>
              <p className="message text-center md:text-left mt-6 text-gray-600  pr-6">
                Olivia Massa placerat duis ultricies lacus sed turpis tincidunt
                id aliquet. Fringilla est ullamcorper eget nulla facilisi gestas
                maecenas.Sem viverra aliquet eget sit amet tellus cras
                adipiscing. Interdum velit euismod in pellentesque massa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();
  return {
    props: { news },
  };
}
