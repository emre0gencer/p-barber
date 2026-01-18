import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, User, Layers, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Scissors,
    name: "Classic Cut",
    description: "Traditional barbershop cut with modern precision",
    price: "$25",
  },
  {
    icon: Layers,
    name: "Skin Fade",
    description: "Clean blend from skin to desired length",
    price: "$35",
  },
  {
    icon: Sparkles,
    name: "Beard Trim & Shape",
    description: "Sculpted beard with crisp edges",
    price: "$20",
  },
  {
    icon: User,
    name: "Line-Up",
    description: "Precision hairline and edge detailing",
    price: "$15",
  },
  {
    icon: Crown,
    name: "Full Grooming",
    description: "Haircut, beard, hot towel & styling",
    price: "$55",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
            Our Services
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground">
            Premium <span className="text-gradient-gold">Grooming</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-md mx-auto">
            From clean fades to detailed beard work—every service delivered with 
            precision and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 group hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-display text-3xl text-gold">
                  {service.price}
                </span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-6">
                {service.description}
              </p>
              <Link to="/book" className="block w-full">
                <Button variant="dark" size="sm" className="w-full">
                  Book Now
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
