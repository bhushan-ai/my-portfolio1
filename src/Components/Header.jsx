import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
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

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);  // Persist theme in localStorage
  };

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
              <Link
                to="#skills"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            onClick={toggleTheme}  // Call toggleTheme to switch between dark and light
          >
            {mounted && (theme === "dark" ? <Sun className="text-gray-200" /> : <Moon className="text-gray-800" />)}
          </button>
        </div>
      </nav>
    </header>
  );
}
