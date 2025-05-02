export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <section>Navigation</section>
      <section>{children}</section>
    </div>
  );
}
