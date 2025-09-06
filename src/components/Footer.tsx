import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { 
  staggerContainer, 
  staggerItem, 
  textRevealVariants 
} from "@/lib/animations";

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollReveal({ threshold: 0.1 });

  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MapPin, href: "#", label: "Location" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer 
      ref={footerRef}
      className="bg-chalk-board text-chalk-white py-16 px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={footerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 text-chalk-blue/20 text-3xl font-handwritten"
          animate={{ 
            y: [-5, 5, -5],
            rotate: [-3, 3, -3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📚
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-20 text-chalk-yellow/20 text-2xl font-handwritten"
          animate={{ 
            y: [5, -5, 5],
            rotate: [3, -3, 3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ✏️
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/4 text-chalk-pink/20 text-xl font-handwritten"
          animate={{ 
            y: [-3, 3, -3],
            rotate: [-2, 2, -2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          ☕
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="grid md:grid-cols-3 gap-12 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate={footerVisible ? "animate" : "initial"}
        >
          {/* Animated Brand Section */}
          <motion.div 
            className="space-y-6"
            variants={staggerItem}
          >
            <motion.h3 
              className="text-4xl font-handwritten text-chalk-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Pathshala
            </motion.h3>
            <motion.p 
              className="text-chalk-white/80 leading-relaxed"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              More than a café - it's your home away from home. Bringing back the best of campus life, one meal at a time.
            </motion.p>
            
            {/* Animated Social Links */}
            <motion.div 
              className="flex space-x-4"
              variants={staggerContainer}
              initial="initial"
              animate={footerVisible ? "animate" : "initial"}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    variants={staggerItem}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-chalk-white hover:bg-chalk-white/10 hover-glow"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          
          {/* Animated Quick Links */}
          <motion.div 
            className="space-y-6"
            variants={staggerItem}
          >
            <motion.h4 
              className="text-2xl font-handwritten text-chalk-white"
              whileHover={{ scale: 1.05 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-3 text-chalk-white/80"
              variants={staggerContainer}
              initial="initial"
              animate={footerVisible ? "animate" : "initial"}
            >
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.a 
                    href={link.href} 
                    className="doodle-underline hover:text-chalk-white transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Animated Newsletter */}
          <motion.div 
            className="space-y-6"
            variants={staggerItem}
          >
            <motion.h4 
              className="text-2xl font-handwritten text-chalk-white"
              whileHover={{ scale: 1.05 }}
            >
              Join the Class!
            </motion.h4>
            <motion.p 
              className="text-chalk-white/80"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Subscribe for updates, events, and special offers from Pathshala
            </motion.p>
            
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={footerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1"
              >
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-chalk-white/10 border-chalk-white/20 text-chalk-white placeholder:text-chalk-white/60 focus:border-chalk-white/40"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button variant="secondary" className="text-foreground hover-glow">
                  <Mail className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Animated Divider */}
        <motion.div 
          className="border-t border-chalk-white/20 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={footerVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            variants={staggerContainer}
            initial="initial"
            animate={footerVisible ? "animate" : "initial"}
          >
            <motion.p 
              className="text-chalk-white/60 text-sm"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              © 2025 Pathshala – Taste of Campus. All Rights Reserved.
            </motion.p>
            
            <motion.div 
              className="text-chalk-white/60 text-sm font-handwritten"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              animate={{ 
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Made with ❤️ in Goa
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Animated decorative chalkboard doodles */}
        <motion.div 
          className="absolute bottom-4 left-4 text-chalk-blue/30 text-2xl font-handwritten rotate-12 hidden lg:block"
          animate={{ 
            y: [-3, 3, -3],
            rotate: [12, 8, 12]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          📚
        </motion.div>
        <motion.div 
          className="absolute bottom-8 right-8 text-chalk-yellow/30 text-xl font-handwritten -rotate-6 hidden lg:block"
          animate={{ 
            y: [3, -3, 3],
            rotate: [-6, -4, -6]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          ✏️
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;