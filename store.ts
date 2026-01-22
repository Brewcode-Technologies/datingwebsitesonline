import { create } from 'zustand';
import { Product } from './sanity.types';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  favoriteProduct: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  getItemCount: (productId: string) => number;
  addToFavorite: (product: Product) => void;
  removeFromFavorite: (productId: string) => void;
  addMultipleItems: (products: Product[]) => void;
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  favoriteProduct: [],
  
  addItem: (product: Product) => {
    const items = get().items;
    const existingItem = items.find(item => item._id === product._id);
    
    if (existingItem) {
      set({
        items: items.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        items: [...items, { ...product, quantity: 1 }]
      });
    }
  },
  
  removeItem: (productId: string) => {
    set({
      items: get().items.filter(item => item._id !== productId)
    });
  },
  
  updateQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    
    set({
      items: get().items.map(item =>
        item._id === productId
          ? { ...item, quantity }
          : item
      )
    });
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getItemCount: (productId: string) => {
    const item = get().items.find(item => item._id === productId);
    return item ? item.quantity : 0;
  },
  
  addToFavorite: (product: Product) => {
    const favorites = get().favoriteProduct;
    const exists = favorites.find(fav => fav._id === product._id);
    if (!exists) {
      set({ favoriteProduct: [...favorites, product] });
    }
  },
  
  removeFromFavorite: (productId: string) => {
    set({
      favoriteProduct: get().favoriteProduct.filter(fav => fav._id !== productId)
    });
  },
  
  addMultipleItems: (products: Product[]) => {
    const currentItems = get().items;
    const newItems = [...currentItems];
    
    products.forEach(product => {
      const existingItem = newItems.find(item => item._id === product._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newItems.push({ ...product, quantity: 1 });
      }
    });
    
    set({ items: newItems });
  }
}));

export default useCartStore;