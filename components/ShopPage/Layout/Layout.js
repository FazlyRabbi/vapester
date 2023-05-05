import LeftSideContainer from "./LeftSideContainer";
import styles from "/styles/Shop.module.css";
import Footer from "@/components/Footer";

import Image from "next/image";

function ShopLayout({ children, title }) {
  return (
    <>
      <section className="container mx-auto px-4 my-10">
        <div className="grid gap-8 lg:grid-cols-12  ">
          <LeftSideContainer />

          {/* Place Your Right Content */}
          <div className="lg:col-span-9 order-2 ">
            <h1
              className=" font-eco font-bold text-[1.6rem]
           uppercase
          mb-2 text-primary"
            >
              {title}
            </h1>
            {children}
            {/* workshop banner  */}
            {/* <div
              className={`${styles.banner1}  w-full h-[10rem] md:h-[20rem] rounded-sm bg-no-repeat relative min-h-[10rem] bg-center bg-cover 
         my-[3rem]
     `}
            >
              <div className="relative w-full h-full">
                <div
                  className=" flex absolute 
         
          top-[50%]
           left-[50%]

            justify-center  

            -translate-y-[50%]
            -translate-x-[50%]
         text-white mx-0
          h-[5rem]
           w-[90%]
         bg-primary 
          "
                >
                  <p
                    className="uppercase lg:text-[4rem] md:text-[3rem] 
            
             text-[1.5em]

            tracking-widest   font-bun"
                  >
                    {" "}
                    Visit our Next Workshop
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ShopLayout;
