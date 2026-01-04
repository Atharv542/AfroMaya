import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F0EBE6]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-amber-500 mb-4">
            Stay Updated
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-medium mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive updates on new arrivals, exclusive offers, and style inspiration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button type="submit" className='bg-black text-white px-8 py-4 flex gap-2 items-center justify-center text-md cursor-pointer font-medium rounded-sm hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'>
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy
          </p>
        </motion.div>
      </div>
    </section>
  );
};
