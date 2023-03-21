import { motion } from "framer-motion";
export default function SideMenu({ isShow, handleSideMenu }) {
  if (!isShow) {
    return null;
  }
  return (
    <div className="md:hidden h-screen w-screen fixed bg-black bg-opacity-20 backdrop-blur-sm z-999">
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
        className="h-full w-[69%] fixed right-0 bg-[#121516] p-6 flex flex-col items-center justify-center ">
        <h1 className="p-4" onClick={handleSideMenu}>
          X
        </h1>
        <a className="p-4" href="#main" onClick={handleSideMenu}>
          Home
        </a>
        <a className="p-4" href="#about" onClick={handleSideMenu}>
          About
        </a>
        <a className="p-4" href="#projects" onClick={handleSideMenu}>
          Projects
        </a>
      </motion.div>
    </div>
  );
}
