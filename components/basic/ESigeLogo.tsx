import { globalImages } from "@/util/images";
import Image from "next/image";
import React from "react";

const ESigeLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={globalImages.esige_logo}
      alt="esige logo"
      width={150}
      height={150}
      className={className && className}
    />
  );
};

export default ESigeLogo;
