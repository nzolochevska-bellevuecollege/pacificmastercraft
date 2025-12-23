import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="construction-badge mb-4 inline-block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your <span className="text-gradient">Project?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Contact us today for a free estimate. We'll discuss your vision 
              and provide a detailed quote with no obligation.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href="tel:2068865653"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Call Us</div>
                <div className="text-xl font-bold text-foreground">(206) 886-5653</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:pacificmastercraft@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email Us</div>
                <div className="text-xl font-bold text-foreground">pacificmastercraft@gmail.com</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Visit Us</div>
                <div className="text-xl font-bold text-foreground">914 N Union Ave, Tacoma, WA 98406</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 p-6 bg-gradient-card rounded-xl border border-border"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Hours</div>
                <div className="text-xl font-bold text-foreground">Mon - Sat: 7am - 6pm</div>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <a href="tel:2068865653">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                <Phone className="w-5 h-5" />
                Call Now for Free Estimate
              </Button>
            </a>
            <a href="mailto:pacificmastercraft@gmail.com">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto gap-2">
                <Mail className="w-5 h-5" />
                Send Us an Email
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
