import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Navigation from "./Navigation";

function SideNav() {
  const [nav, setnav] = useState(false);
  const handleNav = () => {
    setnav(!nav);
  };
  return (
    <>
      <div>
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-5 z-[99] xl:hidden"
        />
        {nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center z-20">
            <div className="flex justify-center mb-16 font-bold text-4xl"> RES SHARE</div>
            <li className="flex justify-center border-b p-5 m-3 text-3xl box-border">
              <a href="">About</a>
            </li>
            <li className="flex justify-center border-b p-5 m-3 text-3xl box-border">
              <a href="">Contact</a>
            </li>
            <li className="flex justify-center border-b p-5 m-3 text-3xl box-border">
              <a href="">Explore</a>
            </li>
          </div>
        ) : (
          <div>
            <Navigation />
          </div>
        )}
      </div>
    </>
  );
}

export default SideNav;
