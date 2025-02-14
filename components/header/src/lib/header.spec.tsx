import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './header';

describe('Header Component', () => {
  const title = 'Welcome to My Website';
  const subtitle = 'Your journey starts here';
  const logo = <span>MyLogo</span>;
  const ctaText = 'Get Started';

  // Test 1: Verifica che il componente venga renderizzato correttamente
  it('should render successfully', () => {
    const { baseElement } = render(<Header title={title} />);
    expect(baseElement).toBeTruthy();
  });

  // Test 2: Verifica che il titolo e il sottotitolo vengano renderizzati correttamente
  it('should render the title and subtitle', () => {
    render(<Header title={title} subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByText(subtitle)).toBeTruthy();
  });

  // Test 3: Verifica che il logo venga renderizzato correttamente
  it('should render the logo', () => {
    render(<Header title={title} logo={logo} />);
    expect(screen.getByText('MyLogo')).toBeTruthy();
  });

  // Test 4: Verifica che il pulsante CTA venga renderizzato e funzioni correttamente
  it('should render the CTA button and handle clicks', () => {
    const handleCtaClick = jest.fn();
    render(<Header title={title} ctaText={ctaText} onCtaClick={handleCtaClick} />);
    const ctaButton = screen.getByText(ctaText);
    fireEvent.click(ctaButton);
    expect(handleCtaClick).toHaveBeenCalledTimes(1);
  });

  // Test 5: Verifica che l'header sia sticky quando isSticky è true
  it('should be sticky when isSticky is true', () => {
    render(<Header title={title} isSticky />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement.classList.contains('sticky')).toBe(true);
  });

  // Test 6: Verifica che il tema dark sia applicato correttamente
  it('should apply the dark theme', () => {
    render(<Header title={title} theme="dark" />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement.classList.contains('dark')).toBe(true);
  });
});