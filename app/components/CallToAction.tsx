"use client"
import { motion } from "framer-motion"
import CalendarButton from "./CalendarButton"

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Engineer Tomorrow&apos;s Solutions</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Whether you need full-stack development, cloud architecture, or technical leadership - I bring both code and
            strategy to the table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto ">
              <CalendarButton />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
              <a
                href="mailto:chideraaniude@gmail.com"
                className="inline-block w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10"
              >
                Email Directly
              </a>
            </motion.div>
          </div>
          <div className="pt-8 border-t border-white/20 mt-8">
            <p className="text-sm">
              Available for contract roles and project-based work
              <br />
              <a href="mailto:chideraaniude@gmail.com" className="hover:underline">
                chideraaniude@gmail.com
              </a>{" "}
              | +234 814 975 6258
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction

