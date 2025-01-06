export default function Projects() {
  return (
    <div className="bg-transparent bg-opacity-20 backdrop:filter backdrop-blur-md w-full rounded-lg shadow-lg p-6">
      <h2 className="text-2xl text-white font-semibold mb-2">Projects</h2>
      <p className="text-white">
        include a screen shot of each project and then make clickable so the
        user can go to each project and interact with it.
      </p>
      <ul className="mt-4 space-y-4">
        <li>
          <h3 className="text-xl text-white font-medium">Market Mate</h3>
          <p className="text-lg text-white">
            A brief description of your first project.
          </p>
        </li>
        <li>
          <h3 className="text-xl text-white font-medium">Mood Buddy</h3>
          <p className="text-lg text-white">
            A brief description of your second project.
          </p>
        </li>
        <li>
          <h3 className="text-xl text-white font-medium">Cold Winter - Game</h3>
          <p className="text-lg text-white">
            A brief description of your third project.
          </p>
        </li>
      </ul>
    </div>
  );
}
