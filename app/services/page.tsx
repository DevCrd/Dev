"use client"
import { motion } from "framer-motion"

const services = [
  { 
    title: "Full-Stack Development",
    icon: "🖥️",
    description: "End-to-end web solutions with React/Next.js frontends and Node.js/Laravel backends"
  },
  { 
    title: "Cloud Infrastructure", 
    icon: "☁️",
    description: "AWS/Azure cloud architecture and Kubernetes orchestration solutions"
  },
  { 
    title: "DevOps Automation", 
    icon: "🔄",
    description: "CI/CD pipelines with Docker and comprehensive monitoring systems"
  },
  { 
    title: "CMS & E-Commerce", 
    icon: "🛒",
    description: "Advanced WordPress solutions with custom plugins and WooCommerce integration"
  },
  { 
    title: "Education Tech", 
    icon: "🎓",
    description: "Custom school management systems with student/parent portals"
  },
  { 
    title: "Technical Support", 
    icon: "🔧",
    description: "24/7 system maintenance and user support with 30%+ satisfaction improvements"
  },
  { 
    title: "Team Leadership", 
    icon: "👥",
    description: "Technical team management and junior developer mentorship programs"
  },
  { 
    title: "API Development", 
    icon: "🔌",
    description: "RESTful API design with PostgreSQL/MongoDB integration"
  },
  { 
    title: "UI/UX Design", 
    icon: "🎨",
    description: "User-centered interface design with accessibility compliance"
  },
  { 
    title: "Legacy Migration", 
    icon: "🚚",
    description: "Seamless system upgrades and platform transitions"
  }
]

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl transition-transform group-hover:scale-110">
                  {service.icon}
                </span>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              {index < 4 && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-blue-500 dark:text-blue-400">
                    Core Expertise
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview