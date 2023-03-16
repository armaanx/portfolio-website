import { motion } from "framer-motion";
export default function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-6 xl:items-center">
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
          <a className="mr-4">About</a>
          <a className="mr-4">Projects</a>
          <a className="mr-4">Contact Me</a>
          <a className="">Resume</a>
        </div>
        <div className="md:hidden">
          <h1>SideBar</h1>
        </div>
      </motion.div>
    </header>
  );
}
