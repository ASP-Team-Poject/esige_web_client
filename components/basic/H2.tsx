import React from "react";

const H2 = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h2
      className={`text-xl font-bold text-primary_color ${
        className && className
      }`}
    >
      {title}
    </h2>
  );
};

export default H2;
