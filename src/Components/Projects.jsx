import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    description:
      "This is my First Project. I have created this using HTML, CSS, and JS in this project I used the API of openWeathermap and from there I fetch the data of currect weather",
    website: "https://bhushan-ai.github.io/weather-app-js/",
    category: "Web",
  },
  {
    title: "Background Changer",
    description:
      "This was my first Project React js, I have created this site for maintain my shoe collection",
    website: "https://bhushan-ai-shoe-collection.netlify.app/",
    category: "Mobile",
  },
  {
    title: "Todo App",
    description:
      "This was Created by me for my friend he wants me to create something that will handel his daily routine",
    website: "https://todoo-js.netlify.app/",
    category: "Web",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          My Projects
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          {["All", "Web", "Mobile", "Desktop"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <span className="mt-2 inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {project.category}
                  </span>
                  <div className="mt-4">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
