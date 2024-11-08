import AboutMeOverview from "@/components/AboutMeOverview"
import Certification from "@/components/Certification"
import HeroSection from "@/components/HeroSection"
import Skills from "@/components/Skills"

const App = () => {
  return <div className="w-screen flex flex-col">
    <HeroSection />
    <AboutMeOverview />
    <Skills />
    <Certification />
  </div>
}

export default App