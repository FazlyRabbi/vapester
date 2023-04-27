const {
  FaShippingFast,
  FaThumbsUp,
  FaMoneyBillAlt,
} = require("react-icons/fa");
const { MdAttachMoney } = require("react-icons/md");
const { RiCustomerService2Fill } = require("react-icons/ri");

function Features() {
  return (
    <div className="lg:flex flex-wrap justify-around my-12 container mx-auto p-4 lg:ml-0 w-[65%] lg:w-full mx-auto">
      <div className="lg:flex justify-center items-center ">
        <FaShippingFast className="text-[50px] mr-4" />
        <div>
          <p className="text-[25px] text-gray-800">Free Shipping</p>
          <p className="text-gray-500">No minimum order</p>
        </div>
      </div>
      <div className="lg:flex justify-center items-center ">
        <FaThumbsUp className="text-[50px] mr-4" />
        <div>
          <p className="text-[25px] text-gray-800">60 Day Warranty</p>
          <p className="text-gray-500">Free roundtrip shipping</p>
        </div>
      </div>

      <div className="lg:flex justify-center items-center ">
        <FaMoneyBillAlt className="text-[50px] mr-4" />
        <div>
          <p className="text-[25px] text-gray-800">Easy Returns</p>
          <p className="text-gray-500">With no restocking fee</p>
        </div>
      </div>

      <div className="lg:flex justify-center items-center ">
        <RiCustomerService2Fill className="text-[50px] mr-4" />
        <div>
          <p className="text-[25px] text-gray-800">Expert Advice</p>
          <p className="text-gray-500">In-store, call, email, chat</p>
        </div>
      </div>

      <div className="lg:flex justify-center items-center ">
        <MdAttachMoney className="text-[50px]" mr-4/>
        <div>
          <p className="text-[25px] text-gray-800">Low Prices</p>
          <p className="text-gray-500">Shop with confidence</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
