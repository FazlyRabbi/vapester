import Link from "next/link";
import Image from "next/image";
import product from "../img/product.jpg";
import { AiOutlineRight } from "react-icons/Ai";

export default function SingleProduct() {
  return (
    <section className="product  cursor-pointer ">
      <div className="product-img">
        <Image src={product} height="350" width="350" className="rounded-md" />
      </div>
      <div className="product-details">
        <h3 className="product-title text-[20px] font-bold pt-2">
          Jobsite Safety Sign English Covid-19
        </h3>

        <p className="product-des text-base mb-[2rem]">
          Keep customers and employees informed.
        </p>

        <Link
          href={"/shop/blueprint"}
          className="  capitalize py-2  pl-2 pr-1 rounded-md text-white bg-primary"
        >
          view details
          <AiOutlineRight className="inline-block pl-1 " />
        </Link>
      </div>
    </section>
  );
}
