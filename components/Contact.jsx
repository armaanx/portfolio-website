import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsInstagram, BsSpotify } from "react-icons/bs";
export default function Contact() {
  return (
    <div className="h-screen flex items-center justify-center flex-row text-4xl text-center">
      <div className="flex flex-col items-center justify-center gap-5 border-2 p-8 rounded-3xl">
        <h1 className="font-bold text-3xl">Contact Me</h1>
        <div className="flex flex-row items-center justify-center">
          <a
            href="mailto:armaanmishra48@protonmail.com"
            className="p-4 cursor-pointer hover:text-red-500">
            <HiOutlineMail />
          </a>
          <a
            href="https://github.com/armaanx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 cursor-pointer hover:text-red-500">
            <BsGithub />
          </a>
          <a
            href="https://instagram.com/armaanx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 cursor-pointer hover:text-red-500">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
