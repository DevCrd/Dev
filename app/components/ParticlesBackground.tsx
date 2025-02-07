// components/ParticlesBackground.tsx
"use client"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              size: 15,
              duration: 2,
              opacity: 0.8
            }
          }
        },
        particles: {
          color: { value: ["#3B82F6", "#10B981", "#F59E0B"] },
          links: {
            color: "#64748B",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            speed: 1,
            straight: false
          },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: 0.5 },
          shape: { type: "" },
          size: { value: { min: 1, max: 5 } }
        },
        detectRetina: true
      }}
    />
  )
}

export default ParticlesBackground