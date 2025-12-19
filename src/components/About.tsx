import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "100%", label: "Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="construction-badge mb-4 inline-block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built on Trust, <span className="text-gradient">Detail & Quality</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Since 2015, Pacific Master Craft LLC has been the trusted choice for 
              homeowners throughout the Seattle area. We're a local, family-oriented 
              company that takes pride in every project we complete.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team brings over a decade of experience in residential construction, 
              remodeling, and custom carpentry. We focus on the details because we know 
              that's what transforms a house into your dream home.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                "Licensed, bonded, and fully insured",
                "Transparent pricing with no hidden fees",
                "Clean, respectful job sites",
                "Direct communication with project leads",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-card rounded-xl p-6 text-center border border-border shadow-card"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
