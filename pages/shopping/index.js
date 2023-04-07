import Header from "@/components/Header";
import { MdDeleteForever } from "react-icons/md";
import { API_URL } from "@/config/index";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CardContext } from "@/context/CardContext";
import { useContext } from "react";

export default function shopping() {
  const { cart } = useContext(CardContext);

  // const [subtotal, setSubtotal] = useState(0);

  // const [cartData, setCartData] = useState([]);

  // useEffect(() => {
  //   if (cart !== []) {
  //     cart.map((data) => setSubtotal(data));
  //   }
  // }, []);

  // const chechnum = () => {
  //   console.log(subtotal);
  // };

  return (
    <>
      <Header />

      {
        <div className="container mx-auto px-4">
          <h3 className="font-bold text-[25px] my-[2rem] xl:pl-0  pl-2 xl:ml-[10rem]">
            {cart !== [] ? "Shopping Cart" : "No Cart"}
          </h3>
          {cart !== []
            ? cart.map((data, index) => (
                <div
                  key={index}
                  className=" rounded-lg my-8 shadow-lg p-10 lg:mx-[10rem] "
                >
                  <div
                    className="shoppin-cart
           grid  grid-cols-1
           md:grid-cols-4
        justify-items-center
        md:justify-items-start
               justify-center
             gap-5
             gap-y-10
          "
                  >
                    <div className="product-img">
                      <Image
                        src={`${API_URL}${data.imgUrl}`}
                        height={150}
                        width={150}
                        alt="product-img"
                        className="rounded-md"
                      />
                    </div>
                    <div
                      className="product-des
              col-span-3
             flex justify-between
              space-x-10
            xl:space-x-[20rem] "
                    >
                      <div className="details ">
                        <h2 className="font-bold mb-2">{data.title}</h2>
                        <ul className=" space-y-2">
                          <li>
                            <span className="title font-bold">Job Name: </span>
                            <span className="data"> {data.jobName}</span>
                          </li>
                          <li>
                            <span className="title font-bold">
                              Width & Length:
                            </span>
                            <span className="data"> {data.width_length}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Meterial :</span>
                            <span className="data">{data.material}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Reinforce :</span>
                            <span className="data"> {data.reinforce}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Price :</span>
                            <span className="data font-bold">
                              {" "}
                              {data.total}$
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="quantity flex space-x-6 md:space-x-12 font-bold justify-between">
                        <p>
                          <span className="font-normal"> Qty</span>
                        </p>
                        <p>{data.quantity}</p>
                      </div>
                    </div>
                  </div>
                  <div className="editOrder max-w-[75%] ml-[10%] md:ml-[25%] mt-6 p-2  border-gray-200 border-t    flex justify-between items-center   ">
                    <p className="cursor-pointer">Edit Order</p>
                    <p>
                      <MdDeleteForever className="text-[1.4rem] cursor-pointer text-red-600" />
                    </p>
                  </div>
                </div>
              ))
            : ""}

          <div className="my-6">
            <div className=" flex space-x-[5rem]  justify-center  items-center">
              <span className=" text-xl  ">Subtotal</span>
              <span className="font-bold">$14.00</span>
            </div>
            <div className=" flex  justify-center  mt-6">
              <button
                className=" text-right   bg-primary  px-[4.5rem] py-[.8rem]  text-white  rounded-md"
                // onClick={chechnum}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      }

      <Footer />
    </>
  );
}
