import {
  MdKeyboardArrowUp,
  MdOutlineCancel,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import product1 from "../../img/prod01-1-min-copyright-500x598.jpg";
import Image from "next/image";
import { useState } from "react";

export default function CartBody() {
  const [quantity, setQuantity] = useState(0);

  return (
    <section>

      {/* cart  */}
      <div className="w-[70%] mx-auto">
      <div className="bg-[#D22756] text-white flex w-full items-center font-bun">
          <p className="w-[43%] py-6 text-[20px] px-2 ml-20">Product</p>
          <p className="w-[19%] py-6 text-[20px] px-2 text-center">Price</p>
          <p className="w-[19%] py-6 text-[20px] px-2 text-center">Quantity</p>
          <p className="w-[19%] py-6 text-[20px] px-2 text-center">Subtotal</p>
        </div>
        <div className="bg-[#292929] text-white flex w-full items-center font-bun">
          <div className="w-[43%] py-6 text-[20px] px-2 ml-20">
            <div className="flex justify-start items-center gap-8">
              <MdOutlineCancel />
              <Image className="w-12 h-12" src={product1}></Image>
              <p className="text-[10px]">
                Vaporesso Nebula Vape Kit - Yellow, Small
              </p>
            </div>
          </div>
          <p className="w-[19%]  text-[15px] px-2 text-[#49789C] text-center ">
            $70.00
          </p>
          <p className="w-[19%]  text-[20px] px-2 text-center">
            {/* quantity input  */}
            <div className="flex items-center gap-3 my-10">
              <div className="relative">
                <input
                  type="text"
                  className="bg-[#393939] text-white px-8 w-28 font-bold py-3 text-[20px]"
                  placeholder={quantity}
                />
                <div className="absolute top-0 -translate-y-3 right-0 py-3">
                  <div
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:bg-[#D22756]  py-1 px-2"
                  >
                    <MdKeyboardArrowUp className="text-white text-xl" />
                  </div>
                  <div
                    onClick={() => setQuantity(quantity - 1)}
                    className=" hover:bg-[#D22756] py-1 px-2"
                  >
                    <MdOutlineKeyboardArrowDown className="text-white text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p className="w-[19%]  text-[15px] px-2 text-[#49789C] text-center ">
            $140.00
          </p>
        </div>
        <div className="bg-[#292929] text-white flex w-full items-center justify-between font-bun p-4">
          <div className="w-96 flex justify-center items-center gap-1">
            <input
              className="w-[55%] bg-[#393939] text-white px-4 h-12"
              placeholder="Cupon code"
              type="text"
            />
            <button className="w-[45%]  bg-[#D22756] text-white px-4 h-12">
              Apply Cupon
            </button>
          </div>
          <button className=" w-40 bg-[#E6E6E6] text-black px-4 h-12">
            Update Cart
          </button>
        </div>


      </div>
    </section>
  );
}
