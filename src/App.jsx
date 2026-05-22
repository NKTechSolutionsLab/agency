import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import WhyChoose from './components/WhyChoose'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen" id='home'>
      <Dropdown />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <WhyChoose />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}

export default App