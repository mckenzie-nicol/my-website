const Landing = () => {
  return (
    <div>
      {/* Main Welcome Banner Section */}
<section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
  {/* Blurred Gradient Background */}
  <div 
    className="absolute inset-0
           bg-gradient-to-tr from-indigo-400 via-teal-900 to-[#C084FC]
           blur-[118px] 
           pointer-events-none">
  </div>

  {/* Content Container */}
  <div className="relative z-10 flex flex-col items-center text-white px-4">
    {/* Big Heading */}
    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
      Welcome to My Portfolio
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-center max-w-2xl">
      Explore the amazing projects I’ve had the chance to work on, showcasing my skills
      and dedication to building modern, performant applications.
    </p>
    
    {/* Enter Button */}
    <a 
      href="#portfolio" 
      className="mt-8 inline-block 
             bg-white 
             text-gray-900 
             px-8 py-3 
             font-semibold 
             rounded-full 
             shadow-md 
             transition-transform 
             duration-300 
             hover:scale-105">
      Enter
    </a>
  </div>
</section>

    </div>
  )
}

export default Landing
