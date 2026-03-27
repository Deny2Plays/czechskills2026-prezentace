import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import DealershipsSection from '../components/DealershipsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <DealershipsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}