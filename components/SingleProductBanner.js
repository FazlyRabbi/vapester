import styles from "../styles/Shop.module.css";

function SingleProductBanner({ children}) {
  
  return (
    
    // lg:my-20 
    <section
      className={`${styles.shop1} lg:min-h-[20rem] min-h-[10rem] bg-no-repeat bg-cover  my-6`}
    >
      <div className="relative container mx-auto lg:pt-60 pt-12">
        <div className="text-center absolute lg:top-1/2 lg:left-0 md:left-6 left-4  text-white mx-0 bg-[#D22756] pr-12 h-22">
          <p className="font-black uppercase lg:text-[60px] md:text-[50px] text-[30px] lg:-mt-6 md:-mt-5 -mt-3 font-bum">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleProductBanner;
