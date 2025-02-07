"use client"
import { motion } from "framer-motion"

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge solutions.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication with our clients.",
  },
  { title: "Excellence", description: "We strive for the highest quality in every project we undertake." },
  { title: "Integrity", description: "We maintain the highest ethical standards in all our business practices." },
]

const ValuesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection

