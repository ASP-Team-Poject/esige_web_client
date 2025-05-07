import React from "react";
import H1 from "../basic/H1";

const PageContentWrapper = ({
  pageTitle,
  className,
  children,
}: Readonly<{
  pageTitle: string;
  className?: string;
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={`bg-white rounded-md p-4 flex flex-col gap-4 ${
        className && className
      }`}
    >
      <H1 title={pageTitle} />
      {children}
    </div>
  );
};

export default PageContentWrapper;
