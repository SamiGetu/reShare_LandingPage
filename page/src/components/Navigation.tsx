import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";

function Navigation() {
  const [nav, setnav] = useState(false);
  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <>
      <div id="SideNav">
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-5 z-[99] md:hidden mt-8"
        />
        {nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center z-20">
            <div className="flex justify-center mb-16 font-bold text-4xl">
            Zelan
            </div>
            <li className="flex justify-center border-b p-5 m-3 text-3xl box-border ">
              <a href="">About</a>
            </li>
            <li className="flex justify-center  border-b p-5 m-3 text-3xl box-border">
              <a href="">Contact</a>
            </li>
            <li className="flex justify-center  border-b p-5 m-3 text-3xl box-border">
              <a href="">Explore</a>
            </li>
            <li className="flex justify-center  p-5 m-3">
              <a href=""></a>
            </li>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    

      <nav className=" fixed top-0 left-0 z-30 bg-green-100 h-20 border-gray-200 dark:bg-gray-900 w-full">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex justify-start">
            <span
              style={{ fontFamily: "cursive" }}
              className="text-green-400 lowercase self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              res
              <span className="bg-yellow-400 px-1 text-white rounded-md">
                shares
              </span>
            </span>
          </a>

          <a href="" className=" md:order-2  hidden w-full md:flex md:w-auto ">
            <Button className="py-3 px-16 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-green-100 border rounded-md border-black hover:bg-green-400 hover:text-white hover:border-hidden focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Log in
            </Button>
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-green-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Explore
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
