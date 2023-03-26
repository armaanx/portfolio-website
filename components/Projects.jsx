export default function Projects() {
  return (
    <>
      <div className="h-screen flex flex-nowrap  justify-start items-center md:justify-center snap-x snap-mandatory  gap-5  p-3 overflow-x-scroll overflow-y-hidden md:scrollbar-hide z-0">
        <div className="bg-[rgb(16,19,20)] text-left drop-shadow-md w-[330px] p-6 flex-none snap-center snap-always h-[500px] flex flex-col items-start justify-evenly">
          <h1 className="text-2xl md:text-3xl mb-4 font-bold text-[#b73a4d]">
            PassProtect
          </h1>
          <p className="text-lg mb-2 font-semibold">
            A cloud based password manager with encryption and advanced
            features.
          </p>
          <p className="text-[17px] mb-2 font-semibold text-stone-200">
            Users can add/delete/remove passwords.Passwords are encrypted on the
            client side with 256 bit AES encryption.It has a random password
            generator which generates strong random passwords based on the user
            preferences.
          </p>
          <p className="text-lg font-semibold mb-4 text-[#4d61af]">
            Technologies used- React, Firebase
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <a
              href="https://github.com/armaanx/passprotect"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[2px] border-white p-2 rounded-lg cursor-pointer hover:text-[#6caf4d] hover:border-[#6caf4d]">
              Source Code
            </a>
            <a
              href="https://passprotect.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[2px] border-white p-2 rounded-lg cursor-pointer hover:text-[#6caf4d] hover:border-[#6caf4d]">
              Live Demo
            </a>
          </div>
        </div>

        <div className="bg-[rgb(16,19,20)] text-left drop-shadow-md w-[330px] p-6 flex-none snap-center snap-always h-[500px] flex flex-col items-start justify-evenly z-10">
          <h1 className="text-2xl md:text-3xl mb-4 font-bold text-[#b73a4d]">
            Spotify Music Card
          </h1>
          <p className="text-lg mb-2 font-semibold">
            A web app which shows users top tracks/artists in an aesthetic
            format using the Spotify Web API.
          </p>
          <p className="text-[17px] mb-2 font-semibold text-stone-200">
            Users can see their top tracks/artists of different time periods.
            This data is only available through the Spotify Web API and not on
            the spotify application or website.
          </p>
          <p className="text-lg font-semibold mb-4 text-[#4d61af]">
            Technologies used- Next.Js, Tailwind CSS, Spotify Web API
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <a
              href="https://github.com/armaanx/spotify-top-ten"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[2px] border-white p-2 rounded-lg cursor-pointer hover:text-[#6caf4d] hover:border-[#6caf4d]">
              Source Code
            </a>
            <a
              href="https://music-card-generator.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[2px] border-white p-2 rounded-lg cursor-pointer hover:text-[#6caf4d] hover:border-[#6caf4d]">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
