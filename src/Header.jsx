import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Header() {
    // const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#skills"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
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
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {/* {mounted && (theme === "dark" ? <Sun className="text-gray-200" /> : <Moon className="text-gray-800" />)} */}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header