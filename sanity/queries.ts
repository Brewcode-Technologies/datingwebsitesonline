import { Category, Product } from '../sanity.types';

// Minimal Sanity queries for build compatibility

export const getFeaturedCategory = async (limit: number = 4): Promise<Category[]> => {
  // Return empty array for build compatibility
  return [];
};

export const getAllCategories = async (): Promise<Category[]> => {
  // Return empty array for build compatibility
  return [];
};

export const getAllProducts = async (): Promise<Product[]> => {
  // Return empty array for build compatibility
  return [];
};

export const getLatestBlogs = async (limit: number = 3): Promise<any[]> => {
  // Return empty array for build compatibility
  return [];
};

export const getAllBrands = async (): Promise<any[]> => {
  // Return empty array for build compatibility
  return [];
};