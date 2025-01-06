export default function About() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-semibold mb-6">About Me</h1>
      <div
        className="bg-[#8b6fe6] text-white p-6 rounded-lg shadow 
                            transition-transform transform hover:scale-[1.02] hover:shadow-xl"
      >
        <p className="mb-4">
          Write up about work experience and journey to completing the CST
          diploma. Maybe photo beside?
          <br />
          Should include all links and whatnot to social media stuff.
        </p>
      </div>
    </div>
  );
}
