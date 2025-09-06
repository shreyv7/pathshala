import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import cafeHero from "@/assets/cafe-hero.jpg";
import MenuPopup from "@/components/MenuPopup";
import { useState } from "react";
import { 
  heroVariants, 
  floatingVariants, 
  textRevealVariants, 
  buttonVariants,
  scrollIndicatorVariants 
} from "@/lib/animations";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cafeHero})`,
          filter: 'contrast(1.1) brightness(0.8)',
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Enhanced overlay with gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        {/* Additional subtle overlay for better text contrast */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </motion.div>
      
      
      {/* Hero Content with staggered animations */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        {/* Text backdrop for better readability */}
        <motion.div 
          className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl -m-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />
        
        <motion.h1 
          className="relative text-7xl md:text-8xl font-handwritten mb-6 leading-tight"
          variants={textRevealVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span 
            className="doodle-underline text-white drop-shadow-2xl"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,0,0.6)'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Pathshala
          </motion.span>
          <br />
          <motion.span 
            className="text-white"
            style={{ 
              WebkitTextStroke: '2px rgba(0,0,0,0.8)',
              textStroke: '2px rgba(0,0,0,0.8)',
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 15px rgba(255,182,193,0.6)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Taste of Campus
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="relative text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Relive your campus days over coffee, snacks, and conversations in the heart of Goa
        </motion.p>
        
        <motion.div 
          className="relative flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {/* Button backdrop */}
          <motion.div 
            className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl -m-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          />
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            <Button 
              variant="campus" 
              size="lg" 
              className="text-xl px-8 py-4 hover-glow bg-white/90 text-gray-900 border-2 border-white/50 shadow-2xl hover:bg-white hover:shadow-3xl transition-all duration-300"
              onClick={() => setIsMenuOpen(true)}
            >
              See Full Menu 📋
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            <Button 
              variant="doodle" 
              size="lg" 
              className="text-xl px-8 py-4 hover-glow bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-2 border-yellow-300/50 shadow-2xl hover:shadow-3xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reserve a Table ✨
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={scrollIndicatorVariants}
        animate="animate"
        initial="initial"
      >
        <motion.div 
          className="w-6 h-10 border-2 border-chalk-blue rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div 
            className="w-1 h-3 bg-chalk-blue rounded-full mt-2"
            animate={{ 
              opacity: [1, 0.3, 1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              color: ['#A6DCEF', '#FFD6E0', '#C2F2D0', '#FFF3B0'][Math.floor(Math.random() * 4)]
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            
          </motion.div>
        ))}
      </div>

      {/* MenuPopup */}
      <MenuPopup 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </section>
  );
};

export default Hero;