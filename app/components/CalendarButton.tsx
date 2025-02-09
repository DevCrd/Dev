// components/CalendarButton.tsx
"use client"
import { motion } from "framer-motion"

export default function CalendarButton() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex item-center justify-center w-full">
      <a
        href="#"
        // target="_blank"
        rel="noopener noreferrer"
        className="px-8 w-full py-4 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-shadow"
      >
        Schedule Meeting
      </a>
    </motion.div>
  )
}