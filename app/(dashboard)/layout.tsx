"use client";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/NavBar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  

  const collapseMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };
  return (
    <div className="flex w-full">
      <section>
        <Navbar isMenuOpen={isMenuOpen} />
      </section>

      <section className="flex flex-col flex-1 w-full">
        <Header isMenuOpen={isMenuOpen} collapseMenu={collapseMenu} />
        <div className="p-8">{children}</div>
      </section>
    </div>
  );
}
