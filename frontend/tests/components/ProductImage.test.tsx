import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductImage from '../../src/components/ProductImage';

describe('ProductImage Component', () => {
  const mockImages = [
    '/images/headphone1.jpg',
    '/images/headphone2.jpg',
    '/images/headphone3.jpg'
  ];

  it('should render main image and thumbnails', () => {
    render(<ProductImage images={mockImages} />);

    const mainImage = screen.getByAltText('商品图片');
    expect(mainImage).toBeInTheDocument();

    const thumbnails = screen.getAllByAltText(/缩略图/);
    expect(thumbnails).toHaveLength(3);
  });
});