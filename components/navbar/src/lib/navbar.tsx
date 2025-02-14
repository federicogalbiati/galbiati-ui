import React from 'react';
import './navbar.module.css'; // Importiamo il file CSS per lo stile

// Definiamo i tipi per i props
interface LinkItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: React.ReactNode;
  links: LinkItem[];
  onLinkClick?: (href: string) => void;
  className?: string;
  style?: React.CSSProperties;
  isSticky?: boolean;
  theme?: 'light' | 'dark';
}

const Navbar = ({
  logo,
  links,
  onLinkClick,
  className = '',
  style = {},
  isSticky = false,
  theme = 'light',
}: NavbarProps) => {
  // Creiamo una classe dinamica in base ai props
  const navbarClass = `navbar ${className} ${theme} ${isSticky ? 'sticky' : ''}`;

  return (
    <nav className={navbarClass} style={style}>
      <div className="navbar-logo">{logo}</div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onLinkClick?.(link.href);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;