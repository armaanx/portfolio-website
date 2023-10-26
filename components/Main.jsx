/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
export default function Main() {
  const openResume = () => {
    window.open(
      "https://resume.io/r/3JWCHNzm5",
      "_blank"
    );
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center  ">
        <div className="p-10 pb-6 pt-0 flex flex-col  justify-center items-center md:flex-row md:gap-1">
          <div className="mb-10 ">
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
          <div className="md:ml-3">
            <img
              src="/me.png"
              className="border-[6px] border-[#000000] rounded-full h-36 w-36 object-cover lg:h-44 lg:w-44"
              alt="My Picture"
            />
          </div>
        </div>
        <div
          onClick={openResume}
          className="w-fit md:place-self-start md:pl-10 text-md md:text-lg xl:text-xl cursor-pointer ">
          <h1 className="border-[3px] p-2 rounded-xl hover:border-black hover:text-black">
            Resume
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
