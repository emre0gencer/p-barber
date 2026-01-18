import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scissors, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(43 74% 49%) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border border-gold/30 mb-8"
          >
            <Scissors className="w-10 h-10 text-gold" />
          </motion.div>

          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            Ready for <span className="text-gradient-gold">Fresh</span>?
          </h2>
          <p className="text-xl text-muted-foreground font-body mb-8 max-w-xl mx-auto">
            In and out. No waiting. Fresh every time. Book your seat at 
            Pittsburgh's premier barbershop.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/book">
              <Button variant="hero" size="xl" className="animate-pulse-gold">
                <Scissors className="w-5 h-5" />
                Book Your Appointment
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              <Clock className="w-5 h-5" />
              View Hours
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-body">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-gold" />
              <span>Quick booking</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <Scissors className="w-4 h-4 text-gold" />
              <span>Walk-ins welcome</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
