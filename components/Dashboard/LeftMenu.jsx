import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosPeople } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { CiMoneyBill } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiOpenproject } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineContacts } from "react-icons/ai";
import { BsMicrosoftTeams, BsMotherboard } from "react-icons/bs";
import { MdOutlineStore, MdOutlineNoteAlt } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
// import logo from "../../img/logo.png";

function LeftMenu() {
  const router = useRouter();

  const [open, setOpne] = useState(true);

  // const { open } = useContext(AuthContext);

  return (
    <>
      <section
        className={`leftMenu shadow-xl rounded-lg 
    
    max-w-[15rem]
           transition-all duration-300
    absolute lg:static lg:z-0 z-30  mt-[1.8rem] left-0 
    
     
    w-full   md:overflow-y-auto  overflow-y-scroll  mb-2 h-[100vh] lg:h-[90vh]  bg-[#F8F9FA]
 
    ${open ? "translate-x-0" : " -translate-x-[100rem] lg:translate-x-0"}
    
    `}
      >
        {/* left menu header */}
        <div className="leftMenu__header relative">
          <div className="flex flex-col justify-center items-center py-4 ">
            {/* <Image src={logo} height={10} width={70} alt="logo" /> */}
            <Link href={`/dashboard`}>
              <h5 className=" py-2  text-[1rem] font-bold">Dashboard</h5>
            </Link>
          </div>
          {/* <span className=" mx-auto  bg-gradient-to-r from-transparent   via-[#d59620] to-transparent   h-[1.2px]  w-[90%]"></span> */}
        </div>
        {/* left menu content */}
        <div className="leftMenu__content  transition-all duration-500 my-4 flex items-center justify-center flex-col">
          <Link
            href={`/dashboard/orders`}
            className={`
          
           ${
             router.pathname === "/dashboard/orders"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/orders"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <MdOutlineStore className="  text-[1.3rem]  text-inherit" />
            </div>
            Orders
          </Link>
        </div>
      </section>
    </>
  );
}

export default LeftMenu;
