// Minimal image utility for build compatibility

export const urlFor = (source: any) => {
  return {
    url: () => {
      // Return a placeholder or the source itself
      if (typeof source === 'string') {
        return source;
      }
      
      // For Sanity image objects, return a placeholder
      return '/placeholder-image.jpg';
    }
  };
};