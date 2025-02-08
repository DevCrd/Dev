"use client"
import { useRef, useEffect } from "react"

const TechStackMarquee = () => {
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

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "Redis",
    "CI/CD",
    "Jest",
    "OOP",
    "Webpack",
  ]

  return (
    <div className="py-8 bg-gray-100 dark:bg-gray-800 mt-[5rem] overflow-hidden">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {techStack.map((tech) => (
            <div key={tech} className="flex items-center space-x-4 mx-8">
              <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">{tech}</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStackMarquee

