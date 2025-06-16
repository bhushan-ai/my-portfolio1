import { motion } from "framer-motion";

export default function AboutMe() {
  const name = "Bhushan";

  return (
    <section
      id="about"
      className="py-15 bg-gray-800 transition-colors duration-600"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          About Me
        </h2>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Hello, I'm {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm currently in my second year of studying web development, and
            while I don't have professional experience yet, I’m eager to learn
            and grow in this field. I'm actively seeking an internship where I
            can apply my knowledge of React,Tailwind and modern web technologies
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My goal is to create beautiful, efficient, and user-friendly
            websites that solve real-world problems. I'm constantly learning and
            staying up-to-date with the latest trends in web development.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me traveling, reading books, or
            experimenting with new recipes in the kitchen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
