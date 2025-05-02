import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <section>
        <Navbar />
      </section>
      <section className="flex flex-col flex-1">
        <Header />
        {children}
      </section>
    </div>
  );
}
