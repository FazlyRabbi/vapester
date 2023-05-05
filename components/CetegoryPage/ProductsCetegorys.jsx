import Image from "next/image";
import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import product1 from "/img/prod06-1-min-copyright-500x598.jpg";
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

        <div className=" grid grid-cols-1 mt-5 md:grid-cols-2 justify-items-center px-2 py-6 xl:grid-cols-4 gap-6 mx-auto">
          <Link href={`/singleproduct`}>
            <div
              className=" max-h-[19rem] max-w-[14rem]  hover:scale-105 shadow-lg relative rounded-sm  transition-all duration-200
          overflow-hidden   "
            >
              <div className="  -z-40">
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem] `}
                  alt="product__imgae"
                  src={product1}
                />
              </div>

              <div className=" z-10  font-eco py-4 hover:text-primary bg-[#111111] text-white">
                <p className=" text-center font-bold">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center text-sm py-2  justify-center  space-x-3">
                  <p className="  text-softGray line-through font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className=" max-h-[19rem] max-w-[14rem]  hover:scale-105 shadow-lg relative rounded-sm  transition-all duration-200
          overflow-hidden   "
            >
              <div className="  -z-40">
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem] `}
                  alt="product__imgae"
                  src={product1}
                />
              </div>

              <div className=" z-10  font-eco py-4 hover:text-primary bg-[#111111] text-white">
                <p className=" text-center font-bold">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center text-sm py-2  justify-center  space-x-3">
                  <p className="  text-softGray line-through font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className=" max-h-[19rem] max-w-[14rem]  hover:scale-105 shadow-lg relative rounded-sm  transition-all duration-200
          overflow-hidden   "
            >
              <div className="  -z-40">
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem] `}
                  alt="product__imgae"
                  src={product1}
                />
              </div>

              <div className=" z-10  font-eco py-4 hover:text-primary bg-[#111111] text-white">
                <p className=" text-center font-bold">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center text-sm py-2  justify-center  space-x-3">
                  <p className="  text-softGray line-through font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className=" max-h-[19rem] max-w-[14rem]  hover:scale-105 shadow-lg relative rounded-sm  transition-all duration-200
          overflow-hidden   "
            >
              <div className="  -z-40">
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem] `}
                  alt="product__imgae"
                  src={product1}
                />
              </div>

              <div className=" z-10  font-eco py-4 hover:text-primary bg-[#111111] text-white">
                <p className=" text-center font-bold">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center text-sm py-2  justify-center  space-x-3">
                  <p className="  text-softGray line-through font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className=" max-h-[19rem] max-w-[14rem]  hover:scale-105 shadow-lg relative rounded-sm  transition-all duration-200
          overflow-hidden   "
            >
              <div className="  -z-40">
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem] `}
                  alt="product__imgae"
                  src={product1}
                />
              </div>

              <div className=" z-10  font-eco py-4 hover:text-primary bg-[#111111] text-white">
                <p className=" text-center font-bold">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center text-sm py-2  justify-center  space-x-3">
                  <p className="  text-softGray line-through font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className=" max-h-[19rem] max-w-[14rem]  hover:scale-105 shadow-lg relative rounded-sm  transition-all duration-200
          overflow-hidden   "
            >
              <div className="  -z-40">
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem] `}
                  alt="product__imgae"
                  src={product1}
                />
              </div>

              <div className=" z-10  font-eco py-4 hover:text-primary bg-[#111111] text-white">
                <p className=" text-center font-bold">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center text-sm py-2  justify-center  space-x-3">
                  <p className="  text-softGray line-through font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className=" max-h-[19rem] max-w-[14rem]  hover:scale-105 shadow-lg relative rounded-sm  transition-all duration-200
          overflow-hidden   "
            >
              <div className="  -z-40">
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem] `}
                  alt="product__imgae"
                  src={product1}
                />
              </div>

              <div className=" z-10  font-eco py-4 hover:text-primary bg-[#111111] text-white">
                <p className=" text-center font-bold">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center text-sm py-2  justify-center  space-x-3">
                  <p className="  text-softGray line-through font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
          <Link href={`/singleproduct`}>
            <div
              className=" max-h-[19rem] max-w-[14rem]  hover:scale-105 shadow-lg relative rounded-sm  transition-all duration-200
          overflow-hidden   "
            >
              <div className="  -z-40">
                <Image
                  height={300}
                  width={300}
                  className={`max-h-[13rem] `}
                  alt="product__imgae"
                  src={product1}
                />
              </div>

              <div className=" z-10  font-eco py-4 hover:text-primary bg-[#111111] text-white">
                <p className=" text-center font-bold">
                  VAPORESSO NEBULA VAPE KIT
                </p>

                <div className="flex items-center text-sm py-2  justify-center  space-x-3">
                  <p className="  text-softGray line-through font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                  <p className="text-yeollow  font-bold">
                    $<span className="text-[1.3rem]">26.99</span>
                  </p>
                </div>
              </div>

              {/* sale bage */}
              <Chip
                className=" absolute  px-[4px] rounded-sm  hover:shadow-2xl  transition-all duration-200 top-1 left-1 bg-yeollow py-[2px] font-eco  text-black  capitalize"
                value="sale!"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsCetegorys;
