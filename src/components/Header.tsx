import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Scissors className="w-8 h-8 text-gold" />
              <span className="font-display text-2xl text-foreground">
                P's <span className="text-gold">Barber</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Link to="/book">
                <Button variant="gold" size="sm">
                  Book Now
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background md:hidden pt-20"
      >
        <nav className="flex flex-col items-center gap-8 p-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-3xl text-foreground hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="hero" size="xl" className="mt-4">
              Book Now
            </Button>
          </Link>
        </nav>
      </motion.div>

      {/* Mobile Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-background/90 backdrop-blur-lg border-t border-border"
      >
        <Link to="/book" className="block w-full">
          <Button variant="hero" size="lg" className="w-full">
            <Scissors className="w-5 h-5" />
            Book an Appointment
          </Button>
        </Link>
      </motion.div>
    </>
  );
};

export default Header;
