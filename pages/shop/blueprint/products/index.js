import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct";

function bluePrintProducts() {
  return (
    <Layout title={"AEC - Blueprint"}>
      <div className="single-products grid grid-cols-1 gap-y-10 md:grid-cols-2  lg:grid-cols-3 px-4 md:px-0 lg:gap-12 md:gap-8 justify-center pt-4 justify-items-center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
       
      </div>
    </Layout>
  );
}

export default bluePrintProducts;
