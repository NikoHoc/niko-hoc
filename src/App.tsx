// 1. Tambahkan useEffect di import react
import { useState, useEffect } from 'react'; 
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tools from "./components/Tools";
import SplashScreen from './components/SplashScreen';
import Spotlight from './components/Spotlight';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // 2. TAMBAHKAN USEEFFECT INI UNTUK MENGUNCI SCROLLBAR
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'; // Sembunyikan scrollbar
    } else {
      document.body.style.overflow = 'unset'; // Kembalikan scrollbar setelah loading selesai
    }
  }, [isLoading]);

  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gray-950 text-slate-200">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="fixed top-0 left-0 right-0 h-1.5 bg-blue-500 origin-left z-[100] shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              style={{ scaleX }}
            />

            <Spotlight />
            <Navbar />
            <main className="md:pt-0 px-4 max-w-7xl mx-auto">
              <Hero />
              <About />
              <Journey />
              <Project />
              <Tools />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App;