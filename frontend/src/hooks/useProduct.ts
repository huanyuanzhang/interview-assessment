import { useState, useEffect, useCallback } from 'react';
import { Product, Spec, CartItem } from '../types/product';
import { ProductService } from '../services/productService';
import { toast } from 'react-hot-toast';

export const useProduct = (productId: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSpec, setSelectedSpec] = useState<Spec | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await ProductService.getProductDetails(productId);
        setProduct(data);
        if (data.specs.length > 0) {
          setSelectedSpec(data.specs[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleSpecChange = useCallback((spec: Spec) => {
    setSelectedSpec(spec);
    setQuantity(1);
  }, []);

  const handleQuantityChange = useCallback((newQuantity: number) => {
    setQuantity(newQuantity);
  }, []);

  const handleAddToCart = useCallback(async () => {
    if (!selectedSpec) return;

    try {
      const cartItem: CartItem = {
        productId,
        specId: selectedSpec.id,
        quantity,
        price: selectedSpec.options.find(opt => opt.id === selectedSpec.id)?.price || 0
      };

      await ProductService.addToCart(cartItem);
      setCartCount(prev => prev + quantity);

      toast.success('已加入购物车');
    } catch (err) {
      toast.error('加入购物车失败');
    }
  }, [productId, selectedSpec, quantity]);

  return {
    product,
    selectedSpec,
    quantity,
    loading,
    error,
    cartCount,
    handleSpecChange,
    handleQuantityChange,
    handleAddToCart
  };
};