import { BsPlay } from "react-icons/bs";
import LeftSideContainer from "./LeftSideContainer";
import RightSideContainer from "./RightSideContainer";
import styles from "/styles/Shop.module.css";
import Footer from "@/components/Footer";

function ShopLayout() {
  return (
    <>
      <section className="grid gap-8 lg:grid-cols-12 container mx-auto flex-row-reverse">
        <LeftSideContainer />
        <RightSideContainer />
      </section>

      {/* workshop banner  */}
      <div
        className={`${styles.banner1} container mx-auto h-[460px] bg-no-repeat relative min-h-[10rem] bg-center bg-cover grid place-items-center mt-48 mb-20`}
      >
        <div className="relative w-full h-full">
          <div className="text-center absolute lg:left-[4%] lg:top-[15%]  text-white mx-0 bg-[#D22756] h-36 pr-4">
            <p className="font-black uppercase lg:text-[80px] tracking-widest -mt-7 text-start font-bun">
              {" "}
              Visit our <br />
              <span className="mt-0 uppercase tracking-widest font-black">
                {" "}
                Next Workshop
              </span>
            </p>
          </div>

          <div className="absolute left-[4%] top-[65%]">
            <div className="lg:flex justify-evenly items-center gap-10">
              <h1 className="text-white lg:text-[80px] font-eco">April 25</h1>
              <button className="uppercase bg-[#292929] text-xl px-8 py-4 text-white">Get invitation</button>
              <p className="text-white text-xl font-eco">37 West 39th Street, New York 
                <br />
                6.00 pm, $200</p>
              <BsPlay className="text-[100px] text-white hover:text-[#292929] transition duration-100"/>
            </div>
          </div>
        </div>
      </div>

       {/* workshop banner  */}

       <Footer/>
    </>
  );
}

export default ShopLayout;
