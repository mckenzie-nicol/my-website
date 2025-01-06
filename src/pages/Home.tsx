import React from "react";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen font-sans">
        <div className="relative z-10">
          <div className="flex-col space-y-10 my-10 mx-24">
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
