import React from "react";
import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import Calculator from "@/components/Calculator";

function BluePrint() {
  return (
    <Layout title={"blue print"}>
      <div className="wrapper   grid xl:grid-cols-3 sm:grid-cols-1  gap-16 sm:justify-items-end xl:justify-items-start ">
        <div className="product  col-span-2 ">
          <ProductDetails />
        </div>
        <div className="price-calculator">
          <Calculator />
        </div>
      </div>
    </Layout>
  );
}

export default BluePrint;
