import { motion } from "framer-motion";
import { 
  Hammer, 
  Layers, 
  Bath, 
  Grid3X3, 
  Droplets, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Custom Decks",
    description: "Wood and composite deck construction with premium materials and expert craftsmanship for lasting outdoor living spaces.",
  },
  {
    icon: Layers,
    title: "Staircases & Railings",
    description: "Custom metal and wood staircases with ADA-compliant options. Beautiful railings that combine safety with style.",
  },
  {
    icon: Bath,
    title: "Bathroom Remodels",
    description: "Complete bathroom transformations from design to finish. Modern fixtures, custom vanities, and quality finishes.",
  },
  {
    icon: Grid3X3,
    title: "Custom Tile Work",
    description: "Geometric patterns, feature walls, and intricate designs. Precision tile installation for floors, walls, and backsplashes.",
  },
  {
    icon: Droplets,
    title: "Shower Pans & Curbs",
    description: "Waterproof custom shower pans and curbs built to last. Expert slope work ensures proper drainage every time.",
  },
  {
    icon: Wrench,
    title: "General Carpentry",
    description: "Home improvements, trim work, built-ins, and repairs. Skilled carpentry for projects big and small.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="construction-badge mb-4 inline-block">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From custom decks to complete bathroom remodels, we deliver quality 
            craftsmanship on every project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
