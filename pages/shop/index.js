import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct";
import Slider from "@/components/Slider";


export default function Shop() {
  return (
    <Layout title={"shop"}>
      
        <div className=" slider rounded-md my-4 mb-[2rem] md:mb-[3rem]  lg:h-[25rem] md:h-[12rem]">
          <Slider />
        </div>

        <div className="single-products px-4 md:px-0 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-x-5 
        gap-y-[2rem]  justify-center   justify-items-center">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
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

// export async function getStaticProps() {
//   const res = await fetch("https://demo-production-edcf.up.railway.app/api/products?populate=*");
//   const products = await res.json();
//   return {
//     props: { products},
//     revalidate: 1,
//   };
// }
