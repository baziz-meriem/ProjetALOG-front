import { NextResponse, NextRequest } from "next/server";


export async function middleware(req, res) {
  const { cookies } = req;

  const loggedinUser = cookies.get('user');
  

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (loggedinUser) {
      const dashboardUrl = new URL('/dashboard', req.url)
      return NextResponse.redirect(dashboardUrl)
    }
  }
}
