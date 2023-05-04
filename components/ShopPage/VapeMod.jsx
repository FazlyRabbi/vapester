import Image from "next/image";
import Link from "next/link";
import { Chip } from "@material-tailwind/react";
import product1 from "/img/prod01-1-min-copyright-500x598.jpg";

function VapeMod() {
  return (
    <section>
      <div className="my-5 px-4">
        <div className="text-white flex justify-between">
          <div
            className="  
         
        border-t-4  border-white 
         w-[42%]"
          ></div>

          <p className=" uppercase font-bold text-[.8rem] md:text-[1rem]  -mt-2 md:w-[15%] w-[90%] font-eco  text-center">
            Vape Mod
          </p>

          <div className=" border-t-4  border-white w-[42%]"></div>
        </div>
      </div>

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

      <div className=" mb-10 h-[5rem]">
        <Link
          href={`#`}
          className="  hover:text-white focus:text-white  flex justify-center items-center rounded-md w-[98%]  bg-[#2a2a2a] mx-auto   capitalize
       shadow-lg  
       shadow-[#0e0e0e]
       active:shadow-md
          text-white py-3 font-bold  font-eco "
        >
          Show More Vape Mod
        </Link>
      </div>
    </section>
  );
}

export default VapeMod;
