import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WhatToBuy from '../components/WhatToBuy'
import PourquoiJonquera from '../components/PourquoiJonquera'
import SortiesPreview from '../components/SortiesPreview'
import RouteMap from '../components/RouteMap'
import Gallery from '../components/Gallery'
import BusPhotos from '../components/BusPhotos'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhatToBuy />
        <RouteMap />
        <PourquoiJonquera />
        <Gallery />
        <SortiesPreview />
        <BusPhotos />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
