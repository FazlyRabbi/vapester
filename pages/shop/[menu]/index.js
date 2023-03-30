import Layout from "@/components/Layout";
import SingleProduct from "@/components/SingleProduct";
import { Typography, Breadcrumbs } from "@material-tailwind/react";


export default function productDetails() {
  
  // const filteredProduct = product?.data.filter((data) => {
  //   if (params.menu === data.attributes.sibebar.data.attributes.Menu) {
  //     return data;
  //   }
  // });



  return (
    <Layout>
      
      <div className=" mb-4 ">
        <Typography variant="h1" className={` my-3 text-[1.5rem]`}>
          Material Tailwind
        </Typography>

        <Breadcrumbs fullWidth>
          <a href="#" className="opacity-60">
            Docs
          </a>
          <a href="#" className="opacity-60">
            Components
          </a>
          <a href="#">Breadcrumbs</a>
        </Breadcrumbs>
      </div>


      <div
        className="single-products px-4 md:px-0 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-x-5 
        gap-y-[2rem]  justify-center   justify-items-center"
      >
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>

    </Layout>
  );
}



// export async function getStaticProps({ params }) {
//   const res = await fetch(
//     `https://demo-production-edcf.up.railway.app/api/products?populate=*`
//   );

//   const product = await res.json();

//   return {
//     props: { product, params },
//     revalidate: 1,
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://demo-production-edcf.up.railway.app/api/sibebars?populate=*`
//   );

//   const path = await res.json();

//   return {
//     paths: path.data.map((menu) => {
//       return {
//         params: {
//           menu: menu.attributes.Menu,
//         },
//       };
//     }),

//     fallback: false,
//   };
// }
