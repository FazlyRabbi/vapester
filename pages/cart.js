import CartBanner from "@/components/CartPage/CartBanner";
import CartBody from "@/components/CartPage/CartBody";
import CartContainer from "@/components/CartPage/CartContainer";
import Header from "@/components/HomePage/Header";
import MegaMenu from "@/components/ShopMegaMenu";

export default function Cart() {
  
  return (
    <section>
      <Header />
      <MegaMenu />
      <CartBanner>Cart</CartBanner>
      {/* <CartBody /> */}
      <CartContainer/>
    </section>
  );
}
