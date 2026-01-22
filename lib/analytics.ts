// Minimal analytics functions for build compatibility

export const trackAddToCart = (product: any) => {
  // Analytics tracking would go here
  console.log('Add to cart tracked:', product);
};

export const trackPurchase = (items: any[], total: number) => {
  // Purchase tracking would go here
  console.log('Purchase tracked:', { items, total });
};

export const trackPageView = (page: string) => {
  // Page view tracking would go here
  console.log('Page view tracked:', page);
};

export const trackWishlistAdd = (product: any) => {
  // Wishlist add tracking would go here
  console.log('Wishlist add tracked:', product);
};

export const trackWishlistRemove = (product: any) => {
  // Wishlist remove tracking would go here
  console.log('Wishlist remove tracked:', product);
};

export const trackProductView = (product: any) => {
  // Product view tracking would go here
  console.log('Product view tracked:', product);
};

export const trackRemoveFromCart = (product: any) => {
  // Remove from cart tracking would go here
  console.log('Remove from cart tracked:', product);
};