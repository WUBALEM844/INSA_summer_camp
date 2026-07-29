import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <section id="projects"></section>
      <section id="contact"></section>
    </>
  );
}

export default Home;