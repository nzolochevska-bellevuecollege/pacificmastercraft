import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const StickyFloatingSocials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
    >
      <a
        href="https://www.facebook.com/PacificMasterCraftLLC"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-button hover:scale-110 transition-transform"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/pacificmastercraftllc/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-button hover:scale-110 transition-transform"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </motion.div>
  );
};

export default StickyFloatingSocials;
