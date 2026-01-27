
import React from 'react';
import { motion } from 'framer-motion';

interface NeoButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  // Added disabled prop to NeoButtonProps
  disabled?: boolean;
}

const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  // Default disabled to false
  disabled = false
}) => {
  const variants = {
    primary: 'bg-blue-600 text-white border-black dark:border-white',
    secondary: 'bg-purple-600 text-white border-black dark:border-white',
    accent: 'bg-yellow-400 text-black border-black',
    outline: 'bg-transparent text-black dark:text-white border-black dark:border-white'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      // Added disabled attribute to motion.button
      disabled={disabled}
      whileHover={!disabled ? { y: -4, x: -4, boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" } : {}}
      whileTap={!disabled ? { y: 4, x: 4, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" } : {}}
      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      className={`
        relative px-8 py-3 font-black uppercase tracking-widest text-sm md:text-base
        border-4 rounded-none
        neo-shadow
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default NeoButton;
