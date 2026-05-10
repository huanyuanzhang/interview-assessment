import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from '../../src/components/QuantitySelector';

describe('QuantitySelector Component', () => {
  const mockOnQuantityChange = jest.fn();

  it('should render quantity and buttons', () => {
    render(<QuantitySelector quantity={1} maxQuantity={10} onQuantityChange={mockOnQuantityChange} />);

    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('库存: 10')).toBeInTheDocument();
  });

  it('should decrease quantity when minus button is clicked', () => {
    render(<QuantitySelector quantity={3} maxQuantity={10} onQuantityChange={mockOnQuantityChange} />);

    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);

    expect(mockOnQuantityChange).toHaveBeenCalledWith(2);
  });
});