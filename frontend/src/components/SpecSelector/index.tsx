import React from 'react';
import styles from './styles.module.css';

interface SpecSelectorProps {
  specs: Array<{
    id: string;
    name: string;
    options: Array<{
      id: string;
      name: string;
      price: number;
      stock: number;
    }>;
  }>;
  selectedSpec: {
    id: string;
    name: string;
    options: Array<{
      id: string;
      name: string;
      price: number;
      stock: number;
    }>;
  } | null;
  onSpecChange: (spec: { id: string; name: string; options: Array<{ id: string; name: string; price: number; stock: number; }> }) => void;
}

const SpecSelector: React.FC<SpecSelectorProps> = ({ specs, selectedSpec, onSpecChange }) => {
  return (
    <div className={styles.specSelector}>
      {specs.map((spec) => (
        <div key={spec.id} className={styles.specGroup}>
          <h3 className={styles.specName}>{spec.name}</h3>
          <div className={styles.specOptions}>
            {spec.options.map((option) => (
              <button
                key={option.id}
                onClick={() => onSpecChange(spec)}
                disabled={option.stock === 0}
                className={`${styles.specOption} ${selectedSpec?.id === spec.id ? styles.selected : ''} ${option.stock === 0 ? styles.outOfStock : ''}`}
              >
                {option.name}
                {option.stock === 0 && <span className={styles.stockLabel}>Out of Stock</span>}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecSelector;