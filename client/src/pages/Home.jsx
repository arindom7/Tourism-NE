import Hero from '../components/Hero'
import StateFilter from '../components/StateFilter'
import TrendingDestinations from '../components/TrendingDestinations'
import GovernmentLodge from '../components/GovernmentLodge'
import PermitBanner from '../components/PermitBanner'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      <Hero />
      <StateFilter />
      <TrendingDestinations />
      <GovernmentLodge />
      <PermitBanner />
      <Footer />
    </main>
  )
}

export default Home