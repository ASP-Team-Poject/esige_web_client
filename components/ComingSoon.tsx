import { globalImages } from "@/util/images";
import Image from "next/image";
import React from "react";
import H1 from "./basic/H1";
import H2 from "./basic/H2";

const ComingSoon = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className="flex flex-col items-center gap-8 p-8 m-8">
      <H1 title={`La Page ${pageTitle}`} />
      <Image
        src={globalImages.coming_soon}
        alt="coming soon"
        width={400}
        height={400}
      />
      <H2 title="En Construction" />
    </div>
  );
};

export default ComingSoon;
