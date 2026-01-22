// Minimal Sanity backend client for build compatibility

export const backendClient = {
  fetch: async (query: string, params?: any) => {
    // Return empty array for build compatibility
    return [];
  }
};