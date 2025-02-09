"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"
import TechStackMarquee from "./components/TechStackMarquee"
import ServicesOverview from "./components/ServicesOverview"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
// import Logo from "./components/Logo"

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (marquee) {
      const clone = marquee.firstElementChild?.cloneNode(true)
      if (clone) {
        marquee.appendChild(clone)
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow container mx-auto px-4 sm:px-6 py-16 sm:py-24 flex items-center">
        <div className="flex flex-col items-center relative w-full">

          <div className="absolute inset-0 opacity-10 dark:opacity-20">
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-4 h-full w-full">
              {[...Array(48)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-400 rounded-lg"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 2, delay: i * 0.1, repeat: Number.POSITIVE_INFINITY }}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              DevCrd
            </h1>
            {/* <Logo className="text-black dark:text-white" /> */}
              
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="w-32 h-32 sm:w-48 sm:h-48 border-4 border-black dark:border-white mb-8 sm:mb-12 relative mx-auto bg-gradient-to-br from-white/10 to-black/10 dark:from-white/20 dark:to-black/20"
            >
              <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl font-bold">
                {"</>"}
              </div>
            </motion.div>

            <p className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed bg-gradient-to-r from-gray-600 to-black dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
              Engineering digital excellence through <span className="font-semibold">precision code</span> and{" "}
              <span className="font-semibold">visionary solutions</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/contact"
                  className="block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  Start Your Journey
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/services"
                  className="block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-black dark:border-white text-black dark:text-white font-semibold hover:bg-black/5 dark:hover:bg-white/5 text-center"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <TechStackMarquee />
      <ServicesOverview />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

