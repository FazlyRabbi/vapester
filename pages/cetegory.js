import Header from "@/components/HomePage/Header";
import DiscountBanner from "@/components/ShopPage/Discount";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import ProductsCetegorys from "@/components/CetegoryPage/ProductsCetegorys";

export default function cetegory() {
  return (
    <section>
      <Header />
      {/* <DiscountBanner /> */}
      <ShopLayout
        title={`Category: DEAL OF THE DAY
`}
      >
        <ProductsCetegorys />
      </ShopLayout>
    </section>
  );
}
