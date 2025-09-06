import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Coffee, Utensils, IceCream, Droplets, Zap } from "lucide-react";

interface MenuPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuPopup = ({ isOpen, onClose }: MenuPopupProps) => {
  const menuSections = [
    {
      id: "appetizers",
      title: "APPETIZER",
      icon: <Utensils className="w-5 h-5" />,
      categories: [
        {
          name: "NON-VEG",
          items: [
            { name: "CRISPY WINGS MASALA", price: "260" },
            { name: "FISH FINGER", price: "260" },
            { name: "CHICKEN QUESADILLA", price: "240" },
            { name: "CHICKEN BASKET [2PC/4PC]", price: "210/380" },
            { name: "CHILLI CHICKEN [DRY/GRAVY]", price: "210" },
            { name: "CLASSIC CHICKEN MANCHURIAN [DRY/GRAVY]", price: "180" },
            { name: "HOT AND SPICY CHICKEN LOLLYPOP", price: "230" },
            { name: "SALT AND PEPPER [CHICKEN/PRAWNS]", price: "210/280" },
            { name: "GRILL CHICKEN", price: "310" },
            { name: "SIGNATURE CHILLI FISH [DRY/GRAVY]", price: "310" },
            { name: "GRILL FISH", price: "410" },
            { name: "CHILLI PRAWNS", price: "350" },
            { name: "LEMON BUTTER PRAWNS", price: "450" }
          ]
        },
        {
          name: "VEG",
          items: [
            { name: "CRISPY AMERICAN CORN", price: "180" },
            { name: "SIGNATURE HONEY CHILLI POTATO", price: "220" },
            { name: "CHILLI PANEER [DRY/GRAVY]", price: "180" },
            { name: "CLASSIC VEG MANCHURIAN [DRY/GRAVY]", price: "170" },
            { name: "SALT AND PEPPER VEGETABLE", price: "180" },
            { name: "MIX VEG QUESADILLA", price: "220" },
            { name: "MUSHROOM SPRING ROLL", price: "160" },
            { name: "GRILL PANEER STEAK", price: "260" },
            { name: "CHILLI MUSHROOM", price: "210" }
          ]
        }
      ]
    },
    {
      id: "quick-bites",
      title: "QUICK FRIED BITES",
      icon: <Zap className="w-5 h-5" />,
      categories: [
        {
          name: "FRIED BITES",
          items: [
            { name: "SALTED FRENCH FRIES", price: "80" },
            { name: "PERI PERI MASALA FRIES", price: "95" },
            { name: "OVERLOADED FRIES", price: "110" },
            { name: "KAMI-KAZE STYLE", price: "140" },
            { name: "CHEESE GARLIC BREAD", price: "130" },
            { name: "CHILLI CHEESE TOAST", price: "145" }
          ]
        }
      ]
    },
    {
      id: "sandwiches",
      title: "SANDWICH",
      icon: <Utensils className="w-5 h-5" />,
      categories: [
        {
          name: "REGULAR BREAD",
          items: [
            { name: "GRILL SANDWICH [VEG/CHICKEN]", price: "90/110" },
            { name: "TIKKA SANDWICH [VEG/CHICKEN]", price: "100/120" },
            { name: "CLUB SANDWICH [VEG/CHICKEN]", price: "120/145" }
          ]
        },
        {
          name: "BROWN BREAD",
          items: [
            { name: "GRILL SANDWICH [VEG/CHICKEN]", price: "110/130" },
            { name: "TIKKA SANDWICH [VEG/CHICKEN]", price: "120/140" },
            { name: "CLUB SANDWICH [VEG/CHICKEN]", price: "140/165" }
          ]
        }
      ]
    },
    {
      id: "burgers",
      title: "BURGER",
      icon: <Utensils className="w-5 h-5" />,
      categories: [
        {
          name: "BURGERS",
          items: [
            { name: "CRISPY TIKKI BURGER [VEG/CHICKEN]", price: "90/130" },
            { name: "SPICY PERI PERI BURGER [VEG/CHICKEN]", price: "100/130" },
            { name: "MEXICAN BURGER [VEG/CHICKEN]", price: "90/135" },
            { name: "CRISPY FRIED CHICKEN BURGER", price: "145" },
            { name: "EXPLOSION BURGER [VEG/CHICKEN]", price: "150/195" }
          ]
        }
      ]
    },
    {
      id: "maggi-pizza-pasta",
      title: "MAGGI & PIZZA & PASTA",
      icon: <Utensils className="w-5 h-5" />,
      categories: [
        {
          name: "MAGGI",
          items: [
            { name: "MASALA MAGGI", price: "100" },
            { name: "MIX VEG MAGGI", price: "110" },
            { name: "CHILLI PANEER MAGGI", price: "130" },
            { name: "CHICKEN MAGGI", price: "150" }
          ]
        },
        {
          name: "FRESHLY MADE PIZZA",
          items: [
            { name: "CHHOTU ONION CAPSICUM PIZZA", price: "110" },
            { name: "REG-CHEESE MARGHERITA PIZZA", price: "190" },
            { name: "GARDEN VEGGIES PIZZA", price: "240" },
            { name: "PANEER TIKKA PIZZA", price: "240" },
            { name: "CHICKEN TIKKA PIZZA", price: "265" },
            { name: "KADHAI PANEER PIZZA", price: "250" },
            { name: "PERI PERI PIZZA (VEG/CHICKEN)", price: "275/290" },
            { name: "MEAT LOVER PIZZA", price: "300" },
            { name: "CHEESE BURST PIZZA (VEG/CHICKEN)", price: "260/290" }
          ]
        },
        {
          name: "PASTA",
          items: [
            { name: "CREAMY ALFREDO (WHITE SAUCE)", price: "130" },
            { name: "PASTA POMODORO (TOMATO SAUCE)", price: "150" },
            { name: "PINK SAUCE PASTA (MIXED SAUCE)", price: "160" },
            { name: "ADD ON- GRILL CHICKEN, FISH, PRAWNS", price: "45" }
          ]
        }
      ]
    },
    {
      id: "main-course",
      title: "MAIN COURSE",
      icon: <Utensils className="w-5 h-5" />,
      categories: [
        {
          name: "ASIAN CART",
          items: [
            { name: "FRIED RICE (VEG/CHICKEN)", price: "160/180" },
            { name: "HAKKA NOODLES (VEG/CHICKEN)", price: "180/220" },
            { name: "CHILLI GARLIC FRIED RICE (VEG/CHICKEN)", price: "180/230" },
            { name: "CHILLI GARLIC NOODLES (VEG/CHICKEN)", price: "180/230" }
          ]
        },
        {
          name: "INDIAN CART",
          items: [
            { name: "DAL MAKHANI WITH MALABAR PARATHA", price: "220" },
            { name: "PANEER MAKHANI BOWL", price: "250" },
            { name: "SPL. CHICKEN KASSA", price: "280" },
            { name: "SPL. MUTTON COMBO", price: "360" },
            { name: "CHICKEN BIRYANI", price: "195" },
            { name: "MUTTON BIRYANI", price: "280" }
          ]
        }
      ]
    },
    {
      id: "sizzlers",
      title: "SIZZLERS",
      icon: <Utensils className="w-5 h-5" />,
      categories: [
        {
          name: "ASIAN NON-VEG SIZZLER COMBO",
          items: [
            { 
              name: "CHILLI CHICKEN, FRIED RICE OR HAKKA NOODLES SIZZLER", 
              price: "365",
              description: "Chilli Chicken, Egg Fried Rice, Chicken Masala Momos, Egg Hakka Noodles on Sizzler with Hot Garlic Sauce"
            },
            { 
              name: "CHICKEN HUNAN, HOT GARLIC NOODLES OR FRIED RICE SIZZLER", 
              price: "375",
              description: "Hunan Chicken, Chicken Hot Garlic Noodles, Chicken Masala Momos, Egg Fried Rice Sizzler with Shezwan Gravy"
            }
          ]
        },
        {
          name: "ASIAN VEG SIZZLER COMBO",
          items: [
            { 
              name: "CHILLI PANEER, FRIED RICE, HAKKA NOODLES SIZZLER", 
              price: "330",
              description: "Chilli Paneer, Fried Rice, Masala Momos, Hakka Noodles on a Sizzler with Hot Garlic Sauce"
            },
            { 
              name: "PANEER, MOMOS AND NOODLES OR FRIED RICE SIZZLER", 
              price: "340",
              description: "Hunan Paneer, Hakka Noodles, Masala Momos, Fried Rice on Sizzler with Shezwan"
            }
          ]
        }
      ]
    },
    {
      id: "desserts",
      title: "DESSERT",
      icon: <IceCream className="w-5 h-5" />,
      categories: [
        {
          name: "DESSERTS",
          items: [
            { name: "VANILLA ICE CREAM (TWO SCOOP)", price: "120" },
            { name: "SIZZLING CHOCOLATE BROWNIE WITH ICE CREAM", price: "230" },
            { name: "GLASS OF BROWNIE SUNDAE", price: "210" },
            { name: "ICE CREAM SANDWICH", price: "140" },
            { name: "DEATH BY CHOCOLATE", price: "280" }
          ]
        }
      ]
    },
    {
      id: "beverages",
      title: "BEVERAGES",
      icon: <Coffee className="w-5 h-5" />,
      categories: [
        {
          name: "MIND RELAXER TEA",
          items: [
            { name: "PLAIN CHAI", price: "30" },
            { name: "MASALA CUTTING CHAI", price: "40" },
            { name: "CHOCOLATE TEA", price: "40" },
            { name: "JAGGERY TEA", price: "50" },
            { name: "BLACK TEA", price: "50" },
            { name: "LEMON TEA", price: "50" },
            { name: "GREEN TEA", price: "50" },
            { name: "BUN MASKA WITH CUTTING", price: "90" }
          ]
        },
        {
          name: "ICE TEA",
          items: [
            { name: "WATERMELON ICED TEA", price: "80" },
            { name: "STRAWBERRY ICED TEA", price: "80" },
            { name: "PEACH ICED TEA", price: "80" }
          ]
        },
        {
          name: "BREWED FRESH COFFEE",
          items: [
            { name: "CAPPUCCINO", price: "80" },
            { name: "CAFÉ LATTE", price: "90" },
            { name: "MOCHA", price: "90" },
            { name: "HAZELNUT", price: "120" },
            { name: "IRISH LATTE", price: "120" },
            { name: "IRISH COFFEE", price: "120" },
            { name: "ESPRESSO SHOT", price: "60" }
          ]
        },
        {
          name: "FRAPPE AND CHOCOLATES",
          items: [
            { name: "COLD COFFEE", price: "120" },
            { name: "IRISH FRAPPE", price: "130" },
            { name: "HAZELNUT FRAPPE", price: "145" },
            { name: "CHOCO FRAPPE", price: "145" },
            { name: "ULTRA-HOT CHOCOLATE", price: "150" },
            { name: "COLD CHOCOLATE", price: "150" }
          ]
        }
      ]
    },
    {
      id: "shakes",
      title: "SHAKES & BRAIN FREEZER",
      icon: <Droplets className="w-5 h-5" />,
      categories: [
        {
          name: "SHAKES",
          items: [
            { name: "HEALTHY PROTEIN SHAKE", price: "220" },
            { name: "MANGO BERRY CREAM SHAKE", price: "230" },
            { name: "KITKAT FREAK SHAKE", price: "240" },
            { name: "OREO FREAK SHAKE", price: "230" },
            { name: "RED VELVET SHAKE", price: "290" },
            { name: "FERRERO ROCHER SHAKE", price: "310" }
          ]
        },
        {
          name: "BRAIN FREEZER",
          items: [
            { name: "FRESH LIME SODA", price: "80" },
            { name: "BLUE LAGOON", price: "80" },
            { name: "SPICY LEMON SODA", price: "80" },
            { name: "CLASSIC MINT MOJITO", price: "90" },
            { name: "KALA KHATTA CUCUMBER MINT MOJITO", price: "110" },
            { name: "ICE BLAST", price: "110" },
            { name: "ORANGE MINT MASALA", price: "120" },
            { name: "SPL. FRUIT PUNCH", price: "140" },
            { name: "SOFT DRINKS", price: "MRP" },
            { name: "WATER BOTTLE", price: "MRP" },
            { name: "ENERGY DRINKS", price: "MRP" }
          ]
        }
      ]
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200 shadow-2xl">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-4xl font-handwritten text-amber-800 mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-5xl">🍽️</span>
              <span className="doodle-underline">PATHSHALA</span>
              <span className="text-5xl">☕</span>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl text-amber-600 mt-2"
            >
              Taste of Campus
            </motion.div>
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[70vh] pr-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-8"
          >
            {menuSections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + sectionIndex * 0.1, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-amber-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-handwritten text-amber-800 font-bold">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.categories.map((category, categoryIndex) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + sectionIndex * 0.1 + categoryIndex * 0.05 }}
                      className="space-y-3"
                    >
                      <h3 className="text-lg font-semibold text-teal-600 border-b-2 border-teal-200 pb-1">
                        {category.name}
                      </h3>
                      <div className="grid gap-2">
                        {category.items.map((item, itemIndex) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + sectionIndex * 0.1 + categoryIndex * 0.05 + itemIndex * 0.02 }}
                            className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-amber-50 transition-colors"
                          >
                            <div className="flex-1">
                              <span className="text-gray-800 font-medium">
                                {item.name}
                              </span>
                              {item.description && (
                                <p className="text-sm text-gray-600 mt-1 italic">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <span className="text-amber-700 font-bold text-lg ml-4">
                              ₹{item.price}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-6"
        >
          <Button
            onClick={onClose}
            variant="campus"
            size="lg"
            className="px-8 py-3 text-lg font-handwritten"
          >
            Close Menu ✨
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuPopup;
