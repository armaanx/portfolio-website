import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize.width !== undefined) {
      if (windowSize.width >= 768) {
        handleScreenSizeChange();
      }
    }
  }, [windowSize.width]);
  function handleScreenSizeChange() {
    setShow(false);
  }
  const [show, setShow] = useState(false);
  function handleSideMenu() {
    setShow(!show);
  }
  return (
    <div className="font-[Montserrat] snap-y h-screen snap-mandatory bg-[#121516] overflow-auto text-white z-1 scroll-smooth scrollbar-hide">
      <Head>
        <title>{"Armaan's Portfolio"}</title>
      </Head>
      <Header isShow={show} handleSideMenu={handleSideMenu} />
      <section id="main" className="snap-center snap-always">
        <Main />
      </section>

      <section id="about" className="snap-center snap-always">
        <About />
      </section>

      <section id="projects" className="snap-center snap-always">
        <Projects />
      </section>
      <section id="contact" className="snap-center snap-always">
        <Contact />
      </section>
    </div>
  );
}
