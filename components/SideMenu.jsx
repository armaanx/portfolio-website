import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
export default function SideMenu({ isShow, handleSideMenu }) {
  if (!isShow) {
    return null;
  }
  return (
    <div className="md:hidden h-screen w-screen fixed bg-black bg-opacity-20 backdrop-blur-sm z-50">
      <div
        className="h-full w-[31%] fixed left-0"
        onClick={handleSideMenu}></div>
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ type: "tween", ease: "anticipate" }}
        className="h-full w-[69%] fixed right-0 bg-[#121516] flex flex-col items-center justify-center text-lg font-semibold [&>*:hover]:text-[#b73a4d]">
        <span className="absolute top-0 right-0 m-10 p-3 text-4xl">
          <AiOutlineClose
            className="cursor-pointer text-[#4d61af]"
            onClick={handleSideMenu}
          />
        </span>
        <a className="p-6" href="#main" onClick={handleSideMenu}>
          Home
        </a>
        <a className="p-6" href="#about" onClick={handleSideMenu}>
          About
        </a>
        <a className="p-6" href="#projects" onClick={handleSideMenu}>
          Projects
        </a>
        <a className="p-6" onClick={handleSideMenu}>
          Contact
        </a>
      </motion.div>
    </div>
  );
}
