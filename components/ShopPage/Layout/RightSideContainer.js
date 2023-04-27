import Image from "next/image";
import { FaList, FaStar } from "react-icons/fa";
import { TbLayoutGrid } from "react-icons/tb";
import product1 from "/img/prod01-1-min-copyright-500x598.jpg";

function RightSideContainer() {
  return (
    <section className="lg:col-span-9">

      {/* top section  */}
      <div
        className="lg:flex lg:flex-row flex-row-reverse
       lg:justify-between justify-center items-center"
      >
        <div className="lg:flex  justify-between items-center gap-12">
          <select
            className="px-12 py-4 text-white bg-[#393939]"
            name="cars"
            id="cars"
          >
            <option value="volvo">sort by average rate</option>
            <option value="volvo">sort by popularity</option>
            <option value="volvo">sort by latest</option>
            <option value="volvo">sort by price:low to high</option>
            <option value="volvo">sort by price:high to low</option>
          </select>
          <p>show all 9 results</p>
        </div>
        <div className="flex lg:justify-between items-center gap-2">
          <p className="bg-[#D22756] text-white w-12 h-12 flex justify-center items-center">
            <TbLayoutGrid className="text-2xl" />
          </p>
          <p className="bg-[#393939] text-white w-12 h-12 flex justify-center items-center">
            <FaList className="text-2xl" />
          </p>
        </div>
      </div>

      {/*products in grid  */}
      <div className="my-20 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
        <div className="lg:text-left text-center w-[65%] lg:w-full mx-auto">
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
        <div className="text-left w-[65%] lg:w-full mx-auto">
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
        <div className="text-left w-[65%] lg:w-full mx-auto">
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
        <div className="text-left w-[65%] lg:w-full mx-auto">
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
        <div className="text-left w-[65%] lg:w-full mx-auto">
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
        <div className="text-left w-[65%] lg:w-full mx-auto">
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
        <div className="text-left w-[65%] lg:w-full mx-auto">
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
        <div className="text-left w-[65%] lg:w-full mx-auto">
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
        <div className="text-left w-[65%] lg:w-full mx-auto">
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

export default RightSideContainer;
