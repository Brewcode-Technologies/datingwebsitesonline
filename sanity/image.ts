export const image = (source: any) => {
  return {
    size: (width: number, height: number) => ({
      url: () => source || '/placeholder-image.jpg'
    }),
    url: () => source || '/placeholder-image.jpg'
  };
};