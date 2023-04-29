import { FaStar } from "react-icons/fa";
import product1 from "/img/prod01-1-min-copyright-500x598.jpg";
import Image from "next/image";

export default function ProductPrimaryDetails() {
  return (
    <div className="py-28">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center  w-1/3 mx-auto flex flex-col">
          {/* left sede main image for magnify  */}
          <div className="border-4 border-[#EEEEEE]">
            <Image
              height={700}
              className={`max-h-[40rem] scale-100 overflow-hidden transition ease-in duration-300 p-1 w-full`}
              alt="product__imgae"
              src={product1}
            />
          </div>

          {/* left side other image  */}

          <div className="flex justify-between items-center w-full">
            <Image
              className="w-1/4 opacity-60 hover:opacity-100"
              src={product1}
            ></Image>
            <Image
              className="w-1/4 opacity-60 hover:opacity-100"
              src={product1}
            ></Image>
            <Image
              className="w-1/4 opacity-60 hover:opacity-100"
              src={product1}
            ></Image>
            <Image
              className="w-1/4 opacity-60 hover:opacity-100"
              src={product1}
            ></Image>
          </div>
        </div>

        <div className="container mx-auto w-3/5">
          
        </div>
      </div>
    </div>
  );
}
