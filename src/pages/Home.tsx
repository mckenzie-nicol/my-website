import React from "react";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Background gradient */}
      <div
        className="
          absolute 
          inset-0 
          -z-10 
          m-auto 
          h-full 
          w-full
          bg-gradient-to-tr 
          from-indigo-400 
          via-teal-900 
          to-[#C084FC] 
          blur-[118px]
        "
      ></div>

      <div className="relative z-10">
        <div className="flex-col space-y-10 my-10 mx-24">
          <Banner />
            <About />
        <Projects />
        <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
