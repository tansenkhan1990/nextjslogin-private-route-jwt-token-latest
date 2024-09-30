import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  const protectedRoutes = ['/dashboard', '/profile', '/settings'];

  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
	if (!token) {
	  return NextResponse.redirect(new URL('/login', request.url));
	}
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};