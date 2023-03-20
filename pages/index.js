import About from "@/components/About";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div className="snap-y h-screen snap-mandatory bg-[#121516] overflow-auto text-white">
      <Head>
        <title>{"Armaan's Portfolio"}</title>
      </Head>
      <Header />
      <section id="main" className="snap-center">
        <Main />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="projects" className="">
        <Projects />
      </section>
    </div>
  );
}
