import { isAuthenticated } from '@/lib/auth';
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Check if user is trying to access protected routes
  const protectedRoutes = ['/add-item'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  
  if (isProtectedRoute) {
    const authCookie = request.cookies.get('auth');
    const isAuth = authCookie && authCookie.value === 'authenticated';
    
    if (!isAuth) {
      // Redirect to login page
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item/:path*'],
};
