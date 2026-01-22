export const requestOrderCancellation = async (orderId: string, reason?: string) => {
  console.log('Order cancellation requested:', orderId, reason);
  return { success: true, message: 'Cancellation request submitted successfully' };
};