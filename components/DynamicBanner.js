import styles from "../styles/Shop.module.css";

function DynamicBanner({children}) {
  return (
    <section
    // 
      className={`${styles.shop1} min-h-[20rem] bg-no-repeat bg-cover my-20`}
    >
           <div className="relative container mx-auto pt-60">
          <div className="text-center absolute top-1/2 left-0  text-white mx-0 bg-[#D22756] pr-8">
            <p className="font-black uppercase text-[80px] -mt-6">
             {children}
            </p>
          </div>
        </div>
    </section>
  );
}

export default DynamicBanner;
