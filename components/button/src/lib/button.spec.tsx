import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button Component', () => {
  const label = 'Click me';
  const handleClick = jest.fn();

  // Test 1: Verifica che il componente venga renderizzato correttamente
  it('should render successfully', () => {
    const { baseElement } = render(<Button label={label} onClick={handleClick} />);
    expect(baseElement).toBeTruthy();
  });

  // Test 2: Verifica che il testo del bottone venga renderizzato correttamente
  it('should render the correct label', () => {
    render(<Button label={label} onClick={handleClick} />);
    expect(screen.getByText(label)).toBeTruthy();
  });

  // Test 3: Verifica che la funzione onClick venga chiamata correttamente
  it('should call onClick when clicked', () => {
    render(<Button label={label} onClick={handleClick} />);
    const buttonElement = screen.getByText(label);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 4: Verifica che il bottone sia disabilitato quando il prop disabled è true
  it('should be disabled when disabled is true', () => {
    render(<Button label={label} onClick={handleClick} disabled />);
    const buttonElement = screen.getByText(label) as HTMLButtonElement;
    expect(buttonElement.disabled).toBe(true);
  });

  // Test 5: Verifica che il bottone abbia la classe corretta in base al prop size
  it('should apply the correct class for the small size', () => {
    render(<Button label={label} onClick={handleClick} size="small" />);
    const buttonElement = screen.getByText(label);
    expect(buttonElement.classList.contains('small')).toBe(true);
  });

  // Test 6: Verifica che il bottone abbia la classe corretta in base al prop variant
  it('should apply the correct class for the primary variant', () => {
    render(<Button label={label} onClick={handleClick} variant="primary" />);
    const buttonElement = screen.getByText(label);
    expect(buttonElement.classList.contains('primary')).toBe(true);
  });
});