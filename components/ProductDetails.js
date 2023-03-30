
import m1 from "../img/p1.jpg";
import m2 from "../img/p2.jpg";
import m3 from "../img/p3.jpg";
import RichText from "./RitchText/RichText";

// import image
import ThumbsGallery from "./Slider/ThumbGellery";

// import required modules
function ProductDetails({ data }) {


  return (
    <section className=" overflow-hidden w-full">
      <div className="product-slider">
      <ThumbsGallery url={{
       url_1:m1.src,
       url_2:m2.src,
       url_3:m3.src,
       url_4:m1.src,
      }}/>
      </div>
      <div className="product-content mt-4">
        <RichText />
      </div>
    </section>
  );
}

export default ProductDetails;
