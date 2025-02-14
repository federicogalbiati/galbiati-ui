import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

describe('Navbar Component', () => {
  const logo = <span>MyLogo</span>;
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  // Test 1: Verifica che il componente venga renderizzato correttamente
  it('should render successfully', () => {
    const { baseElement } = render(<Navbar logo={logo} links={links} />);
    expect(baseElement).toBeTruthy();
  });

  // Test 2: Verifica che il logo e i link vengano renderizzati correttamente
  it('should render the logo and links', () => {
    render(<Navbar logo={logo} links={links} />);
    expect(screen.getByText('MyLogo')).toBeTruthy();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('About')).toBeTruthy();
  });

  // Test 3: Verifica che la funzione onLinkClick venga chiamata correttamente
  it('should call onLinkClick when a link is clicked', () => {
    const handleLinkClick = jest.fn();
    render(<Navbar logo={logo} links={links} onLinkClick={handleLinkClick} />);
    fireEvent.click(screen.getByText('Home'));
    expect(handleLinkClick).toHaveBeenCalledWith('/');
  });

  // Test 4: Verifica che la navbar sia sticky quando isSticky è true
  it('should be sticky when isSticky is true', () => {
    render(<Navbar logo={logo} links={links} isSticky />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement.classList.contains('sticky')).toBe(true);
  });

  // Test 5: Verifica che il tema dark sia applicato correttamente
  it('should apply the dark theme', () => {
    render(<Navbar logo={logo} links={links} theme="dark" />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement.classList.contains('dark')).toBe(true);
  });
});