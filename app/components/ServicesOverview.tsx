"use client"
import { motion } from "framer-motion"

const services = [
  { title: "Custom Software Development", icon: "💻" },
  { title: "Cloud Infrastructure", icon: "☁️" },
  { title: "DevOps Automation", icon: "🔄" },
  { title: "AI & Machine Learning", icon: "🧠" },
  { title: "Cybersecurity Solutions", icon: "🔒" },
  { title: "Mobile App Development", icon: "📱" },
]

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">Innovative solutions tailored to your business needs.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview

