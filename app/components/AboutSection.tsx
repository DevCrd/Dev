"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const milestones = [
  { year: 2015, title: "Company Founded", description: "Started as a small team of passionate developers" },
  { year: 2018, title: "Cloud Specialization", description: "Achieved AWS Advanced Consulting Partner status" },
  { year: 2020, title: "AI Expansion", description: "Launched machine learning division with 10 new hires" },
  { year: 2023, title: "Global Reach", description: "Opened offices in 3 continents serving 50+ clients" },
]

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="https://picsum.photos/800/600?office" alt="Our Office" fill className="object-cover" />
          </motion.div>

          <div className="space-y-12">
            <h2 className="text-5xl font-bold">Pioneering Digital Innovation</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Forged in the crucible of technological advancement, DevCrd has evolved from a boutique development shop
              to a global leader in enterprise digital transformation.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mt-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

