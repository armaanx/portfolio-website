import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="fixed top-0  w-screen  p-6 xl:items-center z-99 bg-[#121516] shadow-sm">
      <div className="flex items-start justify-between w-[95%] md:w-[90%] xl:w-[60%] mx-auto">
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
          <div className="hidden md:inline-block flex flex-row items-center cursor-pointer">
            <a className="mr-4">Home</a>
            <a className="mr-4">About</a>
            <a className="mr-4">Projects</a>
            <a className="mr-4">Contact</a>
          </div>
          <div className="md:hidden">
            <h1>SideBar</h1>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
