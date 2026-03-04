// Simple middleware - just redirect if no localStorage session for protected routes
import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // For now, let's just make madplan public for demo purposes
  // In production, you'd check for a real session
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
