import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Clock, Calendar, Users, Plus, Minus } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guestCount, setGuestCount] = useState(1);

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
    "10:00 PM", "10:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the reservation data to your backend
    console.log({ selectedDate, selectedTime, guestCount });
    alert(`Reservation confirmed for ${guestCount} people on ${selectedDate} at ${selectedTime}`);
    onClose();
  };

  const incrementGuests = () => {
    if (guestCount < 15) setGuestCount(guestCount + 1);
  };

  const decrementGuests = () => {
    if (guestCount > 1) setGuestCount(guestCount - 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-background rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto chalk-glow relative"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(198, 65, 84, 0.2)"
            }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.h2 
                className="text-3xl font-handwritten text-foreground mb-2"
                whileHover={{ scale: 1.05 }}
              >
                Reserve Your Table
              </motion.h2>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Book your spot at Pathshala! ✨
              </motion.p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-chalk-blue" />
                  Select Date
                </label>
                <motion.input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 border border-muted rounded-lg bg-background text-foreground focus:ring-2 focus:ring-chalk-blue focus:border-transparent transition-all"
                  min={new Date().toISOString().split('T')[0]}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Time Selection */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-chalk-pink" />
                  Select Time
                </label>
                <motion.select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-3 border border-muted rounded-lg bg-background text-foreground focus:ring-2 focus:ring-chalk-pink focus:border-transparent transition-all"
                  required
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Choose a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </motion.select>
              </motion.div>

              {/* Guest Count */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-chalk-green" />
                  Number of Guests
                </label>
                <motion.div 
                  className="flex items-center justify-between p-3 border border-muted rounded-lg bg-background"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.button
                    type="button"
                    onClick={decrementGuests}
                    disabled={guestCount <= 1}
                    className="p-2 rounded-full bg-chalk-yellow text-foreground hover:bg-chalk-yellow/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.span 
                    className="text-2xl font-handwritten text-foreground min-w-[3rem] text-center"
                    key={guestCount}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {guestCount}
                  </motion.span>
                  
                  <motion.button
                    type="button"
                    onClick={incrementGuests}
                    disabled={guestCount >= 15}
                    className="p-2 rounded-full bg-chalk-blue text-foreground hover:bg-chalk-blue/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </motion.div>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  Maximum 15 guests per reservation
                </p>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-chalk-blue to-chalk-pink text-foreground font-handwritten text-lg py-3 hover:shadow-lg transition-all"
                    disabled={!selectedDate || !selectedTime}
                  >
                    Confirm Reservation 🎉
                  </Button>
                </motion.div>
              </motion.div>
            </form>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-2 -right-2 text-chalk-yellow text-2xl opacity-30"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              📝
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -left-2 text-chalk-pink text-xl opacity-30"
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              ☕
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
