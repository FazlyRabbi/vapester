import "tailwindcss/tailwind.css";
import { API_URL } from "../config/index";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home({ news }) {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl uppercase pt-[10rem] cursor-pointer">
        <ul className=" flex  justify-center  space-x-4">
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <Link href={"/shop"}>shop</Link>
          <li>
            <Link href={"/about"}>about</Link>
          </li>
        </ul>
      </h1>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();
  return {
    props: { news },
  };
}
