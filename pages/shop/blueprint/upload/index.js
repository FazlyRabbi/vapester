import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/Bs";
function Upload() {
  return (
    <div className="upload">
      <Header />
      <div className="container mx-auto py-8">
        <div className="page-title border-b   border-b-silver ">
          <h2 className=" capitalize font-bold text-[22px] pb-2">
            Add To Cart
            <span className="pl-2 text-[14px]    text-gray">
              (AEC - Blueprints - Bond Prints)
            </span>
          </h2>
        </div>

        <div className="drowing-size mt-10 ml-4  flex-wrap flex items-center space-x-5">
          <h5>Drawing Size : </h5>

          <select
            className="block appearance-none   w-64 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>12" x 18"</option>
            <option>11" x 17"</option>
          </select>
        </div>
        <div className="job-name ml-4 mt-[3rem] w-[80%]">
          <p className="text-red text-[12px]">
            Please upload jpg,jpeg,gif,png,eps,ai,pdf,zip,tar,rar,cdr,psd,svg
            images only File should not be larger than 50MB in size.
          </p>

          <div className="job-name_fill  flex space-x-5 items-center  bg-[#F7F7F7] p-4 shadow-md mt-2 rounded-md ">
            <h5>job name </h5>
            <input
              className="appearance-none block  w-72 bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="20221214042104"
            />
          </div>
        </div>

        <div className="upload-files ml-10 mt-4 flex flex-wrap items-center">
          <div className="upload-btn">
            <h5 className="font-bold">Upload File(s) </h5>

            <div className="flex ">
              <div className="my-3 w-96">
                <input
                  className={`${styles.formControl} `}
                  type="file"
                  id="formFile"
                />
              </div>
            </div>
          </div>

          <div className="file-drop">
            <div className="extraOutline lg:mt-0 md:mt-3  bg-white w-max bg-whtie m-auto rounded-lg">
              <div
                className="file_upload p-5 relative border-4 border-dotted border-silver rounded-lg"
                style={{ width: "400px" }}
              >
                <svg
                  className="text-indigo-500  w-10 mx-auto mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <div className="input_field flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      multiple
                    />
                  </label>
                  <div className="title text-indigo-500 uppercase">
                    or drop files here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-btn flex justify-center items-center mt-[5rem]    ">
          <Link href={"#"}>
            <button className="font-bold bg-primary  shadow-sm hover:shadow-md py-2 px-4 flex items-center  rounded-md text-white   capitalize">
              <span className="mr-2"> checkout</span>
              <BsArrowRight className="text-[20px] " />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upload;
