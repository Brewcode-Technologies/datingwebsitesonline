export const getProductReviewsAPI = async (productId: string) => {
  return { 
    reviews: [], 
    totalReviews: 0, 
    averageRating: 0,
    ratingDistribution: {
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStar: 0
    }
  };
};

export const markReviewHelpfulAPI = async (reviewId: string) => {
  return { success: true, message: 'Review marked as helpful' };
};

export const submitReviewAPI = async (reviewData: any) => {
  return { success: true, message: 'Review submitted successfully' };
};