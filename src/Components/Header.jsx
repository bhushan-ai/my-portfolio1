import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // No longer needed for in-page navigation
import { Moon, Sun } from "lucide-react";

export default function Header() {
  // State to store the current theme
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light"); // Default to light theme if no theme is saved
    }
    setMounted(true);
  }, []);

  // // Toggle theme between light and dark
  // const toggleTheme = () => {
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);  // Persist theme in localStorage
  // };

  useEffect(() => {
    // Apply the theme to the body element for global styling
    document.body.className = theme;
  }, [theme]);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#skills"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
