"use client"
import { motion } from "framer-motion"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
]

const TechStackSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection

