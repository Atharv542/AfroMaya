import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';
import product7 from '@/assets/product-7.jpg';
import product8 from '@/assets/product-8.jpg';

const products = [
  {
    id: 1,
    name: 'Cashmere Sweater',
    price: 295,
    image: product1,
    category: 'Knitwear',
    isNew: true,
  },
  {
    id: 2,
    name: 'Silk Blouse',
    price: 185,
    image: product2,
    category: 'Tops',
    isNew: false,
  },
  {
    id: 3,
    name: 'Wool Blazer',
    price: 425,
    image: product3,
    category: 'Outerwear',
    isNew: true,
  },
  {
    id: 4,
    name: 'Wide-Leg Trousers',
    price: 165,
    image: product4,
    category: 'Bottoms',
    isNew: false,
  },
  {
    id: 5,
    name: 'Leather Tote',
    price: 375,
    image: product5,
    category: 'Bags',
    isNew: false,
  },
  {
    id: 6,
    name: 'Cotton Shirt',
    price: 125,
    image: product6,
    category: 'Shirts',
    isNew: true,
  },
  {
    id: 7,
    name: 'Gold Necklace',
    price: 95,
    image: product7,
    category: 'Jewelry',
    isNew: false,
  },
  {
    id: 8,
    name: 'Leather Boots',
    price: 345,
    image: product8,
    category: 'Shoes',
    isNew: true,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Featured
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-medium">
              New Arrivals
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 lg:mt-0 text-sm tracking-wider uppercase hover:text-accent transition-colors underline underline-offset-4"
          >
            View All Products
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* New Badge */}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs px-2 py-1 tracking-wider uppercase">
                      New
                    </span>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-center gap-2">
                      <button
                        className="w-10 h-10 bg-background cursor-pointer flex items-center justify-center hover:bg-amber-400 hover:text-white transition-colors"
                        aria-label="Add to wishlist"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                      <button
                        className="w-10 h-10 bg-background flex items-center justify-center hover:bg-amber-400 cursor-pointer hover:text-white transition-colors"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    {product.category}
                  </p>
                  <h3 className="font-medium text-sm lg:text-base group-hover:text-amber-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium">${product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
