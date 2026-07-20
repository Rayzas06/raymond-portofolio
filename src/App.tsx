import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedProjects from "./components/FeaturedProjects";
import About from "./components/About";
import ProjectsFull from "./components/ProjectsFull";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <FeaturedProjects />
        <About />
        <ProjectsFull />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}