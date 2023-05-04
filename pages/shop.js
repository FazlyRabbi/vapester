import Header from "@/components/HomePage/Header";
import DiscountBanner from "@/components/ShopPage/Discount";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import Products from "@/components/ShopPage/Layout/Products";

export default function Shop() {
  return (
    <section>
      <Header />
      <DiscountBanner />
      <ShopLayout title={`shop`}>
        <Products />
      </ShopLayout>
    </section>
  );
}
