import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";

function LeftSideContainer() {
  const [open, setOpen] = useState(true);

  return (
    <section
      className="lg:col-span-3
    
    transition-all duration-500 
    
    lg:order-1 md:order-2 order-2"
    >
      <div
        className="cetetogy__pannel bg-primary p-3  text-white cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="pannel__header">
          {/* header section */}

          <div className=" flex justify-between">
            <div className="flex space-x-3 items-center">
              <BiMenu className="  text-white  text-[1.5rem]" />
              <span className=" font-eco font-bold text-[1.2rem]">
                Cetegory
              </span>
            </div>
            <BsArrowUpShort className="text-[1.5rem]" />
          </div>

          {/* body section */}
        </div>
      </div>

      <div
        className={` bg-[#292929] 
        
     overflow-hidden text-white  font-eco font-bold
     ${open ? `py-2  ` : `h-0`}


        `}
      >
        <ul className={`p-2 space-y-4  ml-2 uppercase`}>
          <li className=" hover:text-primary">Deal of the day</li>
          <li className=" hover:text-primary">new collection</li>
          <li className=" hover:text-primary">Disposable vape</li>
          <li className=" hover:text-primary">pod sytle</li>
          <li className=" hover:text-primary">Disposable vape</li>
          <li className=" hover:text-primary">iqos</li>
          <li className=" hover:text-primary">e-juice </li>
          <li className=" hover:text-primary">VAPE MODS </li>
          <li className=" hover:text-primary">COILS</li>
          <li className=" hover:text-primary">ATOMIZER </li>
          <li className=" hover:text-primary">SaltNic Pods </li>
          <li className=" hover:text-primary">ACCESSORIES </li>
          <li className=" hover:text-primary">SPECIAL OFFER </li>
          <li className=" hover:text-primary">Uncategorized</li>
       
         
        </ul>
      </div>

      {/* cart  */}
      {/* <div className="h-64 w-[65%] lg:w-full mx-auto bg-[#292929] relative">
        <p className="absolute left-0  bg-primary text-white font-eco lg:text-[40px] text-[30px]  px-8 text-center top-12">
          Cart
        </p>
        <p className="absolute left-16 text-white bottom-16">
          No product in the cart
        </p>
      </div> */}

      {/* filter  */}
      {/* <div className="h-64 w-[65%] lg:w-full mx-auto bg-[#292929] relative mt-12">
        <p className="absolute left-0  bg-primary text-white font-eco lg:text-[40px] text-[30px]  px-8  text-center top-12">
          Filter by Price
        </p>

        <div className="absolute left-28 top-40">
          <input type="range" id="volume" name="volume" min="0" max="50" />
        </div>
      </div> */}

      {/* input a product name */}
      {/* <div className="h-48 w-[65%] lg:w-full mx-auto bg-[#292929] relative mt-12 flex justify-center items-center">
        <input
          className="bg-[#393939] p-6 border border-white text-white placeholder-white"
          type="text"
          placeholder="enter a product title here..."
        />
      </div> */}

      {/* product categories  */}
      {/* <div className="w-[65%] lg:w-full  mx-auto  bg-primary relative mt-12">
        <p className="absolute left-0  bg-primary text-white font-eco lg:text-[40px] text-[30px]  px-8  text-center top-12">
          Product categories
        </p>
        <div className="bg-[#292929] pt-36  pb-32 w-full">
          <div className="ml-16">
            <ul className="text-white font-bum list-square">
              <li className="list-square">Accessories(2)</li>
              <li className="list-square">E-Liquids(4)</li>
              <li className="list-square">Premium Mods(7)</li>
              <li className="list-square">RDAs (Drippers)(1)</li>
              <li className="list-square">Rebuildables(4)</li>
              <li className="list-square">Standard Tanks(2)</li>
              <li className="list-square">Starter Kits(2)</li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* product tags  */}
      {/* <div className="  bg-primary relative mt-12 w-[65%] lg:w-full mx-auto">
        <p className="absolute left-0  bg-primary text-white font-eco lg:text-[40px] text-[30px]  px-8  text-center top-12">
          Product tags
        </p>
        <div className="bg-[#292929] pt-36  pb-32 w-full">
          <div className="ml-16">
            <ul className="text-white font-bum list-square">
              <li className="list-disc">Accessories(3)</li>
              <li className="list-disc">E-Liquids(4)</li>
              <li className="list-disc">Premium Mods(7)</li>
              <li className="list-disc">RDAs (Drippers)(1)</li>
              <li className="list-disc">Rebuildables(4)</li>
              <li className="list-disc">Standard Tanks(2)</li>
              <li className="list-disc">Starter Kits(2)</li>
              <li className="list-disc">Premium Mods(7)</li>
              <li className="list-disc">RDAs (Drippers)(1)</li>
              <li className="list-disc">Rebuildables(4)</li>
              <li className="list-disc">Standard Tanks(2)</li>
              <li className="list-disc">Starter Kits(2)</li>
            </ul>
          </div>
        </div>

        <p className="absolute left-12  bg-primary text-white font-eco lg:text-[40px] text-[30px] px-12 text-center bottom-6">
          Reset
        </p>
      </div> */}
    </section>
  );
}

export default LeftSideContainer;
