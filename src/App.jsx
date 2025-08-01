import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}