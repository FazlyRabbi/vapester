// import { Navbar } from "flowbite-react";
import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import {  FaShoppingBasket } from "react-icons/fa";
import Search from "../Search";

function Header() {
  return (
    <header id="head" className="z-[9999]
      transition-all duration-500">
      <div className="header-top bg-[#292929] ">
        <div className="container mx-auto lg:px-10">
          <div
            className="header-top-content flex font-eco 
       
            justify-between
            
            items-center   h-36"
          >
            <div
              className=" lg:h-[240px]
            
        
            
            lg:w-[220px] bg-[#393939]"
            >
              <Image
                src={"/logo.png"}
                alt="logo"
                height={140}
                width={140}
                className="text-center
                
                 object-cover
                
                mx-auto pt-6 lg:pt-20"
              />
            </div>

            <div
              className=" 
           
              flex
               items-center
                justify-end
            
                 space-x-4
            text-white   "
            >
              <div
                className=" cursor-pointer  px-3 
              space-x-1 hidden md:block"
              >
                <p className="

                 transition-all duration-200
                
                hover:text-[#F2D71F]  font-bold  text-[18px]">
                  Call Us: +1 800 820 20 20
                </p>
              </div>

              <div className=" hidden xl:block">
                <div
                  className="cursor-pointer 
                
                lg:flex 
                text-white 
                px-3 items-center space-x-2
                hover:text-[#F2D71F]
                 text-[18px]
                 transition-all duration-200
                
                 font-bold"
                >
                  <BiLogIn />
                  <p className=" ">Log In</p>
                </div>
              </div>

              <div className="    cursor-pointer hidden md:block px-3">
                <Search />
              </div>

              <div className=" cursor-pointer  px-3">
                <div
                  className="
                  
                  hover:bg-[#F2D71F]
                   transition-all duration-500
                   hover:text-[#000]
                  bg-pink-600 p-5 flex
                px-7
                 space-x-4
                  justify-center items-center "
                >
                  <FaShoppingBasket className=" 
                  
                  
                  text-[1.4rem]" />
                  <span
                    className="
                  
                  xl:block 
          
                   hidden 
                  font-eco font-bold text-[18px]"
                  >
                    $0.00 / 0 items
                  </span>
                </div>
              </div>

              <div className=" cursor-pointer  px-3 flex items-center">
                <AiOutlineMenu
                  className="
                  transition-all duration-200
                  hover:text-[#F2D71F]
                  text-white text-[30px]"
                  onclick="openNav()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Megamenu /> */}
      {/* <div className="header-main  bg-white py-4  w-[100%] shadow">
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
      </div> */}
    </header>
  );
}

export default Header;
