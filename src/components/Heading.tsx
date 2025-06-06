import React from 'react';
import { cn } from '@/lib/utils'; // For combining class names

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'subtle'; // Example variants
}

const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2', // Default to h2
  children,
  className,
  variant = 'default',
}) => {
  console.log(`Rendering Heading as ${Component} with variant ${variant}`);

  const baseStyles = "font-bold tracking-tight";
  const variantStyles = {
    default: "text-slate-900 dark:text-white",
    subtle: "text-slate-700 dark:text-slate-300",
  };
  const sizeStyles: Record<HeadingLevel, string> = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
    h5: "text-lg md:text-xl",
    h6: "text-base md:text-lg",
  };

  return (
    <Component
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[Component],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;