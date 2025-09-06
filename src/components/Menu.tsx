import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coffee, Sandwich, UtensilsCrossed, Cake } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import MenuPopup from "@/components/MenuPopup";
import { 
  staggerContainer, 
  staggerItem, 
  textRevealVariants, 
  cardHoverVariants,
  menuItemVariants 
} from "@/lib/animations";

const menuCategories = [
  {
    name: "Beverages",
    icon: Coffee,
    color: "chalk-blue",
    items: ["Artisan Coffee", "Masala Chai", "Fresh Juices", "Milkshakes"],
    description: "From strong espresso to creamy shakes",
    emoji: "☕"
  },
  {
    name: "Snacks",
    icon: Sandwich,
    color: "chalk-yellow", 
    items: ["Gourmet Burgers", "Club Sandwiches", "Crispy Fries", "Loaded Nachos"],
    description: "Quick bites for busy students",
    emoji: "🍔"
  },
  {
    name: "Meals",
    icon: UtensilsCrossed,
    color: "chalk-pink",
    items: ["Rice Bowls", "Pasta Specials", "Thali Combos", "Salad Bowls"],
    description: "Hearty meals that fuel your day",
    emoji: "🍽️"
  },
  {
    name: "Desserts",
    icon: Cake,
    color: "chalk-green",
    items: ["Fresh Waffles", "Homemade Cakes", "Ice Cream Sundae", "Brownies"],
    description: "Sweet endings to perfect meals",
    emoji: "🍰"
  }
];

const Menu = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollReveal({ threshold: 0.1 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="menu" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 text-chalk-blue text-3xl font-handwritten opacity-5"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [-5, 5, -5]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🍽️
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-10 text-chalk-pink text-4xl font-handwritten opacity-5"
          animate={{ 
            y: [10, -10, 10],
            rotate: [5, -5, 5]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ☕
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/3 text-chalk-green text-2xl font-handwritten opacity-5"
          animate={{ 
            y: [-5, 5, -5],
            rotate: [-3, 3, -3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🍰
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
              Our Menu
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Delicious comfort food crafted with love, just like the campus canteen but better!
          </motion.p>
        </motion.div>
        
        {/* Animated Menu Categories */}
        <motion.div 
          ref={categoriesRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate={categoriesVisible ? "animate" : "initial"}
        >
          {menuCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={category.name}
                className={`bg-${category.color} p-8 rounded-2xl chalk-glow sticky-note interactive-card`}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >

                <div className="text-center mb-6">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-4 shadow-sticky"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-foreground" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-handwritten text-foreground mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {category.description}
                  </motion.p>
                </div>
                
                <motion.ul 
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate={categoriesVisible ? "animate" : "initial"}
                >
                  {category.items.map((item, itemIndex) => (
                    <motion.li 
                      key={item} 
                      className="text-foreground font-medium flex items-center hover-lift"
                      variants={staggerItem}
                      whileHover={{ x: 5 }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-foreground rounded-full mr-3"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: itemIndex * 0.2
                        }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Decorative corner elements */}
                <motion.div 
                  className="absolute bottom-2 right-2 w-3 h-3 bg-foreground/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Animated CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={categoriesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button 
              variant="campus" 
              size="lg" 
              className="text-xl px-8 py-4 hover-glow"
              onClick={() => setIsMenuOpen(true)}
            >
              See Full Menu →
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* MenuPopup */}
      <MenuPopup 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </section>
  );
};

export default Menu;