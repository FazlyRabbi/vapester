import DynamicBanner from "@/components/DynamicBanner";
import Header from "@/components/HomePage/Header";
import DiscountBanner from "@/components/ShopPage/Discount";
import Features from "@/components/ShopPage/Features";



export default function Shop(){
  return(
    <section>
      {/*header */}
      <Header />
      {/* header */}
      <DynamicBanner>shop</DynamicBanner>
      <DiscountBanner/>
      <Features/>
    </section>
  )
}