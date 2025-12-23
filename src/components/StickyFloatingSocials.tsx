import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const StickyFloatingSocials = () => {
  return (
    <>
      {/* Desktop: Floating side bar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
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

      {/* Mobile: Sticky bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border py-3 px-4"
      >
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/PacificMasterCraftLLC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-button"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/pacificmastercraftllc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-button"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default StickyFloatingSocials;
