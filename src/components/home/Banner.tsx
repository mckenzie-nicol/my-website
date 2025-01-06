export default function Banner() {
    return (
      <div className="bg-transparent  p-6">
        <h2 className="text-xl text-white font-semibold mb-2">
          Welcome to My Personal Website
        </h2>
        <p className="text-white mb-4">
          Discover more about me, my work, and how to get in touch!
        </p>
        <button className="px-4 py-2 bg-[#102a85] text-white font-semibold rounded hover:bg-[#191970] transition-colors">
          Get In Touch
        </button>
      </div>
    );
}