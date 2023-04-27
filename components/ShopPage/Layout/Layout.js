import LeftSideContainer from "./LeftSideContainer";
import RightSideContainer from "./RightSideContainer";
import styles from "/styles/Shop.module.css";

function ShopLayout() {
  return (
    <>
      <section className="grid gap-8 grid-cols-12 container mx-auto">
        <LeftSideContainer />
        <RightSideContainer />
      </section>
      {/* workshop banner  */}

      <div className={`${styles.discount1} container mx-auto h-96 bg-no-repeat relative min-h-[10rem] bg-center bg-cover grid place-items-center mt-48 mb-20`}>
        <p>pskdjhsslds</p>
      </div>
    </>
  );
}

export default ShopLayout;
