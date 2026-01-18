import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Booking />
        <Location />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
