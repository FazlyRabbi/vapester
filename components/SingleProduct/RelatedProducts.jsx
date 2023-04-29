import { FaStar } from "react-icons/fa";
import product1 from "/img/prod01-1-min-copyright-500x598.jpg";
import Image from "next/image";

export default function RelatedProducts() {
  return (
    <section className="container mx-auto my-24">
      <h1 className="text-[30px] font-bun text-[#292929] mb-4">RELATED PRODUCTS</h1>
      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mx-auto">
        <div className="text-left w-[65%] md:w-[85%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
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
        <div className="text-left w-[65%] md:w-[85%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
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
        <div className="text-left w-[65%] md:w-[85%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
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
        <div className="text-left w-[65%] md:w-[85%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
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
        <div className="text-left w-[65%] md:w-[85%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
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
        <div className="text-left w-[65%] md:w-[85%] lg:w-full mx-auto">
          <div className="border-4 border-[#EEEEEE] hover:border-[#393939] ">
            <Image
              height={300}
              className={`max-h-[28rem] scale-90 hover:scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>
          <div className="my-4">
            <p>DINNER LADY BLACKBERRY</p>
            <div className="flex items-center">
              <p className="text-pink-600">
                $<span className="text-[25px]">09.90</span>
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
      </div>
    </section>
  );
}
