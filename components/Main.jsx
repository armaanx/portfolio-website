import { motion } from "framer-motion";
export default function Main() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <div className="p-10 flex flex-col gap-3 justify-center items-center  h-screen md:flex-row md:gap-1">
          <div className="p-4 md:mr-2 ">
            <h1 className="text-xl mb-3 font-semibold text-[#f8f8f9]">
              Hi, my name is
            </h1>
            <h1 className="text-[32px] mb-2 font-bold lg:text-6xl text-[#b73a4d] md:text-4xl">
              Armaan Mishra.
            </h1>
            <h1 className="text-[26px] mb-4 font-bold lg:text-5xl text-[#4d61af] md:text-4xl">
              {"<I code and build things for the web/>"}
            </h1>
            <h1 className="text-xl font-thin lg:text-4xl text-[#f8f8f9]">
              {"I'm a Software Engineer and a Full Stack Web Developer."}
            </h1>
          </div>
          <div className="m-3">
            <img
              src="/me.png"
              className="border-[6px] border-[#000000] rounded-full h-36 w-36 object-cover lg:h-44 lg:w-44"
              alt="My Picture"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
