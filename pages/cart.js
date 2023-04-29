import CartBanner from "@/components/CartPage/CartBanner";
import CartBody from "@/components/CartPage/CartBody";
import Header from "@/components/HomePage/Header";
import MegaMenu from "@/components/ShopMegaMenu";

export default function Cart(){
  return(<section>
    <Header/>
    <MegaMenu/>
    <CartBanner>Cart</CartBanner>
    <CartBody/>
  </section>)
}