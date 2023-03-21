import { motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from "./SideMenu";
export default function Header({ isShow, handleSideMenu }) {
  // if (typeof window !== "undefined") {
  //   let devWidth = window.innerWidth;
  //   console.log(devWidth);
  // }

  if (isShow) {
    return <SideMenu isShow={isShow} handleSideMenu={handleSideMenu} />;
  }
  return (
    <>
      <header className="fixed top-0  w-screen  p-6 xl:items-center bg-[#121516] shadow-sm text-2xl md:text-xl">
        <div className="flex items-baseline justify-between w-[95%] md:w-[90%] xl:w-[60%] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <div>
              <h1>AM</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <div className="hidden  md:flex md:flex-row md:items-center md:cursor-pointer">
              <a className="mr-4" href="#main">
                Home
              </a>
              <a className="mr-4" href="#about">
                About
              </a>
              <a className="mr-4" href="#projects">
                Projects
              </a>
              <a className="mr-4">Contact</a>
            </div>
            <div className="md:hidden">
              <GiHamburgerMenu
                className="cursor-pointer"
                onClick={handleSideMenu}
              />
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}
