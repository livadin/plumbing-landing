import React from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuVariants: Variants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50 text-white py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
        <div className="flex items-center gap-2">
          <img src="logo.webp" alt="Plumbing Services" className="h-10 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Home', 'About Us', 'Services', 'Pricing'].map((item) => (
             <a key={item} href="#" className="hover:text-blue-300 transition">{item}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-400" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] text-gray-400">24/7 Emergency Call</span>
              <span className="font-bold">123-456-7890</span>
            </div>
          </div>
          <button className="glossy-btn px-6 py-2.5 rounded text-white font-bold text-sm uppercase tracking-wide transform hover:scale-105 transition-all cursor-pointer">
            Get a Quote
          </button>
        </div>

        <button 
          className="md:hidden text-white focus:outline-none w-8 h-8 flex items-center justify-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatePresence mode='popLayout'>
            {isMenuOpen ? (
              <motion.div 
                key="close" 
                initial={{ rotate: -90, opacity: 0 }} 
                animate={{ rotate: 0, opacity: 1 }} 
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-8 h-8" />
              </motion.div>
            ) : (
              <motion.div 
                key="menu" 
                initial={{ rotate: 90, opacity: 0 }} 
                animate={{ rotate: 0, opacity: 1 }} 
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-[#002B5B]/95 backdrop-blur-md border-t border-blue-400/30 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Home', 'About Us', 'Services', 'Pricing'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-lg font-medium text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-200 border-b border-white/5 pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              <div className="flex items-center gap-3 mt-2 text-blue-300 py-2">
                 <Phone className="w-5 h-5" />
                 <span className="font-bold text-lg">123-456-7890</span>
              </div>

              <button className="glossy-btn py-3 w-full rounded font-bold mt-2 shadow-lg">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};