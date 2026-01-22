export const getUserWalletBalance = async (userId: string) => {
  return { balance: 0 };
};

export const addFundsToWallet = async (userId: string, amount: number) => {
  return { success: true, message: 'Funds added successfully' };
};

export const requestWithdrawal = async (userId: string, amount: number) => {
  return { success: true, message: 'Withdrawal request submitted' };
};

export const cancelWithdrawalRequest = async (requestId: string) => {
  return { success: true, message: 'Withdrawal request cancelled' };
};

export const getWithdrawalRequests = async (userId: string) => {
  return { requests: [] };
};

export const getWalletTransactions = async (userId: string) => {
  return { transactions: [] };
};