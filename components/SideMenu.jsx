import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
export default function SideMenu({ isShow, handleSideMenu }) {
  if (!isShow) {
    return null;
  }
  return (
    <div className="md:hidden h-screen w-screen fixed bg-black bg-opacity-20 backdrop-blur-sm z-999">
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ type: "tween", ease: "anticipate" }}
        className="h-full w-[69%] fixed right-0 bg-[#121516] flex flex-col items-center justify-center text-lg font-semibold">
        <span className="absolute top-0 right-0 m-10 p-3 text-4xl">
          <AiOutlineClose className="cursor-pointer" onClick={handleSideMenu} />
        </span>
        <a className="p-4" href="#main" onClick={handleSideMenu}>
          Home
        </a>
        <a className="p-4" href="#about" onClick={handleSideMenu}>
          About
        </a>
        <a className="p-4" href="#projects" onClick={handleSideMenu}>
          Projects
        </a>
        <a className="p-4" href="" onClick={handleSideMenu}>
          Contact
        </a>
      </motion.div>
    </div>
  );
}
