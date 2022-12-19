import { HiHome } from "react-icons/Hi";
import { BsTelephoneForwardFill } from "react-icons/Bs";
import { MdOutgoingMail } from "react-icons/Md";
import { AiOutlineTwitter } from "react-icons/Ai";
import { BsFacebook } from "react-icons/Bs";
import { AiFillInstagram } from "react-icons/Ai";
import { FaLinkedin } from "react-icons/Fa";

export default function Footer() {
  return (
    <footer className="  shadow-md   py-[2.5rem] text-white bg-[#1E1E1E]">
      <div className="container mx-auto   ">


        <div className="grid  justify-items-center md:justify-items-start text-center md:text-left  gap-y-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div class="info">
          <h3 class="info-title text-[25px] font-bold capitalize">
            information
          </h3>
          <ul class=" capitalize mt-2">
            <li className="mb-1">help</li>
            <li className="mb-1">order Satus</li>
            <li className="mb-1">Delivery Choices</li>
            <li className="mb-1">Payment Options</li>
            <li className="mb-1">Returns</li>
            <li className="mb-1">Price Promise</li>
          </ul>
        </div>
        <div class="info">
          <h3 class="info-title text-[25px] font-bold capitalize">
            Contact us
          </h3>
          <ul class=" text-capilalize mt-3">
            <li className="flex space-x-2 mb-2  items-center">
              <HiHome className="text-primary" />
              <p>13220 Jamaica Ave, Queens, NY 11418</p>
            </li>
            <li className="flex space-x-2 mb-2  items-center">
              <BsTelephoneForwardFill className="text-primary" />

              <p>929 217-6589</p>
            </li>
            <li className="flex space-x-2 mb-2  items-center">
              <MdOutgoingMail className="text-primary" />
              <p>nprintandgraph@gmail.com</p>
            </li>
          </ul>

          <div class="mt-5 md:mt-8 ">
            <ul class=" text-capilalize flex space-x-4">
              <li className="p-3 rounded-full border cursor-pointer">
                <AiOutlineTwitter className="text-[1.2rem] cursor-pointer" />
              </li>
              <li className="p-3 rounded-full border cursor-pointer">
                <BsFacebook className="text-[1.2rem]" />
              </li>
              <li className="p-3 rounded-full border">
                <AiFillInstagram className="text-[1.2rem] cursor-pointer" />
              </li>

              <li className="p-3 rounded-full border cursor-pointer">
                <FaLinkedin className="text-[1.2rem]" />
              </li>
            </ul>
          </div>
        </div>
        <div class="info">
          <h3 class="info-title text-[25px] font-bold  capitalize">Service</h3>
          <ul class=" capitalize mt-2">
            <li className="mb-1">Queries</li>
            <li className="mb-1">Map</li>
            <li className="mb-1">Store</li>
            <li className="mb-1">Afiliate</li>
            <li className="mb-1">Check Order</li>
            <li className="mb-1">Privacy</li>
          </ul>
        </div>
        <div class="info">
          <h3 class="info-title text-[25px] font-bold capitalize">
            Newsletter
          </h3>
          <ul class=" capitalize mt-2">
            <li className="mb-1">
              <input
                type="search"
                className="rounded-full py-4  w-72"
                placeholder="Your email address"
              />
            </li>
            <li className=" mt-3">
              <p>Sign up with your email address to receive news and updates</p>
            </li>
          </ul>
        </div>
        </div>
        <div className="copy  mt-10 ">
          <p className="text-white text-center lg:text-left">©2022 SydurIT-theme Design</p>
        </div>
      </div>
    </footer>
  );
}
