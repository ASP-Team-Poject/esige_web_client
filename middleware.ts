import { NextResponse, NextRequest } from "next/server";
import { localStoragekeys } from "./util/constants";

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  if (
    currentPath.startsWith("/home") ||
    currentPath.startsWith("/schools") ||
    currentPath.startsWith("/users") ||
    currentPath.startsWith("/encodings") ||
    currentPath.startsWith("/reporting") ||
    currentPath.startsWith("/identifications") ||
    currentPath.startsWith("/profile")
  ) {
    const userId = request.cookies.get(localStoragekeys.USER_ID)?.value;

    if (!userId) {
      console.log("Not logged in user");
      return NextResponse.redirect(new URL("/", request.url)); // Redirect to login page
    }
  }

  return NextResponse.next();
}
