import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import Footer from "@/components/Footer";
import Header from "@/components/HomePage/Header";
import MegaMenu from "@/components/ShopMegaMenu";

export default function AboutUs() {
  return <section>
    <Header/>
    <MegaMenu/>
    <AboutUsBanner>About Us</AboutUsBanner>
    <Footer/>
  </section>;
}
