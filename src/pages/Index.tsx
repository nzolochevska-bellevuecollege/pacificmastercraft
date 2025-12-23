import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyFloatingSocials from "@/components/StickyFloatingSocials";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
      <StickyFloatingSocials />
    </main>
  );
};

export default Index;
