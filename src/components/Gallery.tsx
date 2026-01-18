import { motion } from "framer-motion";
import { useState } from "react";
import galleryFade from "@/assets/gallery-fade-1.jpg";
import galleryBeard from "@/assets/gallery-beard.jpg";
import galleryLineup from "@/assets/gallery-lineup.jpg";
import galleryTaper from "@/assets/gallery-taper.jpg";

const galleryItems = [
  { src: galleryFade, label: "Skin Fade", category: "Fades" },
  { src: galleryBeard, label: "Beard Shape", category: "Beards" },
  { src: galleryLineup, label: "Line-Up", category: "Details" },
  { src: galleryTaper, label: "Taper Fade", category: "Fades" },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
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
            Our Work
          </span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground">
            The <span className="text-gradient-gold">Craft</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-md mx-auto">
            Every fade, every line-up, every detail—showcasing the artistry behind 
            every cut.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Hover Overlay */}
              <motion.div
                initial={false}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-gold/20 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center">
                  <span className="text-xs text-gold/80 tracking-widest uppercase font-body">
                    {item.category}
                  </span>
                  <h3 className="font-display text-2xl text-foreground mt-1">
                    {item.label}
                  </h3>
                </div>
              </motion.div>

              {/* Label (visible on mobile) */}
              <div className="absolute bottom-4 left-4 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-body text-foreground">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
