import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform';
  const variantStyles = variant === 'primary' 
    ? 'bg-blue-500 text-white hover:bg-blue-600' 
    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} hover:scale-110 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
