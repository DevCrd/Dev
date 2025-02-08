"use client"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Educare Team",
    role: "Technology Partner",
    quote: "Transformed our education platform's performance and user engagement metrics",
    impact: "40% faster system response times",
  },
  {
    name: "Client School",
    role: "Long-term Customer",
    quote: "Revolutionized our digital infrastructure with 99.9% uptime",
    impact: "500+ daily active users supported",
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Client Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <p className="text-lg mb-4 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="border-t pt-4 border-gray-200 dark:border-gray-600">
                <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{testimonial.role}</p>
                <div className="text-blue-500 dark:text-blue-400 text-sm">▲ {testimonial.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

