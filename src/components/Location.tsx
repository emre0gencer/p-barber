import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Car } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-card h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.4895089694487!2d-79.95089068459!3d40.45312397936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f22a1f8a6e35%3A0x3d62d8c7b2c9c8c7!2s4523%20Centre%20Ave%2C%20Pittsburgh%2C%20PA%2015213!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="P's Barber Shop Location"
            />
            <div className="absolute inset-0 pointer-events-none border border-border/50 rounded-xl" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Find Us
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground leading-tight">
              Heart of <span className="text-gradient-gold">Pittsburgh</span>
            </h2>
            <p className="text-muted-foreground font-body mt-6 text-lg">
              Located on Centre Ave in the Oakland neighborhood. Easy access for 
              Pitt students, UPMC workers, and everyone across the city.
            </p>

            {/* Info Cards */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal/50 border border-border">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-xl text-foreground">Address</h3>
                  <p className="text-muted-foreground font-body">
                    4523 Centre Ave, Pittsburgh, PA 15213
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal/50 border border-border">
                <Clock className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-xl text-foreground">Hours</h3>
                  <p className="text-muted-foreground font-body">
                    Mon–Sat: 9AM – 7PM<br />
                    Sun: 10AM – 4PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal/50 border border-border">
                <Phone className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-xl text-foreground">Call</h3>
                  <p className="text-muted-foreground font-body">
                    (412) 555-CUTS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-charcoal/50 border border-border">
                <Car className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-xl text-foreground">Parking</h3>
                  <p className="text-muted-foreground font-body">
                    Street parking available, garage nearby
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
