import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  if (
    currentPath.startsWith("/home") ||
    currentPath.startsWith("/schools") ||
    currentPath.startsWith("/users") ||
    currentPath.startsWith("/encodings") ||
    currentPath.startsWith("/reporting") ||
    currentPath.startsWith("/profile")
  ) {
    console.log("currentPath => ", currentPath);

    const userId = request.cookies.get("userId")?.value;

    console.log("userId => ", userId);

    if (!userId) {
      console.log("Not logged in user");
      return NextResponse.redirect(new URL("/", request.url)); // Redirect to login page
    }
  }

  return NextResponse.next();
}
