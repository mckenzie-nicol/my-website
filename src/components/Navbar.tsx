export default function Navbar() {

      const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
      <nav className="sticky top-0 z-50 text-white py-4">
        <ul className="flex justify-center space-x-8">
          <li
            className="cursor-pointer hover:underline"
            onClick={() => scrollToSection("about")}
          >
            About Me
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:underline"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    );
}