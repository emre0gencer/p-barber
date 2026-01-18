import { Scissors, Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Scissors className="w-8 h-8 text-gold" />
              <span className="font-display text-2xl text-foreground">
                P's <span className="text-gold">Barber</span>
              </span>
            </a>
            <p className="text-muted-foreground font-body max-w-sm mb-6">
              Serving Pittsburgh, one cut at a time. Premium grooming for the 
              modern gentleman in the heart of Oakland.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-border flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-border flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 font-body">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/book" className="text-muted-foreground hover:text-gold transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#location" className="text-muted-foreground hover:text-gold transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span>4523 Centre Ave, Pittsburgh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>(412) 555-CUTS</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>Mon–Sat: 9AM–7PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-body">
            © 2024 P's Barber Shop. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-body">
            Precision. Pride. Pittsburgh.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
