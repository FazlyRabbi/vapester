import React from "react";
import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import Calculator from "@/components/Calculator";

export default function productDetails({ product: { data } }) {
  return (
    <Layout title={"Blue Print"}>
      <div className="wrapper p-4 grid xl:grid-cols-3 grid-cols-1  gap-16   ">
        <div className="product   xl:col-span-2 ">
          {<ProductDetails data={data} />}
        </div>
        <div className="price-calculator order-first  xl:order-last">
          <Calculator />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `http://localhost:1337/api/products?populate=Images&filters[Slug]$[$eqi]=${query.slug}`
  );
  const product = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { product },
  };
}
