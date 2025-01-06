export default function Contact() {
    return (
      <div className="text-white">
        <h2 className="text-4xl font-semibold mb-6">Contact</h2>
        <div
          className="bg-[#8b6fe6] text-white p-6 mb-4 rounded-lg shadow 
                            transition-transform transform hover:scale-[1.02] hover:shadow-xl"
        >
          <p className="mb-4">
            If you'd like to reach out, feel free to email me at:{" "}
            <a
              href="mailto:mck.wj.nicol@gmail.com"
              className="text-blue-300 underline hover:text-blue-600"
            >
              mck.wj.nicol@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    );
}