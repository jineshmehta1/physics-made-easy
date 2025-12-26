import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Skip NextAuth routes
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // 2. ⚠️ FIX: Skip UploadThing Route
  // UploadThing sends a POST webhook to this URL. It has no session cookies,
  // so we must allow it to pass through. Internal security is handled by UploadThing's secret.
  if (pathname.startsWith("/api/uploadthing")) {
    return NextResponse.next();
  }

  const isAdminPath = pathname.startsWith("/admin");
  const isApiMutation =
    pathname.startsWith("/api") &&
    ["POST", "PUT", "DELETE"].includes(req.method);

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if ((isAdminPath || isApiMutation) && !token) {
    if (pathname.startsWith("/api")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL("/login", req.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/:path*",
  ],
};