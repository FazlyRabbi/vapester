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
      <DynamicBanner>shop</DynamicBanner>
      <DiscountBanner />
      <ShopLayout />
    </section>
  );
}
