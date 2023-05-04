import Image from "next/image";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Product from "/img/prod06-1-min-copyright-500x598.jpg";
import Link from "next/link";
import { Chip } from "@material-tailwind/react";

function ProductsCetegorys() {
  return (
    <section>
      <div>
        {/* top change layout and filter section  */}
        <div className="flex flex-row-reverse md:flex-row items-start justify-between md:justify-end gap-3">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-[#DD9933] text-white p-3">
              <BsGrid3X3GapFill />
            </div>
            <div className="bg-[#111111] text-white p-3">
              <GiHamburgerMenu />
            </div>
          </div>

          <select className="bg-[#111111] text-white px-10 py-2">
            <option value="">sort by latest</option>
            <option value="">sort by latest</option>
            <option value="">sort by latest</option>
            <option value="">sort by latest</option>
          </select>
        </div>

        {/* grid  */}

        <div>
          {/* <div className="h-60 w-80">
            <Image
            className="h-full w-full"
            src={Product}
            ></Image>
          </div> */}

          <div className=" pt-4 grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-6  ">

          <Link href={`/singleproduct`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={Product}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={Product}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={Product}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={Product}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={Product}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={Product}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className={`relative 
              
        
              max-h-[20rem] border  rounded-sm border-black 
          overflow-hidden  hover:shadow-2xl  hover:scale-105  transition-all duration-200`}
            >
              <div>
                <Image
                  height={450}
                  width={450}
                  className={`max-h-[15rem] max-w-[15rem] `}
                  alt="product__imgae"
                  src={Product}
                />
              </div>

              <div className=" z-10  font-eco py-4 bg-[#111111] text-white">
                <p className=" font-bold text-center">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center  justify-center ">
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
       
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsCetegorys;
