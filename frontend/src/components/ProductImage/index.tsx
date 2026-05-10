import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface ProductImageProps {
  images: string[];
}

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentImage]);

  return (
    <div className={styles.productImage}>
      <div className={styles.mainImage}>
        <img
          src={images[currentImage]}
          alt="商品图片"
          className={imageLoaded ? styles.loaded : styles.loading}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`缩略图 ${index + 1}`}
            onClick={() => setCurrentImage(index)}
            className={`${styles.thumbnail} ${currentImage === index ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;