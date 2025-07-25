import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68784c41d07a51cd915660a2", 
  requiresAuth: true // Ensure authentication is required for all operations
});
