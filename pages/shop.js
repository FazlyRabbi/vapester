import DynamicBanner from "@/components/DynamicBanner";
import Header from "@/components/HomePage/Header";
import MegaMenu from "@/components/ShopMegaMenu";

import DiscountBanner from "@/components/ShopPage/Discount";
import Features from "@/components/ShopPage/Features";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import { BsFillChatLeftFill } from "react-icons/bs";

export default function Shop() {
  return (
    <section>
      {/*header */}
      <Header />
      {/* header */}
      <MegaMenu/>
      {/* chat option start  */}
      {/* <div className="fixed left-4 bottom-20 flex justify-center items-center gap-1 z-40">
        <div className="bg-[#49B93B] p-6 rounded-full">
          <BsFillChatLeftFill className="text-white" />
        </div>
        <div className="bg-[#fafafa] p-3 rounded-3xl">
            <p>Presale Chat</p>
          </div>
      </div> */}
      {/* chat option end  */}
      

      <DynamicBanner>shop</DynamicBanner>
      <DiscountBanner />
      <Features />
      <ShopLayout />
    </section>
  );
}
