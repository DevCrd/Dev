"use client"
import { motion } from "framer-motion"
import ImageGallery from "../components/ImageGallery"
import profileImage from "@/public/profile.jpg"
import profileImage2 from "@/public/1000188477.jpg"
import profileImage3 from "@/public/1000223094.jpg"
import profileImage4 from "@/public/1000262400.jpg"

const timeline = [
  {
    year: "2020",
    event: "Began Tech Journey",
    milestone: "Started as Intern at Educare",
    icon: "👨💻",
  },
  {
    year: "2021",
    event: "Junior Developer Role",
    milestone: "Led team of 5 interns",
    icon: "👨🏫",
  },
  {
    year: "2022",
    event: "Support Engineer",
    milestone: "30% client satisfaction improvement",
    icon: "🛠️",
  },
  {
    year: "2023",
    event: "Full-Stack Developer",
    milestone: "10k+ user systems development",
    icon: "🚀",
  },
  {
    year: "2024",
    event: "Cloud Architect",
    milestone: "AWS/Azure certified solutions",
    icon: "☁️",
  },
]

const images = [
  {
    src: profileImage4,
    alt: "Chidera Godswill Eric - Professional Shot",
  },
  {
    src: profileImage2,
    alt: "Chidera Godswill Eric - Portrait",
  },
  {
    src: profileImage3,
    alt: "Chidera Godswill Eric - Casual Professional",
  },
]

export default function CEO() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-24">
          <ImageGallery images={images} />
          <div className="mt-8 text-center">
            <h2 className="text-4xl font-bold mb-2">Chidera G. Eric</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Full-Stack Architect & Tech Evangelist</p>
          </div>
        </div>

        <div className="space-y-12">
          <blockquote className="text-3xl leading-relaxed font-light italic border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-white/10 to-transparent dark:from-gray-800/50">
            &quot;Technology is the ultimate equalizer - with code, we can build bridges between imagination and
            reality.&quot;
          </blockquote>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Professional Odyssey</h3>
            <div className="relative">
              <div className="absolute left-5 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
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
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.event}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.milestone}</p>
                    <div className="text-sm text-blue-500 dark:text-blue-400">{item.year}</div>
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

