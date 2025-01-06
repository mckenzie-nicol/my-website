import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Blurred Gradient Background */}
      <div
        className="absolute inset-0
           bg-gradient-to-tr from-indigo-400 via-teal-900 to-[#C084FC]
           blur-[118px] 
           pointer-events-none"
      />

      {/* Main Welcome Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          McKenzie Nicol
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Welcome to my portfolio!
        </h2>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          Explore the amazing projects I’ve had the chance to work on,
          showcasing my skills and dedication to building modern, performant
          applications.
        </p>

        {/* Explore Button */}
        <button
          onClick={() => navigate("/home")}
          className="mt-8 inline-block 
             bg-white 
             text-gray-900 
             px-8 py-3 
             font-semibold 
             rounded-full 
             shadow-md 
             transition-transform 
             duration-300 
             hover:scale-105"
        >
          Explore
        </button>
      </section>

      {/* Resume / Quick Skills & Abilities Sections */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Projects Section */}
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Project Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: QuickBooks API */}
            <div
              className="bg-white text-gray-900 p-6 rounded-lg shadow 
                            transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h4 className="text-xl font-semibold mb-2">
                QuickBooks API-Centric Application
              </h4>
              <ul className="list-disc list-inside">
                <li>Technologies: PostgreSQL, AWS SES, AWS Lambda</li>
                <li>
                  Developed a QuickBooks API-centric application to
                  automatically classify financial transactions
                </li>
                <li>
                  Integrated fallback classification using a language model for
                  improved accuracy and reliability
                </li>
                <li>
                  Leveraged AWS Lambda for backend functions and AWS SES for
                  secure, automated email notifications
                </li>
              </ul>
            </div>

            {/* Project 2: Mood Buddy */}
            <div
              className="bg-white text-gray-900 p-6 rounded-lg shadow 
                            transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h4 className="text-xl font-semibold mb-2">Mood Buddy</h4>
              <ul className="list-disc list-inside">
                <li>
                  Technologies: Python (Flask), Gunicorn, Nginx, React,
                  TypeScript, Tailwind CSS, PostgreSQL, Hugging Face LLM
                </li>
                <li>
                  Built an LLM-powered chatbot to improve user mood & engagement
                </li>
                <li>Secured communications with SSL</li>
                <li>Managed deployment with version control best practices</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Education
            </h3>
            <div
              className="bg-white text-gray-900 p-6 rounded-lg shadow 
                         transition-transform transform hover:scale-105 hover:shadow-xl max-w-xl mx-auto"
            >
              <h4 className="text-xl font-semibold mb-2">
                Computer Systems Technology Diploma (with Distinction)
              </h4>
              <p>British Columbia Institute of Technology</p>
              <p>Specialization: Cloud Computing</p>
              <p>Date Completed: December 2024</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Work Experience
            </h3>

            {/* Experience Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Graybar Canada */}
              <div
                className="bg-white text-gray-900 p-6 rounded-lg shadow 
                              transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h4 className="text-xl font-semibold mb-2">Graybar Canada</h4>
                <p className="italic mb-1">
                  EV Charging Sales Specialist / Project Manager / Project
                  Quotations
                </p>
                <p className="text-sm mb-4">October 2020 – December 2022</p>
                <ul className="list-disc list-inside">
                  <li>
                    Led Electric Vehicle Charging Sales in British Columbia for
                    Graybar Canada
                  </li>
                  <li>
                    Successfully secured and managed multiple projects worth
                    $250,000+ concurrently
                  </li>
                </ul>
              </div>

              {/* Guillevin International */}
              <div
                className="bg-white text-gray-900 p-6 rounded-lg shadow 
                              transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h4 className="text-xl font-semibold mb-2">
                  Guillevin International
                </h4>
                <p className="italic mb-1">Inside Sales / Quotations</p>
                <p className="text-sm mb-4">September 2015 – September 2020</p>
                <ul className="list-disc list-inside">
                  <li>
                    Played a key role in a team that achieved a 300% increase in
                    total branch sales over four years
                  </li>
                  <li>Processed and coordinated orders for key accounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
