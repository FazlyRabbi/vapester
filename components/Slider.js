import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import b1 from "../img/banner1.jpg";
import b2 from "../img/banner2.jpg";
import b3 from "../img/banner3.jpg";
import b4 from "../img/banner4.jpg";
import b5 from "../img/banner5.jpg";
import b6 from "../img/banner6.jpg";

export default function Slider() {
  return (
    <Carousel
      autoPlay="true"
      dynamicHeight="true"
      infiniteLoop="ture"
      swipeable="true"
      transitionTime="1000"
    >
      <div>
        <Image
          src={b2}
          width={500}
          height={1000}
          className=" rounded-md shadow-sm"
        />
      </div>
      <div>
        <Image
          src={b3}
          width={500}
          height={1000}
          className=" rounded-md shadow-sm"
        />
      </div>
      <div>
        <Image
          src={b4}
          width={500}
          height={1000}
          className=" rounded-md shadow-sm"
        />
      </div>
      <div>
        <Image
          src={b5}
          width={500}
          height={1000}
          className=" rounded-md shadow-sm"
        />
      </div>
      <div>
        <Image
          src={b6}
          width={500}
          height={1000}
          className=" rounded-md shadow-sm"
        />
      </div>
    </Carousel>
  );
}
