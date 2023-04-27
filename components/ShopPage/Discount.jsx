import styles from "../../styles/Shop.module.css";

export default function DiscountBanner() {
  return (
    <section
      className={`${styles.discount1} container mx-auto h-96 bg-no-repeat relative min-h-[10rem] bg-center p-0 bg-cover grid place-items-center`}
    >
      <div className="relative w-full h-full">
        <div className="lg:text-center absolute lg:right-[18%] right-6 lg:top-[30%] top-[40%]  text-white lg:mx-0 bg-[#AF7FFC] lg:h-40 h-12 w-[90%] lg:w-full mx-auto">
          <p className="font-black uppercase lg:text-[80px] text-[25px] tracking-widest  lg:-mt-7 -mt-2 text-center font-bun">
            {" "}
            SAVES 30% ON <br />
            <span className="mt-0 uppercase tracking-widest font-black text-[25px]"> popular e liquids</span>
          </p>
        </div>
      </div>
    </section>
  );
}
