import Image from "next/image";
import product01 from "../../img/banner-2-copyright.jpg";

export default function ShareOnInstagram() {
  return (
    <section className="container mx-auto">
      <p className="font-eco text-[35px]">Find and Share on Instagram</p>
      <div className="relative container mx-auto lg:pt-0 pt-12 mb-48 mt-4">
        <div className="text-center absolute lg:top-0 lg:left-0 md:left-6 left-4 h-24  text-black mx-0 bg-[#F2D71F] pr-2">
          <p className="font-black uppercase lg:text-[70px] md:text-[50px] text-[30px] lg:-mt-6 md:-mt-5 -mt-3 font-bun">
            #VAPESTERSHOP
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4 mb-16">
        <Image src={product01}></Image>
        <Image src={product01}></Image>
        <Image src={product01}></Image>
        <Image src={product01}></Image>
        <Image src={product01}></Image>
        <Image src={product01}></Image>
      </div>
    </section>
  );
}
