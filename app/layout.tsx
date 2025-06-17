import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tableau de bord | E-Sige Rdc",
  description: "E-Sige Rdc, DIGE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-between bg-blue_light min-h-screen">
          <main className="flex justify-center flex-1"> {children}</main>
          <footer className="flex p-4 justify-center items-center">
            <label>
              by ASP{" "}
              <Link className="text-primary_color hover:opacity-80" href={"#"}>
                ASP
              </Link>
            </label>
          </footer>
        </div>
      </body>
    </html>
  );
}
