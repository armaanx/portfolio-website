import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from "./SideMenu";
export default function Header({ isShow, handleSideMenu }) {
  if (isShow) {
    return <SideMenu isShow={isShow} handleSideMenu={handleSideMenu} />;
  }
  return (
    <>
      <header className="fixed top-0  w-screen  p-6 xl:items-center bg-[#121516] shadow-sm text-lg 2xl:text-[20px] z-50">
        <div className="flex items-center justify-between w-[95%] md:w-[90%] xl:w-[60%] mx-auto align-baseline ">
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
            <div className="hidden  md:flex md:flex-row md:items-center md:cursor-pointer [&>*:hover]:text-[#c93f54]">
              <a className="mr-4" href="#main">
                Home
              </a>
              <a className="mr-4" href="#about">
                About
              </a>
              <a className="mr-4" href="#projects">
                Projects
              </a>
              <a className="mr-4" href="#contact">
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <GiHamburgerMenu
                className="cursor-pointer text-2xl align-baseline hover:text-[#c93f54]"
                onClick={handleSideMenu}
              />
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}
