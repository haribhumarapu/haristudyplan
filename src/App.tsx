import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      <Navigation />
      <Hero />
      <Statistics />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
