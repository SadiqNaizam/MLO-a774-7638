import React from 'react';
import { cn } from '@/lib/utils';

type TextElement = 'p' | 'span' | 'div';

interface TextProps {
  as?: TextElement;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  muted?: boolean;
}

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  children,
  className,
  size = 'base',
  muted = false,
}) => {
  console.log(`Rendering Text as ${Component} with size ${size}`);

  const sizeStyles = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <Component
      className={cn(
        "leading-relaxed",
        sizeStyles[size],
        muted ? "text-slate-500 dark:text-slate-400" : "text-slate-700 dark:text-slate-300",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Text;