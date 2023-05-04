import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";
import Image from "next/image";
import p1 from "../../../img/p1.jpg";

function LeftSideContainer() {
  const [open, setOpen] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState(true);

  return (
    <>
      <section
        className="lg:col-span-3
    
    transition-all duration-500 
    
    lg:order-1 md:order-2 order-2"
      >
        <div className="cetegory">
          <div
            className="cetetogy__pannel bg-primary p-3  text-white cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="pannel__header">
              {/* header section */}

              <div className=" flex justify-between">
                <div className="flex space-x-3 items-center">
                  <BiMenu className="  text-white  text-[1.5rem]" />
                  <span className=" font-eco font-bold text-[1.2rem]">
                    Cetegory
                  </span>
                </div>
                <BsArrowUpShort className="text-[1.5rem]" />
              </div>
            </div>
          </div>

          <div
            className={` bg-[#292929] 
        
     overflow-hidden text-white  font-eco font-bold
     ${open ? `py-2  ` : `h-0`}


        `}
          >
            <ul className={`p-2 space-y-4  ml-2 uppercase`}>
              <li className=" hover:text-primary">Deal of the day</li>
              <li className=" hover:text-primary">new collection</li>
              <li className=" hover:text-primary">Disposable vape</li>
              <li className=" hover:text-primary">pod sytle</li>
              <li className=" hover:text-primary">Disposable vape</li>
              <li className=" hover:text-primary">iqos</li>
              <li className=" hover:text-primary">e-juice </li>
              <li className=" hover:text-primary">VAPE MODS </li>
              <li className=" hover:text-primary">COILS</li>
              <li className=" hover:text-primary">ATOMIZER </li>
              <li className=" hover:text-primary">SaltNic Pods </li>
              <li className=" hover:text-primary">ACCESSORIES </li>
              <li className=" hover:text-primary">SPECIAL OFFER </li>
              <li className=" hover:text-primary">Uncategorized</li>
            </ul>
          </div>
        </div>
        <div className="cetegory mt-5">
          <div
            className="cetetogy__pannel bg-primary p-3  text-white cursor-pointer"
            onClick={() => {
              setRelatedProducts(!relatedProducts);
            }}
          >
            <div className="pannel__header">
              {/* header section */}

              <div className=" flex justify-between">
                <div className="flex space-x-3 items-center">
                  <BiMenu className="  text-white  text-[1.5rem]" />
                  <span className=" font-eco font-bold text-[1.2rem]">
                    Related Products
                  </span>
                </div>
                <BsArrowUpShort className="text-[1.5rem]" />
              </div>
            </div>
          </div>

          <div
            className={` bg-[#292929] 
        
     overflow-hidden text-white  font-eco font-bold
     ${relatedProducts ? `py-2  ` : `h-0`}


        `}
          >
            <div>
              {/* Realted Products */}
              <div className=" relatedProduct__wrapper p-4 flex space-x-5">
                <div>
                  <Image
                    className=" rounded-sm"
                    src={p1}
                    width={50}
                    height={50}
                    alt="product image"
                  />
                </div>
                <div>
                  <p>Product Title Is Here</p>

                  <div className="flex ext-sm   space-x-3">
                    <p className="  text-softGray line-through font-bold">
                      $<span className="text-[1rem]">26.99</span>
                    </p>
                    <p className="text-yeollow  font-bold">
                      $<span className="text-[1rem]">26.99</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relatedProduct__wrapper p-4 flex space-x-5">
                <div>
                  <Image
                    className=" rounded-sm"
                    src={p1}
                    width={50}
                    height={50}
                    alt="product image"
                  />
                </div>
                <div>
                  <p>Product Title Is Here</p>

                  <div className="flex ext-sm   space-x-3">
                    <p className="  text-softGray line-through font-bold">
                      $<span className="text-[1rem]">26.99</span>
                    </p>
                    <p className="text-yeollow  font-bold">
                      $<span className="text-[1rem]">26.99</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relatedProduct__wrapper p-4 flex space-x-5">
                <div>
                  <Image
                    className=" rounded-sm"
                    src={p1}
                    width={50}
                    height={50}
                    alt="product image"
                  />
                </div>
                <div>
                  <p>Product Title Is Here</p>

                  <div className="flex ext-sm   space-x-3">
                    <p className="  text-softGray line-through font-bold">
                      $<span className="text-[1rem]">26.99</span>
                    </p>
                    <p className="text-yeollow  font-bold">
                      $<span className="text-[1rem]">26.99</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relatedProduct__wrapper p-4 flex space-x-5">
                <div>
                  <Image
                    className=" rounded-sm"
                    src={p1}
                    width={50}
                    height={50}
                    alt="product image"
                  />
                </div>
                <div>
                  <p>Product Title Is Here</p>

                  <div className="flex ext-sm   space-x-3">
                    <p className="  text-softGray line-through font-bold">
                      $<span className="text-[1rem]">26.99</span>
                    </p>
                    <p className="text-yeollow  font-bold">
                      $<span className="text-[1rem]">26.99</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LeftSideContainer;
