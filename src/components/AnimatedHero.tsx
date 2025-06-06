import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Example: Call to action button
import { ArrowRight } from 'lucide-react';

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageUrl?: string; // Optional background or illustrative image
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  // imageUrl, // If using an image, incorporate it into the JSX
}) => {
  console.log("Rendering AnimatedHero");

  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Optional: Background image or pattern
      {imageUrl && (
        <img src={imageUrl} alt="Hero background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      )} */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-300 mb-10"
        >
          {subtitle}
        </motion.p>
        {ctaText && onCtaClick && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" onClick={onCtaClick} variant="secondary">
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnimatedHero;