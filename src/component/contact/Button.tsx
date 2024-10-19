import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, onClick, className, children }) => {
  if (href) {
    return (
      <Link href={href} className={`btn ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
