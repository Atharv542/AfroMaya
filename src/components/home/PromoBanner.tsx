import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const PromoBanner = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#1F242E] text-background">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:flex-1 text-center lg:text-left"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#D19F47] mb-4">
              Limited Time Offer
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-medium mb-4">
              Winter Sale
            </h2>
            <p className="text-lg lg:text-xl text-background/70 mb-6">
              Up to 50% off on selected items
            </p>
               <Link
              to="/shop"
              className="
                inline-flex items-center justify-center gap-2
                px-12 py-4
                bg-[#D19F47] text-white
                text-md font-medium tracking-wide
                rounded-sm
                transition-all duration-300
                hover:opacity-90
                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              "
            >
              Shop Sale
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:flex-1"
          >
            <div className="grid grid-cols-3 gap-4 lg:gap-6 text-center">
              <div>
                <span className="block font-display text-4xl lg:text-6xl font-medium text-[#D19F47]">
                  50%
                </span>
                <span className="text-xs lg:text-sm tracking-wider uppercase ">
                  Off
                </span>
              </div>
              <div>
                <span className="block font-display text-4xl lg:text-6xl font-medium text-[#D19F47]">
                  200+
                </span>
                <span className="text-xs lg:text-sm tracking-wider uppercase ">
                  Items
                </span>
              </div>
              <div>
                <span className="block font-display text-4xl lg:text-6xl font-medium text-[#D19F47]">
                  7
                </span>
                <span className="text-xs lg:text-sm tracking-wider uppercase">
                  Days Left
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
