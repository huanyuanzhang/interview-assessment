import React from 'react';
import styles from './styles.module.css';

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    description: string;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className={styles.productInfo}>
      <h1 className={styles.name}>{product.name}</h1>
      <div className={styles.price}>
        ¥{product.price.toFixed(2)}
      </div>
      <p className={styles.description}>
        {product.description}
      </p>
    </div>
  );
};

export default ProductInfo;