import React from 'react';
import '../style/button.css';

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={`my-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
