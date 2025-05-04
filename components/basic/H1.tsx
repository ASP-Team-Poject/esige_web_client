import React from "react";

const H1 = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h1
      className={`text-2xl font-bold text-primary_color ${
        className && className
      }`}
    >
      {title}
    </h1>
  );
};

export default H1;
