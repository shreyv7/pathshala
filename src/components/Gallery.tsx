import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";
import screenshot4 from "@/assets/screenshot-4.png";
import screenshot5 from "@/assets/screenshot-5.png";
import screenshot6 from "@/assets/screenshot-6.png";
import screenshot7 from "@/assets/screenshot-7.png";
import screenshot8 from "@/assets/screenshot-8.png";
import screenshot9 from "@/assets/screenshot-9.png";
import { 
  staggerContainer, 
  staggerItem, 
  textRevealVariants, 
  imageVariants 
} from "@/lib/animations";

const galleryImages = [
  {
    src: screenshot1,
    alt: "Campus vibes screenshot 1",
    title: "Campus Moment 1",
    emoji: "📸"
  },
  {
    src: screenshot2,
    alt: "Campus vibes screenshot 2",
    title: "Campus Moment 2",
    emoji: "📸"
  },
  {
    src: screenshot3,
    alt: "Campus vibes screenshot 3",
    title: "Campus Moment 3",
    emoji: "📸"
  },
  {
    src: screenshot4,
    alt: "Campus vibes screenshot 4",
    title: "Campus Moment 4",
    emoji: "📸"
  },
  {
    src: screenshot5,
    alt: "Campus vibes screenshot 5",
    title: "Campus Moment 5",
    emoji: "📸"
  },
  {
    src: screenshot6,
    alt: "Campus vibes screenshot 6",
    title: "Campus Moment 6",
    emoji: "📸"
  },
  {
    src: screenshot7,
    alt: "Campus vibes screenshot 7",
    title: "Campus Moment 7",
    emoji: "📸"
  },
  {
    src: screenshot8,
    alt: "Campus vibes screenshot 8",
    title: "Campus Moment 8",
    emoji: "📸"
  },
  {
    src: screenshot9,
    alt: "Campus vibes screenshot 9",
    title: "Campus Moment 9",
    emoji: "📸"
  }
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollReveal({ threshold: 0.1 });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

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
        
        {/* Horizontal Gallery Slider */}
        <motion.div 
          ref={galleryRef}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={galleryVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-chalk-blue/20 rounded-full p-3 shadow-lg hover:bg-chalk-blue/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 text-chalk-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-chalk-blue/20 rounded-full p-3 shadow-lg hover:bg-chalk-blue/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 text-chalk-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-16 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                className="group relative flex-shrink-0 w-80 overflow-hidden rounded-2xl chalk-glow bg-background p-4 interactive-card"
                initial={{ opacity: 0, x: 50 }}
                animate={galleryVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotate: 2
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
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
          </div>
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