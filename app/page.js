import Header from '@/components/Header'
import Hero from '@/components/Hero'
import BlueprintShowcase from '@/components/BlueprintShowcase'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BlueprintShowcase />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
