import styles from "../../styles/Shop.module.css";

export default function DiscountBanner() {
  return (
    <section
      className={`${styles.discount1} container mx-auto h-96 bg-no-repeat relative min-h-[10rem] bg-center p-0 bg-cover grid place-items-center`}
    >
      <div className="relative w-full h-full">
        <div className="text-center absolute right-[18%] top-[30%]  text-white mx-0 bg-[#AF7FFC] h-40">
          <p className="font-black uppercase text-[80px] tracking-widest  -mt-7 text-center font-bun">
            {" "}
            SAVES 30% ON <br />
            <span className="mt-0 uppercase tracking-widest font-black"> popular e liquids</span>
          </p>
        </div>
      </div>
    </section>
  );
}
