import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <section id="skills"></section>
      <section id="projects"></section>
      <section id="contact"></section>
    </>
  );
}

export default Home;