import styles from "../../styles/about.module.css";

export default function OurMission({ children }) {
  return (
    <section>
      <section
        className={`${styles.bg1} lg:min-h-[30rem] min-h-[10rem] bg-no-repeat bg-cover lg:mb-20 my-6 container mx-auto`}
      >
        <div className="relative container mx-auto lg:pt-60 pt-12">
          <div className="text-center absolute lg:top-20 lg:left-24 md:left-6 left-4  text-white mx-0 bg-[#D22756] pr-8">
            <p className="font-black uppercase lg:text-[80px] md:text-[50px] text-[30px] lg:-mt-8 md:-mt-5 -mt-3 font-bun">
              {children}
            </p>
          </div>

          <div className="w-[87%] mx-auto text-[45px] font-eco text-white font-bold">
            We consistently strive to provide our customers with accurate
            educational information, the highest quality vapor products at the
            best possible prices, while always providing personalized customer
            service.
          </div>
        </div>
      </section>
    </section>
  );
}
