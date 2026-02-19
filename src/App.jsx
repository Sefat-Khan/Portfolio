import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import SpaceCanvas from "./components/background/SpaceCanvas";
import RocketCursor from "./components/cursor/RocketCursor";

export default function App() {
  return (
    <>
      <SpaceCanvas />
      <RocketCursor />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
