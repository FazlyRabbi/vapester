import Image from "next/image";
import product1 from "../../img/prod01-1-min-copyright-500x598.jpg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function CartContainer() {
  const [quantity, setQuantity] = useState(0);

  return (
    <section>
      <div className="w-[70%] mx-auto">
        <div className="bg-[#D22756] text-white flex w-full items-center font-bun">
          <p className="w-[43%] py-6 text-[20px] px-2 ml-20">Product</p>
          <p className="w-[19%] py-6 text-[20px] px-2 text-center">Price</p>
          <p className="w-[19%] py-6 text-[20px] px-2 text-center">Quantity</p>
          <p className="w-[19%] py-6 text-[20px] px-2 text-center">Subtotal</p>
        </div>
      </div>

      <div className="w-[70%] mx-auto bg-[#292929] p-4">
        <div className=" text-white flex w-full items-center font-bun">
          <div className="w-[43%] py-6 text-[15px] px-2 ml-20">
            <div className="flex justify-evenly items-center">
              <RxCross1 />
              <Image src={product1} className="h-12 w-12"></Image>
              <p>Vaporesso Nebula Vape Kit - Yellow, Small</p>
            </div>
          </div>
          <div className="w-[19%] py-6  text-[15px] px-2 text-center">
            $70.00
          </div>
          <div className="w-[19%] py-6  text-[15px] px-2 text-center">
            <div className="relative">
              <input
                type="text"
                className="bg-[#393939] text-white px-8 w-28 font-bold py-3 text-[20px]"
                placeholder={quantity}
              />
              <div className="absolute top-0 -translate-y-3 right-0 py-3 ">
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
          <div className="w-[19%] py-6  text-[15px] px-2 text-center">
            $140.00
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <input
              className="bg-[#393939] h-12 p-5 text-white"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="bg-[#D22756] h-12 px-6 text-white font-eco ml-1 font-bold translate-y-[1px]">Apply Coupon</button>
          </div>
          <button className="bg-[#D22756] h-12 px-12 font-bold text-white font-eco">Update Cart</button>
        </div>
      </div>
    </section>
  );
}
