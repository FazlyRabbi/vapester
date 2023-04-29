import DynamicBanner from "@/components/DynamicBanner";
import Header from "@/components/HomePage/Header";
import MegaMenu from "@/components/ShopMegaMenu";
import ProductPrimaryDetails from "@/components/SingleProduct/ProductPrimaryDetails";
import SingleProductBanner from "@/components/SingleProductBanner";

export default function SingleProduct(){
  return(
    <section>
          <Header/>
          <MegaMenu/>
          <SingleProductBanner>VAPORESSO NEBULA VAPE KIT</SingleProductBanner>
          <ProductPrimaryDetails/>
    </section>
  )
}