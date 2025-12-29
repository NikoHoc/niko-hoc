import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";

function App() {


  return (
    <>
      <Navbar />
      <main className="md:pt-0 pt-20 px-4 max-w-screen-xl mx-auto">
        <Hero />
        <Journey />
      </main>
    </>
      

  )
}

export default App
