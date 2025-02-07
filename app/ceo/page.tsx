// components/CEO.tsx
"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const timeline = [
  { 
    year: "2020",
    event: "Began Tech Journey",
    milestone: "Started as Intern at Educare",
    icon: "👨💻"
  },
  { 
    year: "2021",
    event: "Junior Developer Role",
    milestone: "Led team of 5 interns",
    icon: "👨🏫"
  },
  { 
    year: "2022",
    event: "Support Engineer",
    milestone: "30% client satisfaction improvement",
    icon: "🛠️"
  },
  { 
    year: "2023",
    event: "Full-Stack Developer",
    milestone: "10k+ user systems development",
    icon: "🚀"
  },
  { 
    year: "2024",
    event: "Cloud Architect",
    milestone: "AWS/Azure certified solutions",
    icon: "☁️"
  }
]

export default function CEO() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="/chidera-profile.jpg"
            alt="Chidera Godswill Eric"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-4xl font-bold mb-2">Chidera G. Eric</h2>
            <p className="text-xl">Full-Stack Architect & Tech Evangelist</p>
          </div>
        </div>

        <div className="space-y-12">
          <blockquote className="text-3xl leading-relaxed font-light italic border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-white/10 to-transparent dark:from-gray-800/50">
            "Technology is the ultimate equalizer - with code, we can build bridges between imagination and reality."
          </blockquote>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Professional Odyssey</h3>
            <div className="relative">
              <div className="absolute left-5 h-full w-0.5 bg-gray-200 dark:bg-gray-700"/>
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-16 mb-8 group"
                >
                  <div className="absolute left-5 top-0 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 dark:group-hover:bg-blue-700">
                    <span className="text-white font-bold">{item.icon}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {item.event}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.milestone}
                    </p>
                    <div className="text-sm text-blue-500 dark:text-blue-400">
                      {item.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}