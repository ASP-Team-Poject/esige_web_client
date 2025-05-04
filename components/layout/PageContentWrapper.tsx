import React from "react";
import H1 from "../basic/H1";

const PageContentWrapper = ({
  pageTitle,
  children,
}: Readonly<{
  pageTitle: string;
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col gap-4">
      <H1 title={pageTitle} />
      {children}
    </div>
  );
};

export default PageContentWrapper;
