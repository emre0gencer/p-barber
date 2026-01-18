import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Your Calendly URL
const CALENDLY_URL = "https://calendly.com/proman15gt/30min";

const services = [
  { id: "classic-haircut", name: "Classic Haircut", duration: "30 min", price: 35 },
  { id: "fade-taper", name: "Fade & Taper", duration: "45 min", price: 40 },
  { id: "beard-trim", name: "Beard Trim & Shape", duration: "20 min", price: 25 },
  { id: "hot-shave", name: "Hot Towel Shave", duration: "40 min", price: 45 },
  { id: "combo", name: "Hair & Beard Combo", duration: "60 min", price: 55 },
  { id: "kids-cut", name: "Kids Cut", duration: "25 min", price: 25 },
];

const features = [
  { icon: CheckCircle, text: "Real-time availability" },
  { icon: Calendar, text: "Instant confirmation" },
  { icon: Clock, text: "Flexible scheduling" },
];

const Booking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            Book Your <span className="text-gold">Appointment</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your preferred time and service. We'll send you a confirmation right away.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-gold transition-all"
              >
                <div className="text-2xl font-display text-gold mb-2">
                  ${service.price}
                </div>
                <h3 className="font-semibold text-sm mb-1">{service.name}</h3>
                <p className="text-xs text-muted-foreground">{service.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <feature.icon className="w-5 h-5 text-gold" />
              <span className="text-muted-foreground">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Calendly Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl overflow-hidden shadow-xl"
        >
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </motion.div>

        {/* Info Section */}
        <div className="mt-12 text-center text-sm text-muted-foreground space-y-2">
          <p>
            By booking, you agree to receive appointment confirmations and reminders via email.
          </p>
          <p>
            Need to cancel or reschedule? Use the link in your confirmation email or call us at{" "}
            <a href="tel:4125551234" className="text-gold hover:underline">
              (412) 555-1234
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
