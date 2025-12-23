import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Seattle", primary: true },
  { name: "Kirkland", primary: true },
  { name: "Tacoma", primary: true },
  { name: "Mountlake Terrace", primary: true },
  { name: "Bellevue", primary: false },
  { name: "Redmond", primary: false },
  { name: "Renton", primary: false },
  { name: "Bothell", primary: false },
  { name: "Everett", primary: false },
  { name: "Lynnwood", primary: false },
];

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-card rounded-2xl border border-border shadow-card flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full p-8">
                {/* Simplified map representation */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="30" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="15" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
                
                {/* Center pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow"
                  >
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Location pins */}
                {[
                  { top: "25%", left: "60%", label: "Kirkland" },
                  { top: "45%", left: "30%", label: "Seattle" },
                  { top: "70%", left: "50%", label: "Tacoma" },
                  { top: "15%", left: "40%", label: "Everett" },
                  { top: "30%", left: "75%", label: "Bellevue" },
                  { top: "55%", left: "70%", label: "Renton" },
                ].map((pin, index) => (
                  <motion.div
                    key={pin.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse" />
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-foreground whitespace-nowrap font-medium">
                      {pin.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="construction-badge mb-4 inline-block">Coverage</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Service <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We proudly serve homeowners throughout the greater Seattle metropolitan 
              area. Our team travels to deliver quality craftsmanship wherever you 
              need us.
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    area.primary 
                      ? "bg-gradient-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium text-sm">{area.name}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mt-6">
              Don't see your area? Contact us—we may still be able to help!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
