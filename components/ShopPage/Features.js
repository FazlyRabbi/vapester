const { FaShippingFast, FaThumbsUp, FaMoneyBillAlt } = require("react-icons/fa");
const { MdAttachMoney } = require("react-icons/md");
const { RiCustomerService2Fill } = require("react-icons/ri");

function Features(){
  return(      <div className="flex flex-wrap justify-around my-12 container mx-auto">
  <div className="p-2">
    <FaShippingFast className="text-[40px]" />
    <p className="text-[25px] text-gray-800">Free Shipping</p>
    <p className="text-gray-500">No minimum order</p>
  </div>
  <div className="p-2">
    <FaThumbsUp className="text-[40px]" />
    <p className="text-[25px] text-gray-800">60 Day Warranty</p>
    <p className="text-gray-500">Free roundtrip shipping</p>
  </div>
  <div className="p-2">
    <FaMoneyBillAlt className="text-[40px]" />
    <p className="text-[25px] text-gray-800">Easy Returns</p>
    <p className="text-gray-500">With no restocking fee</p>
  </div>
  <div className="p-2">
    <RiCustomerService2Fill className="text-[40px]" />
    <p className="text-[25px] text-gray-800">Expert Advice</p>
    <p className="text-gray-500">In-store, call, email, chat</p>
  </div>
  <div className="p-2">
    <MdAttachMoney className="text-[40px]" />
    <p className="text-[25px] text-gray-800">Low Prices</p>
    <p className="text-gray-500">Shop with confidence</p>
  </div>
</div>)
}

export default Features;