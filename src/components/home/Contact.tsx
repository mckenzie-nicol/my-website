export default function Contact() {
    return (
      <div className="bg-transparent bg-opacity-20 backdrop:filter backdrop-blur-md w-full rounded-lg shadow-lg p-6">
        <h2 className="text-xl text-white font-semibold mb-2">Contact</h2>
        <p className="text-white mb-4">
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
    );
}