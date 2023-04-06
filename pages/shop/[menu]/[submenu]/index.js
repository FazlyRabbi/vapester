import Calculator from "@/components/Calculator";
import Layout from "@/components/Layout";
import ProductDetails from "@/components/ProductDetails";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../../context/SidebarContext";
import slugify from "slugify";

// (data) => router.query.menu ===

function index() {
  const [singleProduct, setSingleProduct] = useState(null);

  const router = useRouter();
  const { products } = useContext(SidebarContext);

  useEffect(() => {
    const slug = slugify(`${router.query.submenu}`);
    const singleProduct = products?.find(
      (product) => product?.attributes.Slug === slug.toLowerCase()
    );
    setSingleProduct(singleProduct);
  }, [router.query.submenu]);

  return (
    <Layout title={router.query.submenu}>
      <div className="product heading ml-4 ">
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
      <div className="wrapper p-4 grid xl:grid-cols-3 grid-cols-1 gap-16  ">
        <div className="xl:col-span-2 ">
          {singleProduct && <ProductDetails details={singleProduct} />}
        </div>
        <div>
          <Calculator />
        </div>
      </div>
    </Layout>
  );
}

export default index;

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://demo-production-edcf.up.railway.app/api/products?populate=*"
//   );
//   const products = await res.json();
//   return {
//     props: { products },
//     revalidate: 1,
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://demo-production-edcf.up.railway.app/api/products?populate=*`
//   );

//   const path = await res.json();

//   return {
//     paths: path.data.map((menu) => {
//       return {
//         params: {
//           menu: menu.attributes.sibebar.data.attributes.Menu,
//           submenu: menu.attributes.Title,
//         },
//       };
//     }),
//     fallback: false, // can also be true or 'blocking'
//   };
// }
