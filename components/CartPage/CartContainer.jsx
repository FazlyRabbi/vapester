import Image from "next/image";
import { MdKeyboardArrowUp, MdOutlineCancel, MdOutlineKeyboardArrowDown } from "react-icons/md";
import product1 from "../../img/prod01-1-min-copyright-500x598.jpg";
import { useState } from "react";

export default function CartContainer() {

 

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


      <div className="w-[70%] mx-auto">
        <div className="bg-[#292929] text-white flex w-full items-center font-bun">
          <div className="w-[43%] py-6 text-[15px] px-2 ml-20">Product</div>
          <div className="w-[19%] py-6  text-[15px] px-2 text-center">Price</div>
          <div className="w-[19%] py-6  text-[15px] px-2 text-center">Quantity</div>
          <div className="w-[19%] py-6  text-[15px] px-2 text-center">Subtotal</div>
        </div>
      </div>
      
    </section>
  );
}
