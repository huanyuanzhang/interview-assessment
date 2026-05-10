import { Product, CartItem } from '../types/product';

const mockProducts: Record<string, Product> = {
  '1': {
    id: '1',
    name: '高级无线耳机',
    price: 999,
    description: '采用最新降噪技术，提供卓越的音质体验。支持蓝牙5.0，续航长达30小时。',
    images: [
      '/images/headphone1.jpg',
      '/images/headphone2.jpg',
      '/images/headphone3.jpg'
    ],
    specs: [
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
    ]
  }
};

export class ProductService {
  private static readonly API_BASE = '/api';

  static async getProductDetails(productId: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockProducts[productId];
        if (product) {
          resolve(product);
        } else {
          reject(new Error('商品不存在'));
        }
      }, 500);
    });
  }

  static async addToCart(cartItem: CartItem): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  }
}