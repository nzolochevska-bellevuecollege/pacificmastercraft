import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import galleryDeckAda from "@/assets/gallery-deck-ada.jpg";
import galleryStaircase from "@/assets/gallery-staircase.jpg";
import galleryTileWall from "@/assets/gallery-tile-wall.jpg";
import galleryShower from "@/assets/gallery-shower.jpg";
import galleryDeckExterior from "@/assets/gallery-deck-exterior.jpg";
import heroDeck from "@/assets/hero-deck.jpg";

const projects = [
  {
    id: 1,
    image: galleryDeckAda,
    title: "Composite Deck with ADA Ramp",
    category: "Decks",
  },
  {
    id: 2,
    image: galleryStaircase,
    title: "Custom Wood & Metal Staircase",
    category: "Staircases",
  },
  {
    id: 3,
    image: galleryTileWall,
    title: "Geometric Tile Feature Wall",
    category: "Tile Work",
  },
  {
    id: 4,
    image: galleryShower,
    title: "Custom Tiled Shower",
    category: "Bathroom",
  },
  {
    id: 5,
    image: galleryDeckExterior,
    title: "Exterior Deck with Metal Railings",
    category: "Decks",
  },
  {
    id: 6,
    image: heroDeck,
    title: "Premium Wood Deck Build",
    category: "Decks",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="construction-badge mb-4 inline-block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse our recent projects and see the quality craftsmanship we bring 
            to every home.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-card"
              onClick={() => setSelectedImage(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                  {project.category}
                </span>
                <h3 className="text-foreground font-bold mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <span className="text-primary text-sm uppercase tracking-wider font-semibold">
                  {selectedImage.category}
                </span>
                <h3 className="text-foreground text-xl font-bold mt-1">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
