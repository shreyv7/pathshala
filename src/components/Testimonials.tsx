import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { 
  staggerContainer, 
  staggerItem, 
  textRevealVariants, 
  stickyNoteVariants 
} from "@/lib/animations";

const testimonials = [
  {
    text: "Feels just like our college canteen, but with amazing food! 😋",
    author: "Priya S.",
    color: "chalk-yellow",
    rotation: "rotate-2",
    emoji: "😋"
  },
  {
    text: "Loved the doodle walls, perfect place to hang out with friends 🎨",
    author: "Arjun M.", 
    color: "chalk-pink",
    rotation: "-rotate-1",
    emoji: "🎨"
  },
  {
    text: "Coffee + nostalgia = perfection! Best study spot in Goa ☕",
    author: "Meera K.",
    color: "chalk-green", 
    rotation: "rotate-1",
    emoji: "☕"
  },
  {
    text: "The vibe here takes me back to my campus days instantly 📚",
    author: "Rohit P.",
    color: "chalk-blue",
    rotation: "-rotate-2",
    emoji: "📚"
  },
  {
    text: "Great food, even better memories. This place has my heart! ❤️",
    author: "Sneha R.",
    color: "chalk-yellow",
    rotation: "rotate-3",
    emoji: "❤️"
  },
  {
    text: "Finally, a café that gets the student life right! 🎓",
    author: "Karan V.",
    color: "chalk-pink", 
    rotation: "-rotate-1",
    emoji: "🎓"
  }
];

const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="testimonials" className="pt-12 pb-20 px-6 bg-background relative overflow-hidden">
      {/* Animated Background corkboard texture */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted"></div>
      </motion.div>

      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 text-chalk-blue text-3xl font-handwritten opacity-10"
          animate={{ 
            y: [-8, 8, -8],
            rotate: [-5, 5, -5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💭
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-20 text-chalk-green text-4xl font-handwritten opacity-10"
          animate={{ 
            y: [8, -8, 8],
            rotate: [5, -5, 5]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ✨
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/4 text-chalk-pink text-2xl font-handwritten opacity-10"
          animate={{ 
            y: [-5, 5, -5],
            rotate: [-3, 3, -3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          ⭐
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-handwritten text-foreground mb-6"
            variants={textRevealVariants}
            initial="initial"
            animate={headerVisible ? "animate" : "initial"}
          >
            <motion.span 
              className="doodle-underline text-shimmer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              What Our Guests Say
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Real stories from real people who found their happy place at Pathshala
          </motion.p>
        </motion.div>
        
        {/* Animated Testimonials Grid */}
        <motion.div 
          ref={testimonialsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          variants={staggerContainer}
          initial="initial"
          animate={testimonialsVisible ? "animate" : "initial"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={`sticky-note bg-${testimonial.color} p-6 ${testimonial.rotation} relative interactive-card`}
              variants={stickyNoteVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                y: -5,
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Pin */}
              <motion.div 
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-destructive rounded-full shadow-sm"
                animate={{ 
                  scale: [1, 1.1, 1],
                  y: [-1, 1, -1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              
              
              <div className="pt-4">
                <motion.p 
                  className="font-handwritten text-lg text-foreground mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={testimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                >
                  "{testimonial.text}"
                </motion.p>
                
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={testimonialsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                >
                  <p className="text-sm font-medium text-muted-foreground">
                    – {testimonial.author}
                  </p>
                  <motion.div 
                    className="flex space-x-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={testimonialsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-yellow-500 text-sm"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1 + index * 0.1
                        }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Decorative corner elements */}
              <motion.div 
                className="absolute bottom-2 right-2 w-2 h-2 bg-foreground/20 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional floating decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 text-chalk-blue text-3xl font-handwritten rotate-12 opacity-20 hidden lg:block"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [12, 8, 12]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💭
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 text-chalk-green text-4xl font-handwritten -rotate-12 opacity-20 hidden lg:block"
          animate={{ 
            y: [10, -10, 10],
            rotate: [-12, -8, -12]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ✨
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;