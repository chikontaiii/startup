import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import CaseExamples from '@/components/CaseExamples';
import ImAvailable from '@/components/ImAvailable';
import MultiRole from '@/components/MultiRole';
import ResourceCategories from '@/components/ResourceCategories';
import MarketMonetization from '@/components/MarketMonetization';
import Roadmap from '@/components/Roadmap';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bone-50 text-charcoal-800">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <CaseExamples />
        <ImAvailable />
        <MultiRole />
        <ResourceCategories />
        <MarketMonetization />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
