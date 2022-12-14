import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct";

function bluePrintProducts() {
  return (
    <Layout title={"AEC - Blueprint"}>
      <div className="single-products grid md:grid-cols-3  lg:grid-cols-4 lg:gap-12 md:gap-8 justify-center  justify-items-center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
       
      </div>
    </Layout>
  );
}

export default bluePrintProducts;
