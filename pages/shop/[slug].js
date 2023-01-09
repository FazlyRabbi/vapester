import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import Calculator from "@/components/Calculator";
import { useRouter } from "next/router";

export default function productDetails() {
  const { query } = useRouter();
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await fetch(
      `https://demo-production-edcf.up.railway.app/api/products?populate=Images&filters[Slug]$[$eqi]=${query.slug}`
    );
    const product = await res.json();
    setData(product);
  };

  useEffect(() => {
    getData();
  }, []);

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

// export async function getServerSideProps ({ query }) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   // const res = await fetch(
//   //   `https://demo-production-edcf.up.railway.app/api/products?populate=Images&filters[Slug]$[$eqi]=${query.slug}`
//   // );
//   // const product = await res.json();

//    console.log(query);
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {  },

//   };
// }
