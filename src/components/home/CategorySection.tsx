import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import categoryWomen from '@/assets/category-women.jpg';
import categoryMen from '@/assets/category-men.jpg';
import categoryAccessories from '@/assets/category-accessories.jpg';
import categoryShoes from '@/assets/category-shoes.jpg';

const categories = [
  {
    name: 'Women',
    image: categoryWomen,
    href: '/women',
    count: '248 items',
  },
  {
    name: 'Men',
    image: categoryMen,
    href: '/men',
    count: '186 items',
  },
  {
    name: 'Accessories',
    image: categoryAccessories,
    href: '/accessories',
    count: '124 items',
  },
  {
    name: 'Shoes',
    image: categoryShoes,
    href: '/shoes',
    count: '92 items',
  },
];

export const CategorySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Browse
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-medium">
            Shop by Category
          </h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={category.href}
                className="group block relative overflow-hidden aspect-[3/4]"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-xl lg:text-2xl font-medium text-background mb-1">
                        {category.name}
                      </h3>
                      <p className="text-xs text-background/70 tracking-wider uppercase">
                        {category.count}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-background" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
