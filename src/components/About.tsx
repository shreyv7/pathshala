import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import doodleWall from "@/assets/doodle-wall.jpg";
import { 
  staggerContainer, 
  staggerItem, 
  textRevealVariants, 
  cardHoverVariants,
  imageVariants 
} from "@/lib/animations";

const About = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 px-6 bg-gradient-chalk relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 text-chalk-blue text-4xl font-handwritten opacity-10"
          animate={{ 
            y: [-5, 5, -5],
            rotate: [-2, 2, -2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✏️
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-20 text-chalk-pink text-3xl font-handwritten opacity-10"
          animate={{ 
            y: [5, -5, 5],
            rotate: [2, -2, 2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          📚
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/4 text-chalk-green text-2xl font-handwritten opacity-10"
          animate={{ 
            y: [-3, 3, -3],
            rotate: [-1, 1, -1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🎨
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate={textVisible ? "animate" : "initial"}
        >
          {/* Text Content with scroll reveal */}
          <motion.div 
            ref={textRef}
            className="space-y-8"
            variants={staggerItem}
          >
            <motion.h2 
              className="text-5xl font-handwritten text-foreground"
              variants={textRevealVariants}
            >
              <motion.span 
                className="doodle-underline text-shimmer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Our Story
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-lg leading-relaxed text-muted-foreground"
              variants={staggerContainer}
            >
              <motion.p 
                variants={staggerItem}
                className="scroll-reveal"
                style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(30px)' }}
                transition={{ delay: 0.2 }}
              >
                <strong className="text-foreground text-gradient">Pathshala</strong> is more than a café – it's a throwback to the carefree days of campus life. With doodled walls, chalkboard corners, and playful energy, we bring back the nostalgia of classrooms, friends, and food breaks.
              </motion.p>
              
              <motion.p 
                variants={staggerItem}
                className="scroll-reveal"
                style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(30px)' }}
                transition={{ delay: 0.4 }}
              >
                Located in the heart of Goa, we're here to serve comfort food with a side of memories. Whether you're cramming for exams, catching up with friends, or just need a cozy corner to work, Pathshala feels like home.
              </motion.p>
              
              <motion.div 
                className="bg-chalk-yellow p-6 rounded-lg border-l-4 border-chalk-blue sticky-note hover-lift"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  rotate: 1,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="font-handwritten text-xl text-foreground"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  "Every wall tells a story, every meal sparks a memory" ✏️
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Animated Image */}
          <motion.div 
            ref={imageRef}
            className="relative chalk-glow"
            variants={imageVariants}
            initial="initial"
            animate={imageVisible ? "animate" : "initial"}
            whileHover="hover"
          >
            <motion.img 
              src={doodleWall} 
              alt="Colorful doodle-covered café wall with student drawings and chalk art"
              className="rounded-2xl shadow-doodle w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-chalk-pink p-3 rounded-full shadow-sticky rotate-12"
              animate={{ 
                y: [-5, 5, -5],
                rotate: [12, 8, 12]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.2, rotate: 0 }}
            >
              <span className="text-2xl">🎨</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-chalk-green p-3 rounded-full shadow-sticky -rotate-12"
              animate={{ 
                y: [5, -5, 5],
                rotate: [-12, -8, -12]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{ scale: 1.2, rotate: 0 }}
            >
              <span className="text-2xl">📝</span>
            </motion.div>

            {/* Additional floating elements */}
            <motion.div 
              className="absolute top-1/2 -left-2 bg-chalk-blue p-2 rounded-full shadow-sticky"
              animate={{ 
                x: [-2, 2, -2],
                y: [-2, 2, -2]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <span className="text-lg">☕</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-1/3 -right-2 bg-chalk-yellow p-2 rounded-full shadow-sticky"
              animate={{ 
                x: [2, -2, 2],
                y: [2, -2, 2]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <span className="text-lg">📚</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;