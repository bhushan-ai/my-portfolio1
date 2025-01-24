import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "𝗝𝗦" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Git", icon: "🔀" },
    { name: "C", icon: "👨‍💻" },
    { name: "C++", icon: "💻" },
    { name: "Java", icon: "☕" },
    { name: "SQL", icon: "🗄️" },
    
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-4xl mb-2 block">{skill.icon}</span>
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
