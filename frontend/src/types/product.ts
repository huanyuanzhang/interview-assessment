export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  specs: Spec[];
}

export interface Spec {
  id: string;
  name: string;
  options: SpecOption[];
}

export interface SpecOption {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface CartItem {
  productId: string;
  specId: string;
  quantity: number;
  price: number;
}

export interface ProductState {
  product: Product | null;
  selectedSpec: Spec | null;
  quantity: number;
  loading: boolean;
  error: string | null;
  cartCount: number;
}