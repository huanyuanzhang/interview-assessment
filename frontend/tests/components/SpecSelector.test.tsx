import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SpecSelector from '../../src/components/SpecSelector';

describe('SpecSelector Component', () => {
  const mockSpecs = [
    {
      id: 'color',
      name: '颜色',
      options: [
        { id: 'black', name: '黑色', price: 999, stock: 50 },
        { id: 'white', name: '白色', price: 999, stock: 30 },
        { id: 'blue', name: '蓝色', price: 999, stock: 0 }
      ]
    },
    {
      id: 'capacity',
      name: '容量',
      options: [
        { id: 'standard', name: '标准版', price: 999, stock: 100 },
        { id: 'pro', name: '专业版', price: 1299, stock: 20 }
      ]
    }
  ];

  it('should render spec groups and options', () => {
    render(<SpecSelector specs={mockSpecs} selectedSpec={null} onSpecChange={() => {}} />);

    expect(screen.getByText('颜色')).toBeInTheDocument();
    expect(screen.getByText('容量')).toBeInTheDocument();
    expect(screen.getByText('黑色')).toBeInTheDocument();
    expect(screen.getByText('白色')).toBeInTheDocument();
    expect(screen.getByText('蓝色')).toBeInTheDocument();
    expect(screen.getByText('标准版')).toBeInTheDocument();
    expect(screen.getByText('专业版')).toBeInTheDocument();
  });

  it('should call onSpecChange when option is clicked', () => {
    const handleSpecChange = jest.fn();
    render(<SpecSelector specs={mockSpecs} selectedSpec={null} onSpecChange={handleSpecChange} />);

    const blackOption = screen.getByText('黑色');
    fireEvent.click(blackOption);

    expect(handleSpecChange).toHaveBeenCalledWith(mockSpecs[0]);
  });
});