import styles from "../../styles/Testimonial.module.css";

export default function ReviewForm() {
  return (
    <section
      className={`${styles.home1} lg:min-h-[20rem] min-h-[10rem] bg-no-repeat bg-cover lg:my-20 my-6 container mx-auto`}
    >
      <div className="relative container mx-auto lg:pt-60 pt-12">
        <div
          className="text-center absolute lg:top-16 lg:left-16 md:left-6 left-4
        text-white mx-0 bg-[#D22756] pr-8"
        >
          <div className="font-black uppercase lg:text-[80px] md:text-[50px] text-[30px] lg:-mt-8 md:-mt-5 -mt-3">
            ADD A REVIEW
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-[4/5] flex justify-evenly items-center gap-4 px-8">
          <input
            className="w-1/2 py-3 px-4"
            type="text"
            placeholder="Your name"
          />
          <input
            className="w-1/2 py-3 px-4"
            type="text"
            placeholder="Your email"
          />
        </div>
        
      </div>
    </section>
  );
}
