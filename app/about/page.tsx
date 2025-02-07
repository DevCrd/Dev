import AboutSection from "../components/AboutSection"
import TeamSection from "../components/TeamSection"
import ValuesSection from "../components/ValuesSection"
import TechStackSection from "../components/TechStackSection"
import CallToAction from "../components/CallToAction"

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutSection />
      <TeamSection />
      <ValuesSection />
      <TechStackSection />
      <CallToAction />
    </div>
  )
}

