const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Next.Js",
  "C++",
  "Python",
  "Tailwind CSS",
  "REST API",
  "Node.Js",
  "Java",
  "Firebase",
  "Data Structures & Algorithms",
];
export default function About() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center overflow-hidden bg-[#121516]">
        <div className="  p-4 pt-14 md:p-32 lg:w-[1000px] flex flex-col justify-center items-baseline">
          <div className="p-4">
            <h1 className="text-3xl mb-4 font-bold text-[#b73a4d] lg:text-5xl">
              About Me
            </h1>
            <h1 className="text-xl lg:text-3xl">
              {
                "Hey! My name is Armaan Mishra. I've been passionate about coding since my childhood. I love building things, especially for the web. Sometimes, I make digital art."
              }
            </h1>
          </div>
          <div className="p-4">
            <h1 className="text-3xl mb-4 font-bold text-[#b73a4d] lg:text-5xl">
              Skills
            </h1>
            <div className="flex flex-row justify-start items-center flex-wrap text-md lg:text-xl pb-12">
              {skills.map((s, i) => {
                return (
                  <span key={i} className="p-2 m-1 rounded-lg border-[1px]">
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
