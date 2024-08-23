import { NextRequest, NextResponse } from "next/server";

const unauthenticatedURL = ["/"];

export default function middleware(req: NextRequest) {
  if (!unauthenticatedURL.includes(req.nextUrl.pathname)) {
    const user = req.cookies.get("userData")?.value;
    const url = req.nextUrl.clone();
    url.pathname = "/";
    if (!user) {
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
