import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import Description from "@/components/AboutUs/Description";
import OurMission from "@/components/AboutUs/OurMission";
import Footer from "@/components/Footer";
import Header from "@/components/HomePage/Header";
import MegaMenu from "@/components/ShopMegaMenu";

export default function AboutUs() {
  return <section>
    <Header/>
    <MegaMenu/>
    <AboutUsBanner>About Us</AboutUsBanner>
    <Description/>
    <OurMission>Our Mission</OurMission>
    <Footer/>
  </section>;
}
