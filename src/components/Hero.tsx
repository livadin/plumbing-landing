import { motion, type Variants } from 'framer-motion';
import ServiceButton from './buttons/ServiceButton';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const Hero = () => {
  const handleRequest = () => {
    console.log("Відкрито форму заявки!");
  };

  return (
    <header className="relative w-full flex-1 overflow-hidden bg-navy-dark">
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-hero-gradient opacity-90 z-10"></div>
         <img 
            src="background.webp" 
            alt="water bg" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen z-0" 
         />
         <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#000810] via-[#000810]/80 to-transparent z-10"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full relative z-20 flex items-center pt-10 md:pt-0">
        
        <div className="grid md:grid-cols-2 gap-4 w-full items-center h-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left relative z-30"
          >
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-4 text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
            >
              Reliable Plumbing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-100 to-blue-500 filter drop-shadow-lg">
                Services
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp} 
              className="text-lg md:text-2xl text-blue-100 mb-12 font-light tracking-wide drop-shadow-md opacity-90"
            >
              Your Trusted Local Plumber
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex justify-center md:justify-start">
                <ServiceButton 
                    phoneNumber="123-456-7890" 
                    onRequestClick={handleRequest} 
                />
            </motion.div>
          </motion.div>
          <div className="hidden md:block relative h-full overflow-visible pointer-events-none">
             <motion.img 
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.3 }}
               src="plumber-cutout.webp" 
               alt="Plumber" 
               className="absolute bottom-0 right-[-5%] w-auto h-[90%] object-contain z-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
             />
          </div>
        </div>
      </div>
    </header>
  );
};