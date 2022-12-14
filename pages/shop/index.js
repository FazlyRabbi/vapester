import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import SingleProduct from "@/components/SingleProduct";
export default function Shop() {
  return (
    <Layout title={"shop"}>
      <div className=" slider rounded-md  lg:h-[26rem] md:h-[13rem]">
        <Slider />
      </div>
      <div className="single-products grid md:grid-cols-2  lg:grid-cols-3 lg:gap-10 md:gap-5 justify-center  justify-items-center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />

        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </Layout>
  );
}
