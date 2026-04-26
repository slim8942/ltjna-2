import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect /admin page (but not /admin itself if there's a login check client-side)
  // API routes handle their own auth — this is an extra layer for the page
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('ltjna_admin')?.value;
    if (!token || token !== process.env.ADMIN_SECRET) {
      // Let the client-side handle the redirect to login
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
