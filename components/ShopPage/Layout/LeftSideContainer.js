function LeftSideContainer() {
  return (
    <section className="lg:col-span-3">
      {/* cart  */}
      <div className="h-64 lg:w-full bg-[#292929] relative">
        <p className="absolute left-0 bg-[#D22756] text-white font-eco text-[40px]  px-8 text-center top-12">
          Cart
        </p>
        <p className="absolute left-16 text-white bottom-16">No product in the cart</p>
      </div>

      {/* filter  */}
      <div className="h-64 lg:w-full bg-[#292929] relative mt-12">
        <p className="absolute left-0 bg-[#D22756] text-white font-eco text-[40px]  px-8  text-center top-12">
          Filter by Price
        </p>
      </div>

      {/* input a product name */}
      <div className="h-48 w-full bg-[#292929] relative mt-12 flex justify-center items-center">
        <input
          className="bg-[#393939] p-6 border border-white text-white placeholder-white"
          type="text"
          placeholder="enter a product title here..."
        />
      </div>

      {/* product categories  */}
      <div className="w-full bg-[#ef3737] relative mt-12">
        <p className="absolute left-0 bg-[#D22756] text-white font-eco text-[40px]  px-8  text-center top-12 z-999">
          Product categories
        </p>
        <div className="bg-[#292929] pt-36  pb-32 w-full">
          <div className="ml-16">
            <ul className="text-white font-bum list-square">
              <li className="list-square">Accessories(2)</li>
              <li className="list-square">E-Liquids(4)</li>
              <li className="list-square">Premium Mods(7)</li>
              <li className="list-square">RDAs (Drippers)(1)</li>
              <li className="list-square">Rebuildables(4)</li>
              <li className="list-square">Standard Tanks(2)</li>
              <li className="list-square">Starter Kits(2)</li>
            </ul>
          </div>
        </div>
      </div>


      {/* product tags  */}
      <div className="w-full bg-[#ef3737] relative mt-12">
        <p className="absolute left-0 bg-[#D22756] text-white font-eco text-[40px]  px-8  text-center top-12">
          Product tags
        </p>
        <div className="bg-[#292929] pt-36  pb-32 w-full">
          <div className="ml-16">
            <ul className="text-white font-bum list-square">
              <li className="list-disc">Accessories(3)</li>
              <li className="list-disc">E-Liquids(4)</li>
              <li className="list-disc">Premium Mods(7)</li>
              <li className="list-disc">RDAs (Drippers)(1)</li>
              <li className="list-disc">Rebuildables(4)</li>
              <li className="list-disc">Standard Tanks(2)</li>
              <li className="list-disc">Starter Kits(2)</li>
              <li className="list-disc">Premium Mods(7)</li>
              <li className="list-disc">RDAs (Drippers)(1)</li>
              <li className="list-disc">Rebuildables(4)</li>
              <li className="list-disc">Standard Tanks(2)</li>
              <li className="list-disc">Starter Kits(2)</li>
            </ul>
          </div>
        </div>

        <p className="absolute left-12 bg-[#D22756] text-white font-eco text-[45px] px-12 text-center bottom-6">
          Reset
        </p>
      </div>
    </section>
  );
}

export default LeftSideContainer;
