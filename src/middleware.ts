import { NextRequest, NextResponse } from "next/server";
import Cookies from "js-cookie";
// 1. Specify protected and public routes
const protectedRoutes = ["/pages/newproduct", "/pages/edit"];
const publicRoutes = ["/pages/auth"];

export const middleware = (req: NextRequest) => {
  //   console.log("use me");
  //   // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  // const isProtectedRoute = protectedRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`)
  );
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = req.cookies.get("__session")?.value;

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/pages/auth", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    cookie &&
    !req.nextUrl.pathname.startsWith("/pages/newproduct")
  ) {
    return NextResponse.redirect(new URL("/pages/newproduct", req.nextUrl));
  }

  return NextResponse.next();
};
