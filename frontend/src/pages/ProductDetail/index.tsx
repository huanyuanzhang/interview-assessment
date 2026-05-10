import React from 'react';
import styles from './styles.module.css';
import ProductImage from '../../components/ProductImage';
import ProductInfo from '../../components/ProductInfo';
import SpecSelector from '../../components/SpecSelector';
import QuantitySelector from '../../components/QuantitySelector';
import CartButton from '../../components/CartButton';
import { useProduct } from '../../hooks/useProduct';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const {
    product,
    selectedSpec,
    quantity,
    loading,
    error,
    cartCount,
    handleSpecChange,
    handleQuantityChange,
    handleAddToCart
  } = useProduct(productId);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!product) return <div className={styles.error}>Product not found</div>;

  const maxQuantity = selectedSpec?.options.find(opt => opt.id === selectedSpec.id)?.stock || 0;

  return (
    <div className={styles.productDetail}>
      <ProductImage images={product.images} />
      <div className={styles.productInfoSection}>
        <ProductInfo product={product} />
   
        <SpecSelector
          specs={product.specs}
          selectedSpec={selectedSpec}
          onSpecChange={handleSpecChange}
        />
        <QuantitySelector
          quantity={quantity}
          maxQuantity={maxQuantity}
          onQuantityChange={handleQuantityChange}
        />
        <CartButton
          onClick={handleAddToCart}
          disabled={!selectedSpec || quantity === 0}
          cartCount={cartCount}
        />
      </div>
    </div>
  );
};

export default ProductDetail;