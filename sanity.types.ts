// Minimal types for build compatibility
export interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  images?: any[];
  category?: string;
  categories?: (string | { _ref: string })[];
  slug?: string | { current: string };
  stock?: number;
  status?: string;
  averageRating?: number;
  totalReviews?: number;
  originalPrice?: number;
  discount?: number;
  brand?: { _ref: string };
  _createdAt?: string;
  variant?: string;
  weight?: string;
  dimensions?: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string | { current: string };
  description?: string;
  image?: any;
  featured?: boolean;
  range?: string;
  title?: string;
}

// Sanity image types
export interface SanityImageCrop {
  _type: 'sanity.imageCrop';
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface SanityImageHotspot {
  _type: 'sanity.imageHotspot';
  height: number;
  width: number;
  x: number;
  y: number;
}

export const internalGroqTypeReferenceTo = Symbol('internalGroqTypeReferenceTo');

export type MY_ORDERS_QUERYResult = any[];
export type BRANDS_QUERYResult = any[];
export type ALL_PRODUCTS_QUERYResult = Product[];