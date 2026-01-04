import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-10" />
        <img
          src={heroImage}
          alt="Fashion hero"
          className="w-full h-full object-cover md:mt-15  object-center"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs lg:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 lg:mb-6"
          >
            Winter Collection 2024
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight mb-6 lg:mb-8"
          >
            Embrace
            <br />
            <span className="italic">Timeless</span>
            <br />
            Elegance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base lg:text-lg text-muted-foreground mb-8 lg:mb-10 max-w-md"
          >
            Discover our curated collection of premium fashion pieces designed for the modern individual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/shop"
              className="
                inline-flex items-center justify-center gap-2
                px-8 py-4
                bg-primary text-primary-foreground
                text-sm font-medium tracking-wide
                rounded-lg
                transition-all duration-300
                hover:opacity-90
                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              "
            >
              Shop Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/new-arrivals"
              className="
               inline-flex items-center justify-center 
                px-8 py-4
                bg-secondary
                border-2 border-black/30
                text-sm font-medium tracking-wide
                rounded-lg
                
                transition-all duration-300
                hover:bg-primary hover:text-primary-foreground
                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              "
            >
              New Arrivals
            
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
};
