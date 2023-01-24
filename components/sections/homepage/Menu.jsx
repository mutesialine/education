import Link from "next/link";
import Image from "next/image";
import arrow from "/public/images/arrow.svg";
import Menu from "../../../data/Menu";
import React, { useState } from "react";
import menu from "/public/images/Menu.svg";

const Menuu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative">
      <Link href="#" onClick={() => setMenuOpen(!menuOpen)}>
        <Image src={menu} alt="menu" />
      </Link>
      {
        // menuOpen && (
        <div className="h-full">
          <div
            className={`absolute transition-all overflow-hidden delay-500 ${
              menuOpen ? "h-[300px] opacity-100" : "h-0 opacity-0"
            } duration-300 bg-black  text-white opacity-90 right-0 w-[300px]`}
          >
            {Menu.map((link, index) => (
              <div className="flex justify-between p-6  space-y-4 border-b-2 border-gray-500 items-center">
                <p className="text-lg  " key={index}>
                  {link}
                </p>
                <Image
                  src={arrow}
                  alt="image"
                  className="invert hover:rotate-45 delay-300"
                />
              </div>
            ))}
          </div>
        </div>

        //  (
        //   <div className=" -translate-y-96  bg-black  text-white opacity-50  p-6 text-lg  items-center w-0">
        //     {Menu.map((link, index) => (
        //       <div className="flex justify-between space-y-4 border-b-2 border-gray-500">
        //         <p className="text-lg  " key={index}>
        //           {link}
        //         </p>
        //         <Image
        //           src={arrow}
        //           alt="image"
        //           className="invert hover:rotate-45 delay-300"
        //         />
        //       </div>
        //     ))}
        //   </div>
        // )
      }
    </div>
  );
};

export default Menuu;
