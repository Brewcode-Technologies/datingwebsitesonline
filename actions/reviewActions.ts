export const canUserReviewProduct = async (productId: string, userId?: string) => {
  return { 
    canReview: true,
    hasPurchased: false,
    hasAlreadyReviewed: false
  };
};