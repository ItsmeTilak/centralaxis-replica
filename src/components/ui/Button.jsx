import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  href, 
  variant = 'white', 
  size = 'md',
  edge = 'rounded',
  className = '',
  onClick,
  animate = true,
  ...props 
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-sm',
    wd: 'w-64 px-8 py-4 text-sm', 
  };

  // Variant classes
  const variantClasses = {
    white: 'bg-white text-grayscale-900 hover:bg-grayscale-100',
    purple: 'bg-[radial-gradient(ellipse_at_center,_#7c3aed_0%,_#a76bed_300%)] text-white hover:bg-[radial-gradient(ellipse_at_center,_#6d28d9_0%,_#7c3aed_300%)]',
  };
  // Edge classes
  const edgeClasses = {
    rounded: 'rounded-lg',
    none: 'rounded-none',
  };

  // Base classes
  const baseClasses = 'font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  // Combined classes
  const buttonClasses = `${baseClasses} ${edgeClasses[edge]} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // Filter out custom props that shouldn't be passed to DOM elements
  const filteredProps = {...props};
  // Remove any boolean attributes that might cause issues
  ['white', 'purple', 'sm', 'md', 'lg', 'rounded', 'none'].forEach(attr => {
    delete filteredProps[attr];
  });

  // Button with animation
  const ButtonContent = () => (
    animate ? (
      <motion.span
        className="w-full"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    ) : (
      <>{children}</>
    )
  );

  // If an href is provided, use Link component
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...filteredProps}>
        <ButtonContent />
      </Link>
    );
  }

  // Otherwise, render a button element
  return (
    <button className={buttonClasses} onClick={onClick} {...filteredProps}>
      <ButtonContent />
    </button>
  );
};

export default Button;