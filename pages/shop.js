import DynamicBanner from "@/components/DynamicBanner";
import Header from "@/components/HomePage/Header";
import DiscountBanner from "@/components/ShopPage/Discount";
import Features from "@/components/ShopPage/Features";
import ShopLayout from "@/components/ShopPage/Layout/Layout";



export default function Shop(){
  return(
    <section>
      {/*header */}
      <Header />
      {/* header */}
      <DynamicBanner>shop</DynamicBanner>
      <DiscountBanner/>
      <Features/>
      <ShopLayout/>
    </section>
  )
}