import { MdOutlineCancel } from "react-icons/md";
import product1 from "../../img/prod01-1-min-copyright-500x598.jpg";
import Image from "next/image";

export default function CartBody() {
  return (
    <section>
      <div className="w-[70%] mx-auto">
        <div className="bg-[#D22756] text-white flex w-full items-center font-bun">
          <p className="w-[55%] py-6 text-[20px] px-2 ml-20">Product</p>
          <p className="w-[15%] py-6 text-[20px] px-2 text-center">Price</p>
          <p className="w-[15%] py-6 text-[20px] px-2 text-center">Quantity</p>
          <p className="w-[15%] py-6 text-[20px] px-2 text-center">Subtotal</p>
        </div>
        <div className="bg-[#292929] text-white flex w-full items-center font-bun">
          <div className="w-[55%] py-6 text-[20px] px-2 ml-20">
            <div className="flex justify-start items-center gap-8">
              <MdOutlineCancel />
              <Image className="w-12 h-12" src={product1}></Image>
              <p className="text-[10px]">
                Vaporesso Nebula Vape Kit - Yellow, Small
              </p>
            </div>
          </div>
          <p className="w-[15%] py-6 text-[15px] px-2 text-[#49789C] text-center ">$70.00</p>
          <p className="w-[15%] py-6 text-[20px] px-2 text-center">Quantity</p>
          <p className="w-[15%] py-6 text-[20px] px-2 text-center">Subtotal</p>
        </div>
      </div>
    </section>
  );
}
