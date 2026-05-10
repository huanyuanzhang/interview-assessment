import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartButton from '../../src/components/CartButton';

describe('CartButton Component', () => {
  const mockOnClick = jest.fn();

  it('should render button and cart badge', () => {
    render(<CartButton onClick={mockOnClick} disabled={false} cartCount={3} />);

    expect(screen.getByText('加入购物车')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    render(<CartButton onClick={mockOnClick} disabled={false} cartCount={3} />);

    const button = screen.getByText('加入购物车');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});