import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import cafeHero from "@/assets/cafe-hero.jpg";
import doodleWall from "@/assets/doodle-wall.jpg";
import foodSpread from "@/assets/food-spread.jpg";
import friendsCafe from "@/assets/friends-cafe.jpg";
import { 
  staggerContainer, 
  staggerItem, 
  textRevealVariants, 
  imageVariants 
} from "@/lib/animations";

const galleryImages = [
  {
    src: cafeHero,
    alt: "Cozy café interior with doodle walls and students",
    title: "Our Cozy Interior",
    emoji: "🏠"
  },
  {
    src: doodleWall,
    alt: "Colorful student doodles on café walls",
    title: "Doodle Wall Art",
    emoji: "🎨"
  },
  {
    src: foodSpread,
    alt: "Delicious café food and coffee spread",
    title: "Fresh Food Daily",
    emoji: "🍽️"
  },
  {
    src: friendsCafe,
    alt: "Friends enjoying coffee and laughter",
    title: "Making Memories",
    emoji: "😊"
  }
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-chalk relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 text-chalk-pink text-4xl font-handwritten opacity-10"
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
          📸
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-20 text-chalk-green text-3xl font-handwritten opacity-10"
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
          🎭
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/4 text-chalk-blue text-2xl font-handwritten opacity-10"
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
          ✨
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
              Campus Vibes in Pictures
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Step into our world of nostalgia, good food, and great company
          </motion.p>
        </motion.div>
        
        {/* Animated Gallery Grid */}
        <motion.div 
          ref={galleryRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={galleryVisible ? "animate" : "initial"}
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-2xl chalk-glow bg-background p-4 interactive-card"
              variants={staggerItem}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotate: 2
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <motion.img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  variants={imageVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-foreground/80 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-center text-background p-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 20, 
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h4 
                      className="font-handwritten text-xl mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {image.title}
                    </motion.h4>
                    <motion.div 
                      className="w-12 h-0.5 bg-chalk-blue mx-auto"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredIndex === index ? 48 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              
              {/* Animated Decorative Elements */}
              <motion.div 
                className={`absolute -top-2 -right-2 w-6 h-6 bg-chalk-${index % 2 === 0 ? 'yellow' : 'pink'} rounded-full opacity-80`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
              <motion.div 
                className={`absolute -bottom-2 -left-2 w-4 h-4 bg-chalk-${index % 2 === 0 ? 'green' : 'blue'} rounded-full opacity-60`}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.4
                }}
              />

              {/* Corner accent */}
              <motion.div 
                className="absolute top-2 left-2 w-2 h-2 bg-foreground/30 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/4 left-10 text-chalk-pink text-4xl font-handwritten rotate-12 opacity-20 hidden lg:block"
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
          📸
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-10 text-chalk-green text-3xl font-handwritten -rotate-12 opacity-20 hidden lg:block"
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
          🎭
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;