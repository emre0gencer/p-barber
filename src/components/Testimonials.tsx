import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus J.",
    role: "Pitt Student",
    text: "Best fade in Pittsburgh, hands down. Been coming here for 2 years and never been disappointed. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "UPMC Professional",
    text: "I need to look sharp for work every day. P's consistently delivers. Quick, professional, and the lineup is always crisp.",
    rating: 5,
  },
  {
    name: "Tyrone W.",
    role: "Local Creative",
    text: "The vibe in here is everything. Good music, great conversation, and you walk out looking like a million bucks. Real community spot.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-charcoal">
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
            Testimonials
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground">
            What <span className="text-gradient-gold">Clients</span> Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-background/50 border border-border hover:border-gold/30 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground/90 font-body mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-display text-lg text-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-display text-2xl text-gold">4.9</span>
          </div>
          <div className="h-6 w-[1px] bg-border" />
          <span className="text-muted-foreground font-body">
            Based on 500+ reviews
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
