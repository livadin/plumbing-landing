import { motion, type Variants } from 'framer-motion';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export const Services = () => {
  return (
    <section className="relative z-30 w-full bg-[#000810]">
      <div className="w-full h-[2px] bg-gradient-to-r from-[#001529] via-[#3b82f6] to-[#001529] shadow-[0_0_10px_#3b82f6]"></div>
      
      <div className="
        w-full 
        bg-gradient-to-b from-[#021024] to-[#000000] 
        text-white
        py-6
      ">
        <div className="max-w-[1600px] mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10"
          >
            <ServiceItem imgSrc="emergency_repairs.webp" title="Emergency Repairs" />
            <ServiceItem imgSrc="drain_cleaning.webp" title="Drain Cleaning" />
            <ServiceItem imgSrc="water_heaters.webp" title="Water Heaters" />
            <ServiceItem imgSrc="leak_detection.webp" title="Leak Detection & More" />
          </motion.div>
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-white/5"></div>
    </section>
  );
};

const ServiceItem = ({ imgSrc, title }: { imgSrc: string, title: string }) => (
  <motion.div 
    variants={itemVariant}
    className="
      group relative 
      flex flex-col items-center justify-center 
      py-4 px-2
      cursor-pointer 
      hover:bg-white/5 
      transition-all duration-300
    "
  >
    <div className="h-14 md:h-16 mb-3 flex items-end justify-center transition-transform duration-300 group-hover:-translate-y-1">
       <img 
         src={imgSrc} 
         alt={title}
         className="h-full w-auto object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" 
       />
    </div>

    <h3 className="text-gray-200 font-bold text-sm md:text-lg text-center leading-tight drop-shadow-md group-hover:text-white transition-colors">
      {title}
    </h3>
    
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </motion.div>
);