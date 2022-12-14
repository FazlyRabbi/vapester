import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function Calculator() {
  return (
    <form className="w-full max-w-lg bg-[#EFEFEF]   shadow-md  ">
      <h4
        className={` font-bold  p-2  pl-5 rounded-tl-md 
            
            rounded-tr-md shadow-sm
            bg-gray w-full text-white  ${styles.borderGradient} `}
      >
        Price Calculator
      </h4>
      <div className="flex flex-wrap -mx-3 mb-6 px-8  pb-4   ">
        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Drawing Size
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>11" x 17"</option>
              <option>12" x 18"</option>
              <option>18" x 24"</option>
              <option>24" x 36"</option>
              <option>30" x 42"</option>
              <option>36" x 48"</option>
              <option>Custom Size</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full mt-4   ">
          <label
            className="block tracking-wide text-gray-700  mb-1"
            htmlFor="grid-first-name"
          >
            How many original pages?
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="1"
          />
        </div>
        <div className="w-full mt-4   ">
          <label
            className="block tracking-wide text-gray-700  mb-1"
            htmlFor="grid-first-name"
          >
            How many copies/sets?
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            placeholder="1"
          />
        </div>
        <div className="w-full mt-4   ">
          <label
            className="block tracking-wide text-gray-700  mb-1"
            htmlFor="grid-first-name"
          >
            Paper
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="bond paper"
          />
        </div>

        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Color
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Black & White</option>
              <option>Color</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Lamination
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Finishing
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Binded</option>
              <option>Loose</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full mt-4   ">
          <input
            className="appearance-none text-right block w-full bg-white  text-primary  border-red-500 rounded py-2 px-4 my-5 leading-tight font-bold text-[18px] focus:outline-none focus:bg-white "
            id="grid-first-name"
            disabled
            type="text"
            placeholder="1"
            value={`Total : $10.00`}
          />
        </div>

        <Link
          href={"blueprint/upload"}
          className="appearance-none text-center block w-full  bg-gray  text-white  border-red-500 rounded py-2  my-3 leading-tight font-bold text-[18px]  uppercase cursor-pointer focus:outline-none  "
        >
          add to cart
        </Link>
      </div>
    </form>
  );
}
