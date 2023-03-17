import About from "@/components/About";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen bg-[#121516] text-white snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>{"Armaan's Portfolio"}</title>
      </Head>

      <Header />

      <section id="main" className="snap-start">
        <Main />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>
    </div>
  );
}
