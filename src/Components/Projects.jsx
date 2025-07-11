import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    description:
      "I created this app using react js and here i  use rest Api and Context Api concept i style my app using Tailwind ",
    website: "https://weather-forcast-reactapp.netlify.app/",
    category: "Mobile",
  },
  {
    title: "Meme Generator",
    description:
      "Created this app using React and tailwind i have used react router for routing and and use framer-motion for draggable text and for saving the edited meme i have used dom-to-image-more and downloadjs.",
    website: "https://meme-generator-reactt.netlify.app/",
    category: "Web",
  },
  {
    title: "Shoe Collection",
    description:
      "This was my first Project React js, I have created this site for maintain my shoe collection",
    website: "https://bhushan-ai-shoe-collection.netlify.app/",
    category: "Web",
  },
  {
    title: "Todo App",
    description:
      "This was Created by me for my friend he wants me to create something that will handel his daily routine",
    website: "https://todoo-js.netlify.app/",
    category: "Web",
  },
  {
    title: "Calculator",
    description: "This is simple calculator I have created using js ",
    website: "https://calculateop.netlify.app/",
    category: "Web",
  },
  {
    title: "Voting App",
    description:
      "This is backend app I have created using node express and MongoDb This have functionality like login signUp you can vote here you can create candidate and candidate created by only Admin and there can be one admin and admin can't vote  and I have performed all operations using Postman you can checkout the repo by using following link",
    website: "https://github.com/bhushan-ai/voting-app-backend",
    category: "Backend",
  },
  {
    title: "Blogging App",
    description:
      "This is Fullstack app I have created using ejs node express and MongoDb This have functionality like login signUp you can create blog here you can add image in your blog also you can comment on any particular blog and I have performed all operations using Postman you can checkout the repo by using following link",
    website: "https://github.com/bhushan-ai/Blogify-Backend",
    category: "Backend",
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
      className="py-15 bg-gray-800 transition-colors duration-600"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8  text-gray-200">
          My Projects
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          {["All", "Web", "Mobile", "Backend"].map((category) => (
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
                className="bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-700"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <span className="mt-2 inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {project.category}
                  </span>
                  <div className="mt-4">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Visit
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
