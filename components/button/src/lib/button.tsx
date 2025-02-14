import React from 'react';
import './button.module.css'; // Importiamo il file CSS per lo stile

// Definiamo i tipi per i props
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  style = {},
  icon = null,
  size = 'medium',
  variant = 'primary',
}: ButtonProps) => {
  // Creiamo una classe dinamica in base ai props
  const buttonClass = `button ${className} ${size} ${variant} ${disabled ? 'disabled' : ''}`;

  return (
    <button
      type={type}
      className={buttonClass}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;