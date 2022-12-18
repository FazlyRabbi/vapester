import Link from "next/link";
import styles from "@/styles/Home.module.css";
function Sidebar() {
  return (
    <aside className="sidebar">
      <Link
        href={"#"}
        className="text-center text-base font-bold mb-3 bg-primary text-white p-2 rounded-md   w-[80%] block"
      >
        All Products
      </Link>

      <div className="aec-bluprints"> 
        <ul className="w-[80%] ">
          <li
            className={`text-titleSm  capitalize font-bold bg-[#111827] text-white p-2 rounded-tl-md rounded-tr-md text-left ${styles.borderGradient}`}
          >
            <Link href={"/shop/blueprint/products"}>BluePrint</Link>
          </li>
          <li className="text-base  border-b cursor-pointer border-softGray p-2 font-bold capitalize hover:text-primary">
            <Link href={"/shop/blueprint"}>AEC - Blueprints - Bond prints</Link>
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
        </ul>
      </div>
      <div className="aec-bluprints mt-2">
        <ul className="w-[80%] ">
          <li
            className={`text-titleSm  capitalize font-bold bg-[#111827]  text-white p-2 rounded-tl-md rounded-tr-md text-left ${styles.borderGradient}`}
          >
            menu title
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
        </ul>
      </div>
      <div className="aec-bluprints mt-2">
        <ul className="w-[80%] ">
          <li
            className={`text-titleSm  capitalize font-bold bg-[#111827]  text-white p-2 rounded-tl-md rounded-tr-md text-left ${styles.borderGradient}`}
          >
            menu title
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
        </ul>
      </div>
      <div className="aec-bluprints mt-2">
        <ul className="w-[80%] ">
          <li
            className={`text-titleSm  capitalize font-bold bg-[#111827]  text-white p-2 rounded-tl-md rounded-tr-md text-left ${styles.borderGradient}`}
          >
            menu title
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
        </ul>
      </div>
      <div className="aec-bluprints mt-2">
        <ul className="w-[80%] ">
          <li
            className={`text-titleSm  capitalize font-bold bg-[#111827]  text-white p-2 rounded-tl-md rounded-tr-md text-left ${styles.borderGradient}`}
          >
            menu title
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
          <li className="text-base hover:text-primary border-b cursor-pointer border-softGray p-2 font-bold capitalize">
            menu sub items
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
