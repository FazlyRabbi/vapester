import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import logo from "img/logo.png";

export default function signin() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="container mx-auto relative">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  ">
            <Link
              href="/"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image
                className=" mr-2"
                width={150}
                height={150}
                src={logo}
                alt="logo"
              />
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700  relative">
              <Link href={`/shop`}>
                <RxCrossCircled className=" cursor-pointer  text-[1.5rem] absolute right-[.5rem] top-[.5rem]" />
              </Link>

              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-link hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-softBlack hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      href={`/signup`}
                      className="font-medium text-link hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>



<div className="border-b  border-gray-300  mt-2 mb-4">
  <h1 className=" text-center  text-[20px] pb-2 text-gray-600">or</h1>
 </div>


                <div className="social__login flex items-center  justify-center  space-x-5">
                  <button className=" flex  space-x-3  items-center
                   border border-gray-300 rounded-md p-2 font-bold text-[13px]
                  
                  ">
                    <FcGoogle className="text-[1.5rem]" />
                    <span className=" inline-block">

                    Log in with Google
                    </span>
                  </button>
                  <button className=" flex  space-x-3  items-center
                   border border-gray-300 rounded-md p-2 font-bold text-[13px]
                  
                  ">
                    <FaFacebook className="text-[1.4rem]" />
                    <span className=" inline-block">

                    Log in with Google
                    </span>
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
