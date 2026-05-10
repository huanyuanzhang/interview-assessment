import React, { useState } from 'react';
import styles from './styles.module.css';
import { toast } from 'react-hot-toast';

interface CartButtonProps {
  onClick: () => void;
  disabled: boolean;
  cartCount: number;
}

const CartButton: React.FC<CartButtonProps> = ({ onClick, disabled, cartCount }) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    onClick();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className={styles.cartButtonContainer}>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`${styles.cartButton} ${disabled ? styles.disabled : ''}`}
      >
        Add to Cart
      </button>
      {showToast && <div className={styles.toast}>Added to Cart</div>}
      <div className={styles.cartBadge}>{cartCount}</div>
    </div>
  );
};

export default CartButton;