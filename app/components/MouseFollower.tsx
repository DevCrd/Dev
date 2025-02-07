// components/MouseFollower.tsx
"use client"
import { useEffect, useState } from "react"
import { motion, useMotionTemplate, useSpring } from "framer-motion"

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const springConfig = { stiffness: 800, damping: 30 }
  
  const x = useSpring(mousePosition.x, springConfig)
  const y = useSpring(mousePosition.y, springConfig)
  const transform = useMotionTemplate`translate(${x}px, ${y}px)`

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      setIsHovering(target?.closest('a, button') !== null)
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ transform }}
    >
      <div className={`transition-transform duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}>
        <div className="text-2xl animate-ai-pulse">
          {isHovering ? '🤖' : '✨'}
        </div>
        <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full" />
      </div>
    </motion.div>
  )
}


export default MouseFollower