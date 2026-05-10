import React, { useEffect, useState } from 'react';
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
  const [selected, setSelected] = useState([])
  useEffect(() => {
    const up = ['black', 'white', 'blue']
    const down = ['standard', 'pro']
    //@ts-ignore
    if (up.includes(selectedSpec?.id)) {
      setSelected((pre: any) => {
        let curr = pre.filter((item: any) => !up.includes(item))
        curr.push(selectedSpec?.id)
        return curr
      })

    } else if (down.includes(String(selectedSpec?.id))) {

      setSelected((pre: any) => {

        let curr = pre.filter((item: any) => !down.includes(item))
        curr.push(selectedSpec?.id)
        return curr
      })
    }

  }, [selectedSpec])

  return (
    <div className={styles.specSelector}>
      {specs.map((spec) => (
        <div key={spec.id} className={styles.specGroup}>
          <h3 className={styles.specName}>{spec.name}</h3>
          <div className={styles.specOptions}>
            {spec.options.map((option) => (
              <button
                key={option.id}
                onClick={() => onSpecChange(option)}
                disabled={option.stock === 0}
                className={`${styles.specOption} ${selected.includes(String(option?.id)) ? styles.selected : ''} ${option.stock === 0 ? styles.outOfStock : ''}`}
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