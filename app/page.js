import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import PourquoiJonquera from '../components/PourquoiJonquera'
import SortiesPreview from '../components/SortiesPreview'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <PourquoiJonquera />
        <SortiesPreview />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
