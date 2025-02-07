"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", image: "https://picsum.photos/200/200?1" },
  { name: "Jane Smith", role: "CTO", image: "https://picsum.photos/200/200?2" },
  { name: "Mike Johnson", role: "Lead Developer", image: "https://picsum.photos/200/200?3" },
  { name: "Sarah Brown", role: "UX Designer", image: "https://picsum.photos/200/200?4" },
]

const TeamSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

