// Mock authentication with hardcoded credentials
const MOCK_CREDENTIALS = {
  email: 'user@example.com',
  password: 'password123'
};

export async function validateLogin(email, password) {
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return (
    email === MOCK_CREDENTIALS.email &&
    password === MOCK_CREDENTIALS.password
  );
}

export function setAuthCookie(document) {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours
  const cookieString = `auth=authenticated; path=/; expires=${expiresDate.toUTCString()}; SameSite=Lax`;
  document.cookie = cookieString;
}

export function clearAuthCookie(document) {
  document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
}

export function isAuthenticated(cookieString) {
  if (typeof window === 'undefined' && !cookieString) return false;
  const cookies = cookieString || document.cookie;
  return cookies.includes('auth=authenticated');
}

export function getAuthToken(cookieString) {
  if (typeof window === 'undefined' && !cookieString) return null;
  const cookies = cookieString || document.cookie;
  const authCookie = cookies.split(';').find(c => c.trim().startsWith('auth='));
  return authCookie ? authCookie.split('=')[1] : null;
}
