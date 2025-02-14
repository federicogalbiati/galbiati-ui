import React from 'react';
import './header.css'; // Importiamo il file CSS per lo stile

// Definiamo i tipi per i props
interface HeaderProps {
  title: string;
  subtitle?: string;
  logo?: React.ReactNode;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  theme?: 'light' | 'dark';
  isSticky?: boolean;
}

const Header = ({
  title,
  subtitle,
  logo,
  ctaText,
  onCtaClick,
  className = '',
  style = {},
  theme = 'light',
  isSticky = false,
}: HeaderProps) => {
  // Creiamo una classe dinamica in base ai props
  const headerClass = `header ${className} ${theme} ${isSticky ? 'sticky' : ''}`;

  return (
    <header className={headerClass} style={style}>
      <div className="header-content">
        {logo && <div className="header-logo">{logo}</div>}
        <div className="header-text">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {ctaText && (
          <button className="header-cta" onClick={onCtaClick}>
            {ctaText}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;