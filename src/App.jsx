import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <h1 className="bg-white text-yellow-600 font-cormorant font-light text-[80px] text-center py-5">Works</h1>
      <Work />
      <Contact />
    </>
  )
}

export default App
