import React from 'react';
import styles from './styles.module.css';

interface QuantitySelectorProps {
  quantity: number;
  maxQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, maxQuantity, onQuantityChange }) => {
  const handleDecrease = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) onQuantityChange(quantity + 1);
  };

  return (
    <div className={styles.quantitySelector}>
      <button
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className={styles.quantityButton}
      >
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button
        onClick={handleIncrease}
        disabled={quantity >= maxQuantity}
        className={styles.quantityButton}
      >
        +
      </button>
      <span className={styles.stockInfo}>Stock: {maxQuantity}</span>
    </div>
  );
};

export default QuantitySelector;