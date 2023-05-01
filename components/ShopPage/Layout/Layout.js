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
        className={`${styles.banner1} lg:container w-[60%] md:w-[90%] mx-auto h-[460px] bg-no-repeat relative min-h-[10rem] bg-center bg-cover grid place-items-center lg:mt-48 lg:mb-20 mb-6`}
      >
        <div className="relative w-full h-full">
          <div className="lg:text-center absolute lg:left-[4%] left-[9%] lg:top-[15%] top-[10%]  text-white mx-0 bg-primary lg:h-36 md:h-24 h-14 lg:pr-4 pr-0 text-[30px] w-[85%] lg:w-[55%]">
            <p className="font-black uppercase lg:text-[80px] md:text-[50px] tracking-widest lg:-mt-7 md:-mt-5 -mt-3 text-start font-bun">
              {" "}
              Visit our <br />
              <span className="mt-0 uppercase tracking-widest font-black">
                {" "}
                Next Workshop
              </span>
            </p>
          </div>

          <div className="absolute lg:left-[4%] md:left-16 left-[4%] lg:top-[65%] top-[40%]">
            <div className="lg:flex md:flex justify-evenly items-center gap-10 md:gap-0 space-x-2">
              <h1 className="text-white lg:text-[80px] text-[50px] font-eco">April 25</h1>
              <button className="uppercase bg-[#292929] text-xl lg:px-8 lg:py-4  px-2 py-2 text-white  lg:mb-0 mb-4 md:mb-0">Get invitation</button>
              <p className="text-white text-xl font-eco">37 West 39th Street, New York 
                <br />
                6.00 pm, $200</p>
              <BsPlay className="text-[100px] text-white hover:text-[#292929] transition duration-100 hidden lg:block md:block"/>
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
