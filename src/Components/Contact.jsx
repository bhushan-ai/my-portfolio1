import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="container mx-auto px-6 py-5">
      <h2 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
        Connect Me Via
      </h2>
      <div className="flex justify-center space-x-4 mb-5">
        {/* GitHub */}
        <a
          href="https://github.com/bhushan-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
        >
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/bhushan-ingole/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
        >
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>

        <a
          href="mailto:bhushaningole2004@gmail.com?subject=Contact from Portfolio"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
        >
          <Mail size={24} />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  );
}
