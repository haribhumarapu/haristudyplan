import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import Statistics from "../../components/Statistics";
import Features from "../../components/Features";
import DashboardPreview from "../../components/DashboardPreview";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import AnimatedBackground from "../../components/AnimatedBackground";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />

      <Navigation />

      <Hero />

      <Statistics />

      <Features />

      <DashboardPreview />

      <CTA />

      <Footer />
    </div>
  );
}