import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { 
  staggerContainer, 
  staggerItem, 
  textRevealVariants, 
  cardHoverVariants 
} from "@/lib/animations";
import ReservationModal from "./ReservationModal";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal({ threshold: 0.2 });
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "123 Campus Street, Panaji\nGoa 403001, India",
      color: "chalk-blue",
      emoji: "📍"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      color: "chalk-yellow",
      emoji: "📞"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: "Monday - Sunday\n10:00 AM - 11:00 PM",
      color: "chalk-pink",
      emoji: "🕒"
    }
  ];

  return (
    <section id="contact" className="pt-20 pb-12 px-6 bg-gradient-chalk relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          animate={contactVisible ? "animate" : "initial"}
        >
          {/* Animated Contact Info */}
          <motion.div 
            ref={contactRef}
            className="space-y-8"
            variants={staggerItem}
          >
            <motion.div
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
                  Find Us
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Come visit us and experience the campus nostalgia firsthand!
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              animate={contactVisible ? "animate" : "initial"}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div 
                    key={info.title}
                    className={`flex items-start space-x-4 p-4 bg-${info.color} rounded-lg chalk-glow interactive-card`}
                    variants={staggerItem}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-background rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-foreground" />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="font-handwritten text-xl text-foreground mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        {info.title}
                      </motion.h4>
                      <motion.p 
                        className="text-foreground whitespace-pre-line"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {info.content}
                      </motion.p>
                    </div>
                    
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* Animated WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button 
                  variant="doodle" 
                  size="lg" 
                  className="w-full text-xl hover-glow"
                  onClick={() => window.open('https://wa.me/917507111606', '_blank')}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message Us on WhatsApp 📱
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Animated Map Placeholder */}
          <motion.div 
            className="relative"
            variants={staggerItem}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="bg-muted rounded-2xl h-96 lg:h-full chalk-glow relative overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(128, 128, 128, 0.5), 0 0 40px rgba(128, 128, 128, 0.5), 0 0 60px rgba(128, 128, 128, 0.5)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={contactVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.895810684427!2d73.9529453753808!3d15.273476685296568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3ee3a5f3d35%3A0x347bc1b70f5a807e!2sPathsala%20Caf%C3%A9%20Goa!5e0!3m2!1sen!2sin!4v1757147106803!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
              
              {/* Animated decorative map doodles */}
              <motion.div 
                className="absolute top-4 left-4 text-chalk-blue text-2xl font-handwritten rotate-12 opacity-30"
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
                📍
              </motion.div>
              <motion.div 
                className="absolute bottom-4 right-4 text-chalk-green text-2xl font-handwritten -rotate-12 opacity-30"
                animate={{ 
                  y: [3, -3, 3],
                  rotate: [-12, -8, -12]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                🏫
              </motion.div>
              <motion.div 
                className="absolute top-1/3 right-8 text-chalk-pink text-xl font-handwritten rotate-6 opacity-30"
                animate={{ 
                  y: [-2, 2, -2],
                  rotate: [6, 4, 6]
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
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Animated Reserve Table Section */}
        <motion.div 
          ref={ctaRef}
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div 
            className="bg-background p-8 rounded-2xl chalk-glow max-w-2xl mx-auto interactive-card"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="font-handwritten text-3xl text-foreground mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Ready for Some Campus Nostalgia?
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Reserve your table or just drop by - we're always excited to welcome new friends to the Pathshala family!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="initial"
              animate={ctaVisible ? "animate" : "initial"}
            >
              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button 
                  variant="campus" 
                  size="lg" 
                  className="hover-glow"
                  onClick={() => setIsReservationModalOpen(true)}
                >
                  Reserve a Table
                </Button>
              </motion.div>
              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button 
                  variant="chalk" 
                  size="lg" 
                  className="hover-glow"
                  onClick={() => window.open('https://www.zomato.com/goa/pathsala-taste-of-campus-margao', '_blank')}
                >
                  Order Online
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Reservation Modal */}
      <ReservationModal 
        isOpen={isReservationModalOpen} 
        onClose={() => setIsReservationModalOpen(false)} 
      />
    </section>
  );
};

export default Contact;