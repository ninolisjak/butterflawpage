import Navbar from './components/website/Navbar';
import Hero from './components/website/Hero';
import Features from './components/website/Features';
import HowItWorks from './components/website/HowItWorks';
import Programs from './components/website/Programs';
import CallToAction from './components/website/CallToAction';
import Footer from './components/website/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Programs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
