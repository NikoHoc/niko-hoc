import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tools from "./components/Tools";

function App() {


  return (
    <>
      <Navbar />
      <main className="md:pt-0 px-4 max-w-7xl mx-auto">
        <Hero />
        <Journey />
        <Project />
        <Tools />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
