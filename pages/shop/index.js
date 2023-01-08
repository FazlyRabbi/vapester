import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import SingleProduct from "@/components/SingleProduct";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
export default function Shop({ products: { data } }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/signin");
  //   }
  // }, [user]);

  return (
    <Layout title={"shop"}>
      <div className=" slider rounded-md my-4  md:mb-0 lg:h-[26rem] md:h-[12rem]">
        <Slider />
      </div>
      <div className="single-products grid md:grid-cols-2  lg:grid-cols-3 lg:gap-10 md:gap-5 justify-center  gap-y-8 justify-items-center">
        {data.map((data) => (
          <SingleProduct {...data} key={data.id} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {


  const res = await fetch("https://demo-production-edcf.up.railway.app/api/products?populate=*");
  const products = await res.json();

  return {
    props: { products},
    revalidate: 1,
  };
}
