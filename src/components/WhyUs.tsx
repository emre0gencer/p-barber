import { motion } from "framer-motion";
import { Shield, Eye, Heart, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Barbers",
    description: "10+ years of craft perfected through thousands of cuts",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Every line, every fade executed with precision",
  },
  {
    icon: Shield,
    title: "Consistency",
    description: "Same quality cut, every single visit",
  },
  {
    icon: Heart,
    title: "Community Trust",
    description: "Pittsburgh's go-to shop for generations",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Walk-ins welcome, appointments available",
  },
  {
    icon: Users,
    title: "Student-Friendly",
    description: "Special rates for Pittsburgh students",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Why P's Barber Shop
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground leading-tight">
              More Than <span className="text-gradient-gold">A Haircut</span>
            </h2>
            <p className="text-muted-foreground font-body mt-6 text-lg leading-relaxed">
              At P's, we don't just cut hair—we build confidence. Every client 
              walks out sharper than when they walked in. That's the Pittsburgh 
              standard.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-16 w-[2px] bg-gradient-gold" />
              <blockquote className="text-foreground/80 font-body italic">
                "Where every cut tells a story and every client becomes family."
              </blockquote>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-5 rounded-xl bg-background/50 border border-border hover:border-gold/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
