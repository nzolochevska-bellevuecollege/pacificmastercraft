import { motion } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Konstantin R.",
    location: "Seattle Area",
    text: "Fantastic job on our stair rail restoration. Everything turned out perfectly, on schedule, with no adjustments needed.",
    rating: 5,
  },
  {
    name: "Gala D.",
    location: "Seattle Area",
    text: "Pacific Master Craft exceeded our expectations. Their craftsmanship and attention to detail are evident in every corner of our home.",
    rating: 5,
  },
  {
    name: "Alan C.",
    location: "Washington",
    text: "Dima and the crew built our deck staircase beautifully. Very professional and communicative throughout the entire project.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="construction-badge mb-4 inline-block">Verified Google Reviews</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what homeowners across the 
            Seattle area have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-card rounded-xl p-6 border border-border shadow-card relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a 
            href="https://maps.app.goo.gl/PxmBFs1egcoeEtwG8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            See All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
