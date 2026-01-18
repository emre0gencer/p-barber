import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scissors, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="P's Barber Shop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated Gold Line Accent */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "40%" }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute left-6 lg:left-12 top-1/4 w-[2px] bg-gradient-gold hidden md:block"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl md:ml-12 lg:ml-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Est. Pittsburgh, PA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-6"
          >
            <span className="text-foreground">Precision Cuts.</span>
            <br />
            <span className="text-gradient-gold">Pittsburgh Roots.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mb-10"
          >
            Expert fades, sharp line-ups, and premium grooming in the heart of 
            Pittsburgh. Where skill meets style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/book">
              <Button variant="hero" size="xl" className="group">
                <Scissors className="w-5 h-5 transition-transform group-hover:rotate-45" />
                Book an Appointment
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              <Clock className="w-5 h-5" />
              Walk-Ins Welcome
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-8 mt-16 pt-8 border-t border-border/50"
          >
            <div>
              <span className="font-display text-4xl text-gold">10+</span>
              <p className="text-sm text-muted-foreground font-body">Years Experience</p>
            </div>
            <div>
              <span className="font-display text-4xl text-gold">5K+</span>
              <p className="text-sm text-muted-foreground font-body">Happy Clients</p>
            </div>
            <div>
              <span className="font-display text-4xl text-gold">4.9</span>
              <p className="text-sm text-muted-foreground font-body">Star Rating</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
