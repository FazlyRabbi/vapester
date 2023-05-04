import Image from "next/image";
import Link from "next/link";
// import innder components
import NewCollections from "../NewCollections";
import DisposableVape from "../DisposableVape";
import VapeMod from "../VapeMod";
import { Chip } from "@material-tailwind/react";

import product1 from "/img/prod01-1-min-copyright-500x598.jpg";

function Products() {
  return (
    <section className="bg-[#292929]  rounded-sm">
      <h1 className=" uppercase  bg-second   text-center p-3 font-bun  text-[1.5rem]  ">
        Deal Of the day
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center px-2 py-6 xl:grid-cols-4 gap-6 mx-auto">
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

      {/* { Inner Components} */}
      <NewCollections />
      <DisposableVape />
      <VapeMod />
    </section>
  );
}

export default Products;
