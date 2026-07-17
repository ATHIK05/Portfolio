import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/hero/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import TechStack from './components/sections/TechStack'
import Certifications from './components/sections/Certifications'
import Awards from './components/sections/Awards'
import Contact from './components/sections/Contact'
import Gallery from './components/sections/Gallery'
import CustomCursor from './components/ui/CustomCursor'
import LoadingScreen from './components/ui/LoadingScreen'
import OSBootloader from './components/ui/OSBootloader'
import useLenis from './hooks/useLenis'
import Desktop from './os/Desktop'

function ClassicView({ setViewMode }) {
  useLenis()

  return (
    <div className="classic-theme">
      <Navbar viewMode="classic" setViewMode={setViewMode} />
      <main>
        <Hero setViewMode={setViewMode} isClassic />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Certifications />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [viewMode, setViewMode] = useState('classic') // 'classic' | 'booting' | 'os'

  useEffect(() => {
    if (viewMode === 'os' || viewMode === 'booting') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [viewMode])

  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      {viewMode === 'classic' && (
        <ClassicView setViewMode={setViewMode} />
      )}
      {viewMode === 'booting' && (
        <OSBootloader onComplete={() => setViewMode('os')} />
      )}
      {viewMode === 'os' && (
        <Desktop setViewMode={setViewMode} />
      )}
    </div>
  )
}
