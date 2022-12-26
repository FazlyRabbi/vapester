import React from "react";
import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import Calculator from "@/components/Calculator";

function BluePrint() {
  return (
    <Layout title={"blue print"}>
      <div className="wrapper p-4 grid xl:grid-cols-3 grid-cols-1  gap-16   ">
        <div className="product   xl:col-span-2 ">
          <ProductDetails />
        </div>
        <div className="price-calculator order-first  xl:order-last">
          <Calculator />
        </div>
      </div>
    </Layout>
  );
}

export default BluePrint;
