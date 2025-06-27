import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
} 