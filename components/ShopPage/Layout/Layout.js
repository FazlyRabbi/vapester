import LeftSideContainer from "./LeftSideContainer";
import RightSideContainer from "./RightSideContainer";

function ShopLayout() {
  return (
    <section className="grid gap-8 grid-cols-12 container mx-auto">
      <LeftSideContainer/>
      <RightSideContainer/>
    </section>
  );
}

export default ShopLayout;
